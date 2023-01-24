import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { CoinCard } from '../../components';

import styles from './styles.module.scss';

import Swap from '../../assets/images/banner/omara.png';
import Near from '../../assets/images/banner/near.png';
import Polygon from '../../assets/images/banner/polygon.png';
import Ethereum from '../../assets/images/banner/eth.png';
import BSC from '../../assets/images/banner/bsc.png';
import Tron from '../../assets/images/banner/tron.png';
import Stellar from '../../assets/images/banner/stellar.png';
import Coins from '../../assets/images/banner/coins.png';

export const Banner = () => {
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
        <header className={styles.banner}>
            <div className="row align-items-center">
                <div className="col-lg-4 ">
                    <div className={styles.bannerContent}>
                        <h1 data-aos="fade-up-right" >
                            <span>USDFX</span> Stable Coin
                        </h1>
                        <p data-aos="fade-down-right">
                            Revolutionizing Fintech & Web3 To Facilitate B2B Payments
                        </p>
                        <div className={styles.button} data-aos="fade-up-right">
                            <Link
                                to="/tokensale"
                                className="btn-fill"
                            >
                                Buy Token
                            </Link>
                        </div>
                        <Link
                            to="#Down"
                            className={styles.down}
                        >
                            <i className="fa fa-long-arrow-down" />
                        </Link>
                    </div>
                </div>
                <div className={clsx(styles.bannerImg, "col-lg-8")} data-aos="fade-up-left">
					<img
                        src={Swap}
                        width="100%"
                        alt=""
                    />
				</div>
            </div>

            <section className={styles.multichain}>
                <div className="section-title" data-aos="fade-down-right">
					<h2>USDFX in Multi Chain</h2>
				</div>

                <div className="row align-items-center">
					<div className="col-lg-7">
                        <div className="row">
                            {
                                coins.map((coin, index) => 
                                    <CoinCard
                                        {...coin}
                                        index={index}
                                        key={index}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-5" data-aos="fade-left">
						<img
                            src={Coins}
                            width="100%"
                            alt=""
                        />
					</div>
				</div>
            </section>
        </header>
    );
};
