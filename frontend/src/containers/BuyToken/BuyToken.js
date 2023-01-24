import React, { useState, useEffect, useContext } from 'react';
import { WalletContext } from '../../providers';

import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './styles.module.scss';

import { Multichain } from '../Multichain/Multichain';

import Metamask from '../../assets/images/tokensale/metamask.png'
import Walletconnet from '../../assets/images/tokensale/walletconnet.png'
import Trustwallet from '../../assets/images/tokensale/trustwallet.png'
import Tronlink from '../../assets/images/tokensale/tronlink.png'
import Near from '../../assets/images/tokensale/near.png'
import Senders from '../../assets/images/tokensale/senders.png'

import Card from '../../assets/images/tokensale/card.png';
import USDT from '../../assets/images/tokensale/usdt.png';
import USDFX from '../../assets/images/tokensale/usdfx.png';

const wallets = [Metamask, Walletconnet, Trustwallet, Tronlink, Near, Senders];

export const BuyToken = ({ showModal }) => {
    const { connected, Tron, signOut, swap, tron_usdtBalance, usdtBalance, tron_usdfxBalance, usdfxBalance, tron_locked_usdfx, lockedAmount, availableAmount, distributionAmount, distributionTimestamp } = useContext(WalletContext);

    const [swapAmount, setSwapAmount] = useState(0);
    const [usdfxAmount, setUSDFXAmount] = useState(0);
    const type = localStorage.getItem('usdfx_wallet');

    const Wallet = connected ? wallets[+localStorage.getItem('usdfx_wallet')] : wallets[0];

    const isWalletConnected =+localStorage.getItem('usdfx_wallet') >= 10 ? false : true;

    useEffect(() => {
        let usdfx_amount = swapAmount / 75 * 120;

        setUSDFXAmount(usdfx_amount);
    }, [swapAmount]);

    return (
        <section className={styles.buyToken}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className={styles.text}>
                            <h1 data-aos="fade-up-right">Saving and Start Earning!</h1>
                            <p data-aos="fade-down-right">
                                USDFX is a hybrid Multichain stable coin that lets you generate profit per month from the profit pool shared by the companies.
                            </p>
                            <div className='d-flex align-items-end' data-aos="fade-up-right">
                                <h3>
                                    Participate on this round and Earn up 
                                </h3>
                                <span>
                                    35% APR
                                </span>
                            </div>
                            <div className='d-flex'>
                                <div className={styles.buyButton} data-aos="fade-down-right">
                                    <Link
                                        to="#"
                                        className="btn-fill-green"
                                        onClick={connected ? signOut : showModal}
                                    >
                                        {connected ? "Disconnect wallet": "Connect wallet"}
                                    </Link>
                                </div>
                                {/* <div className={styles.createButton} data-aos="fade-up-left">
                                    <Link
                                        to="/"
                                        className="btn-fill"
                                    >
                                        Create Account
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down-left" className='col-lg-6'>
                        <div className={styles.phone}>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className={styles.title}>
                                        Today’s Exchange Rate: 
                                    </div>
                                    <div className={styles.rate}>
                                        1 USDFX : $ 0.85 USD
                                    </div>
                                </div>
                                <div className='col-6'>
                                    {
                                        !(connected && !isWalletConnected) && 
                                        <div className={clsx(styles.connectButton, "btn-fill")} onClick={connected ? signOut : showModal}>
                                            <span>{connected ? "Disconnect wallet": "Connect wallet"}</span>
                                            <img className={styles.wallet} src={Wallet} alt="" />
                                        </div>
                                    }
                                    {
                                        !(connected && isWalletConnected) && 
                                        <div className={clsx(styles.connectButton, "btn-fill-green")} onClick={showModal}>
                                                <span>Card payment</span>
                                                <img className={styles.card} src={Card} alt="" />
                                        </div>
                                    }
                                </div>

                                <div className='col-12'>
                                    <div className={styles.title}>
                                        Select Which currency you wish to convert: 
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <p>
                                        Enter the Amount:
                                    </p>
                                </div>
                                <div className='col-7 d-flex justify-content-around'>
                                    <p>
                                        Available Balance:
                                    </p>
                                    <h4>
                                        {type == 3 ? tron_usdtBalance/1000000 + 'USDT' : type == 4 ? usdtBalance + 'USDT' : '0 USDT'}                                    
                                    </h4>
                                </div>
                                <div className='col-12'>
                                    <div className={styles.inputGroup}>
                                        <div className='row'>
                                            <div className={clsx(styles.left, 'col-7')}>
                                                <p>
                                                    Convert:
                                                </p>
                                                <div className={clsx(styles.input, 'd-flex')}>
                                                    <label htmlFor="send">$</label>
                                                    <input
                                                        id="send"
                                                        type='number'
                                                        placeholder='0'
                                                        onChange={(e) => { 
                                                            setSwapAmount(+e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className={clsx(styles.right, 'col-5 d-flex align-items-center justify-content-around')}>
                                                <img className={styles.coin} src={USDT} alt="" />
                                                <h2>USDT</h2>
                                                <i className="fa fa-thin fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-5 col-7 d-flex justify-content-around'>
                                    <p>
                                        Your USDFX Balance:
                                    </p>
                                    <h4>
                                        {type == 3 ? tron_usdfxBalance/1000000 + 'USDFX' : type == 4 ? usdfxBalance + 'USDFX' : '0 USDFX'}
                             
                                    </h4>
                                </div>
                                <div className='col-12'>
                                    <div className={styles.inputGroup}>
                                        <div className='row'>
                                            <div className={clsx(styles.left, 'col-7')}>
                                                <p>
                                                    Receive:
                                                </p>
                                                <div className={clsx(styles.input, 'd-flex')}>
                                                    <label htmlFor="send">$</label>
                                                    <input
                                                        id="send"
                                                        type='number'
                                                        placeholder={usdfxAmount}
                                                        disabled={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className={clsx(styles.right, 'col-5 d-flex align-items-center justify-content-around')}>
                                                <img className={styles.coin} src={USDFX} alt="" />
                                                <h2>USDFX</h2>
                                                <i className="fa fa-thin fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <p>
                                        Your Account Summary
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Total Subscription Term:</span>
                                        <span>12 Months</span>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Exchange Rate:</span>
                                        <span>0.85 USDT</span>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Total Locked Amount: </span>
                                        <span>                             
                                            {type == 3 ? tron_locked_usdfx  + 'USDFX' : type == 4 ? lockedAmount + 'USDFX' : '0 USDFX'}
                                        </span>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Token Distribution Date : </span>
                                        <span>{distributionTimestamp > 0 ? (new Date(distributionTimestamp)).toLocaleString() : ''}</span>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Next Distribution Amount :</span>
                                        <span>{distributionAmount} USDFX</span>
                                    </p>
                                </div>
                                <div className='col-12'>
                                    <p className={styles.info}>
                                        <span>Total Redeemable Amount :</span>
                                        <span>{availableAmount} USDFX</span>
                                    </p>
                                </div>
                                <div className='col-12 text-center'>
                                   
                                    <button
                                        className={clsx(styles.confirm, "btn-fill-green")}
                                        disabled={type == 3 ? !(swapAmount > 0 && swapAmount <= tron_usdtBalance) : type == 4 ? !(swapAmount > 0 && swapAmount <= usdtBalance) : 0}
                                        onClick={() => swap(swapAmount)}
                                    >
                                        Confirm Swap
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Multichain />
            </div>
        </section>
    )
};
