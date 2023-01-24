import React from 'react';

import styles from './styles.module.scss';

import iPhone from '../../assets/images/wallet/iPhone.png';

export const Wallet = () => {
    return (
        <section className={styles.wallet}>
            <div className="container ">
                <div className={styles.content}>
                    <img className="phoneimg" src={iPhone} alt="" data-aos="fade-down-left" />
                    <div className={styles.text}>
                        <h3 data-aos="fade-down-left">USDFX Multichain Wallet</h3>
                        <p data-aos="fade-up-right">USDFX will be launching a wallet application that allows you to manage your finance , switch to multiple currency, pay your bills using any crypto or stablecoin and create your own virtual account that allows you to spend virtual currencies.</p>
                        <div className="section-title-btnn" data-aos="fade-up-left">
                            <a href="" className="btn-fill-green">Join Our Wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
