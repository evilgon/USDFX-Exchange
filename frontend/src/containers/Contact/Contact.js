import React from 'react';

import clsx from 'clsx';
import styles from './styles.module.scss';

import Wave from '../../assets/images/contact/wave.png';
import Main from '../../assets/images/contact/main.png';
import Man from '../../assets/images/contact/man.png';

export const Contact = () => {
    return (
        <>
            <section className={styles.contact}>
                <img src={Wave} alt="" />

                <div className="container">
                    <div className={styles.main}>
                        <img className="get-bg-img" src={Main} width="100%" alt="" data-aos="fade-down-left" />

                        <div className={styles.wrap}>
                            <div className="row  align-items-center">

                                <div className="col-lg-5 col-sm-6">
                                    <div className={styles.text}>
                                        <h2 data-aos="fade-up-left">Get in Touch with us</h2>	
                                        <p data-aos="fade-down-right">join our community via Telegram @usdfx_community</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 text-center get-in-touch-img" data-aos="fade-down">
                                    <img src={Man} width="80%" alt="" />
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.social}>
                <div className="container">
                    <h1 className="text-center" data-aos="fade-up"> Follow Us On Social Media </h1>
                    <div className={clsx(styles.icons, "row")}>
                        <div className="xs-4 text-center" data-aos="fade-down">
                            <a  className="facebook" href="">
                                <i className="fa fa-facebook" />
                            </a>
                        </div>
                        <div className="xs-4 text-center" data-aos="fade-down">
                            <a  className="facebook" href="">
                                <i className="fa fa-instagram" />
                            </a>
                        </div>
                        <div className="xs-4 text-center" data-aos="fade-down">
                            <a  className="facebook" href="">
                                <i className="fa fa-twitter" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
