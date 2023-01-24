import * as nearAPI from "near-api-js";
import { parseNearAmount, formatNearAmount } from 'near-api-js/lib/utils/format';

import { isDev } from "../config";

//+++++++ Test Net +++++++++++++++++++++
// export const FT_CONTRACT_ID = "usdfx_test_13.xuguangxia.testnet"
// export const USDT_CONTRACT_ID = "usdt.fakes.testnet"


export const FT_CONTRACT_ID = "usdfx.near"
export const USDT_CONTRACT_ID = "dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near"

export const GAS_FOR_FT_APPROVE = "20000000000000";
export const GAS_FOR_FT_TRANSFER = "30000000000000";
export const GAS_FOR_SWAP_TOKEN = "50000000000000";
export const GAS_FOR_RESOLVE_TRANSFER = "10000000000000";
export const GAS_FOR_SIMPLE_TRANSACTION = "10000000000000";
export const MAX_GAS = "300000000000000";
export const DEPOSIT = "1000000000000000000000";

const initWalletProvider = async () => {
    const config = isDev ? {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org'
    } : {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org'
    };

    const near = await nearAPI.connect({
        deps: {
          keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()
        },
        ...config
    });

    const wallet = new nearAPI.WalletConnection(near);

    return { near, wallet }
}

export const isSignedInNear = async () => {
    const { wallet } = await initWalletProvider();

    if (wallet && wallet.isSignedIn()) {
        let accountState = await wallet.account().state();

        let storageBalanceOf = await wallet.account().viewFunction(FT_CONTRACT_ID, "storage_balance_of", {
          account_id: wallet.account().accountId
        });

        let storageBalanceBounds = await wallet.account().viewFunction(FT_CONTRACT_ID, "storage_balance_bounds", {
        });

        if (storageBalanceOf == null || storageBalanceOf.total < storageBalanceBounds.min) {

            await wallet.account().functionCall({
                contractId: FT_CONTRACT_ID,
                methodName: "storage_deposit",
                args: {
                    account_id: wallet.account().accountId,
                },
                gas: GAS_FOR_FT_TRANSFER,
                attachedDeposit: storageBalanceBounds.max
            });
        }
    }

    let isSignedIn = wallet.isSignedIn(), usdt = 0, usdfx = 0, locked = 0, available = 0, distribution = 0, timestamp = 0;

    if (wallet && wallet.isSignedIn()) {
        try {
            usdt = await wallet?.account().viewFunction(USDT_CONTRACT_ID, "ft_balance_of", {
                account_id: wallet.account().accountId
            });
      
            usdfx = await wallet?.account().viewFunction(FT_CONTRACT_ID, "ft_balance_of", {
                account_id: wallet.account().accountId
            });

            let vest_info = await wallet?.account().viewFunction(FT_CONTRACT_ID, "get_supply_vesting_info", {
                account_id: wallet.account().accountId
            });

            let now = Math.round((new Date()).getTime() / 1000);
            let meetFirst = false;

            for (let i = 0; i < vest_info.length; i++) {
                for (let j = 0; j < vest_info[i].unlocking_time.length; j++) {
                    if (now > vest_info[i].unlocking_time[j]) {
                        available += Number.parseInt((vest_info[i].token_amount * vest_info[i].unlocking_portion[j] / 10000).toString());
                    } else {
                        locked += Number.parseInt((vest_info[i].token_amount * vest_info[i].unlocking_portion[j] / 10000).toString());

                        if (meetFirst == false) {
                            distribution = Number.parseInt((vest_info[i].token_amount * vest_info[i].unlocking_portion[j] / 10000).toString());
                            timestamp = vest_info[i].unlocking_time[j] * 1000;

                            meetFirst = true;
                        }
                    }
                }
            }

        } catch (err) {
            console.log(err);
        }
    }

    return { 
        isSignedIn,
        usdt: formatNearAmount(usdt + '000000000000000000'),
        usdfx: formatNearAmount(usdfx + '000000000000000000'),
        locked: formatNearAmount(locked + '000000000000000000'),
        available: formatNearAmount(available + '000000000000000000'),
        distribution: formatNearAmount(distribution + '000000000000000000'),
        timestamp
    };
}

export const signInNear = async () => {
    const { wallet } = await initWalletProvider();

    if (wallet) {
        await wallet.requestSignIn(FT_CONTRACT_ID);
    }
}

export const signOutNear = async () => {
    const { wallet } = await initWalletProvider();

    if (!wallet) return

    wallet.signOut();
    window.location.replace(window.location.origin);
}

export const swapInNear = async(swapAmount) => {
    const { wallet } = await initWalletProvider();

    if (!wallet.isSignedIn()) return;

    let amount = parseNearAmount(swapAmount.toString());

    if (amount === undefined) {
        amount = '';
    }

    if (amount.length > 18) {
        await wallet.account().signAndSendTransaction({
            receiverId: USDT_CONTRACT_ID,
            actions: [
                nearAPI.transactions.functionCall(
                    "ft_transfer_call",
                    Buffer.from(JSON.stringify({
                        receiver_id: FT_CONTRACT_ID,
                        amount: amount.substring(0, amount.length - 18),
                        msg: JSON.stringify({ swap_info: "Swap to USDFX" }),
                    })),
                    GAS_FOR_SWAP_TOKEN,
                    "1"
                ),
                nearAPI.transactions.functionCall(
                    "ft_transfer",
                    Buffer.from(JSON.stringify({
                        receiver_id: FT_CONTRACT_ID,
                        amount: parseNearAmount("1")?.substring(0, amount.length - 18),
                    })),
                    GAS_FOR_SWAP_TOKEN,
                    "1"
                ),
            ],
        });
    }
}

export const Claim = async() => {
    const { wallet } = await initWalletProvider();
    if (!wallet.isSignedIn()){
        await wallet.account().functionCall({
            contractId: FT_CONTRACT_ID,
            methodName: "claim_token",
            args: {
            },
            gas: GAS_FOR_SWAP_TOKEN,
            attachedDeposit: "1"
        });
    }
    else{

    }
}
