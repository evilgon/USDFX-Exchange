import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import styles from './styles.module.scss';

import Location from '../../assets/images/global/map-marker-alt.png';
import Phone from '../../assets/images/global/phone.png';
import Clock from '../../assets/images/global/clock.png';
import Email from '../../assets/images/global/envelope.png';

export const Footer = () => {
    return (
        <div className={clsx(styles.footer, "container")}>
            <p className="text-center">
                © USDFX Token 2022.
            </p>
            <p className="text-center">Omara Payment Service Provider License Number : 977524  </p>	
            <div className="row" style={{paddingTop: 50}}>
                <div className="col-lg-3 col-sm-6 my-3">
                    <Link to="/">
                        <img
                            src={Location}
                            alt=""
                        />
                        <span>2608 Tameem House Barsha Heights Tecom</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6  my-3">
                    <Link to="/">
                        <img
                            src={Phone}
                            alt=""
                        />
                        <span>+0971507580689</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6  my-3">
                    <Link to="/">
                        <img
                            src={Clock}
                            alt=""
                        />
                        <span>9am - 10pm, Mon - Sat</span>
                    </Link>
                </div>

                <div className="col-lg-3 col-sm-6  my-3">
                    <a href="">
                        <img
                            src={Email}
                            alt=""
                        />
                        <span>support@omarapay.com</span>
                        <div  className="text-right">corporate@ammarzayacapital.com</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
