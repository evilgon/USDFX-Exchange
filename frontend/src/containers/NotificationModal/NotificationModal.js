import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';

import { isDev } from '../../config';

import './styles.scss';

export const NotificationModal = ({ show, closeModal, transactionHash }) => {
    const transactionUrl = isDev ?
        `https://explorer.testnet.near.org/transactions/${transactionHash}` :
        `https://explorer.mainnet.near.org/transactions/${transactionHash}`;
    return (
        <Modal
            show={show}
            onHide={closeModal}
            size="lg"
            centered
        >
            <div className="info-notification-wrapper">
                <h1>Congratulations</h1>
                <div className="info-notification-status">
                    <i className='fa fa-thin fa-check' />
                    <p>Swap transaction has been finished successfully</p>
                </div>
                <a href={transactionUrl} target="_blank" className='btn-fill-green'>
                    Verify on Blockchain
                </a>
                <a className='btn-fill-green' onClick={closeModal}>
                    Close
                </a>
            </div>
        </Modal>
    );
};
