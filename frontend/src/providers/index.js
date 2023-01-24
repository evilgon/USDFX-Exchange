import React, { useState, useEffect } from 'react';

import { signInNear, signOutNear, isSignedInNear, swapInNear } from './nearProvider';
import { signInTron, signOutTron, swapInTron} from './tronProvider';

export const WalletContext = React.createContext({
    tron_usdtBalance: 0,
    usdtBalance: 0,
    tron_usdfxBalance : 0,
    usdfxBalance: 0,
    tron_locked_usdfx : 0,
    lockedAmount: 0,
    availableAmount: 0,
    distributionAmount: 0,
    distributionTimestamp: 0,
    connected: false,
    Tron : false,
    signIn: () => {},
    signOut: () => {},
    swap: () => {}
})

export const WalletProvider = ({ children }) => {
    const [connected, setConnected] = useState(false);
    const [Tron, setTron] = useState(false);
    const [tron_usdtBalance, setTronUSDTBalance] = useState(0);
    const [usdtBalance, setUsdtBalance] = useState(0);
    const [tron_usdfxBalance, setTronUsdfxBalance] = useState(0);
    const [usdfxBalance, setUsdfxBalance] = useState(0);
    const [tron_locked_usdfx, setTronLockedAmount] = useState(0);
    const [lockedAmount, setLockedAmount] = useState(0);
    const [availableAmount, setAvailableAmount] = useState(0);
    const [distributionAmount, setDistributionAmount] = useState(0);
    const [distributionTimestamp, setDistributionTimestamp] = useState(0);

    useEffect(() => { 
        const interval = setInterval(() => { 
            
        }, 2000); 
        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 3:
                    const interval = setInterval(async() => {  
                        let { tron_usdfxBalance, tron_locked_usdfx, tron_usdtBalance, Tron} = await signInTron();
                        setTronUSDTBalance(+tron_usdtBalance);
                        setTronUsdfxBalance(+tron_usdfxBalance);                               
                        setTronLockedAmount(+tron_locked_usdfx);
                        setTron(+Tron);
                    }, 2000); 
                    return () => clearInterval(interval); 
                    break;
                case 4:
                    const { isSignedIn, usdfx, usdt, locked, available, distribution, timestamp } = await isSignedInNear();
                    
                    if(!isSignedIn) {
                        setConnected(false);
                    } else {
                        setConnected(true);
                        setUsdtBalance(+usdt);
                        setUsdfxBalance(+usdfx);
                        setLockedAmount(+locked);
                        setAvailableAmount(+available);
                        setDistributionAmount(+distribution);
                        setDistributionTimestamp(timestamp);
                    }

                    break;
                default:
                    setConnected(false);
            }
        })();
    }, [connected]);

    const signIn = (type) => {
        if(connected) return;

        (async () => {
            switch(type) {
                case 3:
                    await signInTron();
                    localStorage.setItem('usdfx_wallet', type);
                    setConnected(true);
                      
                    break;
                case 4:
                    await signInNear();
                    localStorage.setItem('usdfx_wallet', type);
                    setConnected(true);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    };

    const signOut = () => {
        if(!connected) return;

        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 3:
                    await signOutTron();
                    localStorage.removeItem('usdfx_wallet');
                    setConnected(false);
                    break;
                case 4:
                    await signOutNear();
                    localStorage.removeItem('usdfx_wallet');
                    setConnected(false);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    };

    const swap = (swapAmount) => {
        if(!connected) return;

        const type = +localStorage.getItem('usdfx_wallet');

        (async () => {
            switch(type) {
                case 3:
                    await swapInTron(swapAmount);
                    break;
                case 4:
                    await swapInNear(swapAmount);
                    break;
                default:
                    console.log("not implemented yet");
            }
        })();
    }

    return (
        <WalletContext.Provider
          value={{ connected, Tron, signIn, signOut, swap, tron_usdtBalance, usdtBalance, tron_usdfxBalance, usdfxBalance, tron_locked_usdfx, lockedAmount, availableAmount, distributionAmount, distributionTimestamp }}
        >
          {children}
        </WalletContext.Provider>
    );
};
