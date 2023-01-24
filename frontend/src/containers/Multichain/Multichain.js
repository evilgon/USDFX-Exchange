import React from 'react';
import { CoinCard } from '../../components';

import styles from './styles.module.scss';

import Near from '../../assets/images/banner/near.png';
import Polygon from '../../assets/images/banner/polygon.png';
import Ethereum from '../../assets/images/banner/eth.png';
import BSC from '../../assets/images/banner/bsc.png';
import Tron from '../../assets/images/banner/tron.png';
import Stellar from '../../assets/images/banner/stellar.png';

export const Multichain = () => {
    const coins = [
        {
            image: Near,
            text: 'Near Protocol',
            url: "/",
            effect: "fade-down-right"
        },
        {
            image: Polygon,
            text: 'Polygon',
            url: "/",
            effect: "fade-down"
        },
        {
            image: Ethereum,
            text: 'Ethereum',
            url: "/",
            effect: "fade-up-left"
        },
        {
            image: BSC,
            text: 'Binance Smartchain',
            url: "/",
            effect: "fade-up"
        },
        {
            image: Tron,
            text: 'Tron',
            url: "/",
            effect: "fade-up-left"
        },
        {
            image: Stellar,
            text: 'Stellar',
            url: "/",
            effect: "fade-down-right"
        }
    ];

    return (
        <section className={styles.multichain}>
            <div className="section-title" data-aos="fade-down-right">
                <h2>USDFX in Multi Chain</h2>
            </div>

            <div className="row align-items-center">
                <div className="row">
                    {
                        coins.map((coin, index) => 
                            <CoinCard
                                {...coin}
                                index={index}
                                key={index}
                                inline={true}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};
