import React, { useState, useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import {BuyToken, Wallet, Contact, ConnectModal } from '../../containers';
import { NotificationModal } from '../../containers/NotificationModal/NotificationModal';

const TronWallet = () => {
    const [connectWallet, setConnetWallet] = useState(false);
    const [showTransactionModal, setShowTransationModal] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const transactionHash = searchParams.get('transactionHashes')?.replaceAll('/', '');

    const navigate = useNavigate();

    useEffect(() => {
        if(transactionHash) {
            setShowTransationModal(true);
        } else {
            setShowTransationModal(false);
        }
    }, [transactionHash]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const closeTransactionModal = () => {
        navigate('/tokensale')
        // setShowTransationModal(false);
    };

    return (
        <>
            <BuyToken showModal = {() => setConnetWallet(true)} />
            <Wallet />
            <Contact />
            <ConnectModal show={connectWallet} setShow={() => setConnetWallet(false)} />
            <NotificationModal show={showTransactionModal} closeModal={closeTransactionModal} transactionHash={transactionHash} />
        </>
    );
}

export default TronWallet;
