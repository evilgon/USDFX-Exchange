import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import clsx from 'clsx';

import { NavDropdown  } from 'react-bootstrap';
import Select from 'react-select';

import styles from './styles.module.scss';
import Logo from '../../assets/images/global/logo.png';

export const Header = () => {
    const options = [
        { value: 'usd', label: 'USD' },
        { value: 'euro', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
        { value: 'jpy', label: 'JPY' },
    ];

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg">
                        <Link
                            to='/'
                            className="navbar-brand d-flex align-items-center"
                        >
                            <img
                                src={Logo}
                                width={120}
                                alt=""
                            />
                        </Link>

                        <div className={clsx(styles.nav, 'd-none  w-100 d-lg-flex justify-content-between align-items-center')}>
                            <ul className="navbar-nav">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/#about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/#about'>Tokenomics</Link>
                                </li>
                                <li>
                                    <Link to='/#'>Partnership</Link>
                                </li>
                                <li>
                                    <Link to='/tokensale'>Swap</Link>
                                </li>
                                {/* <NavDropdown
                                    className={styles.dropdown}
                                    title={
                                        <span>
                                            Partnership <i className='fa fa-angle-down' />
                                        </span>
                                    }
                                >
                                    <NavDropdown.Item>
                                        <Link to='/'>CoinMarketCap</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to='/'>Coinbase</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to='/'>CoinGecko</Link>
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </ul>

                            <div className={styles.rightNav}>

                                {/* <Select
                                    className={styles.select}
                                    options={options} 
                                    defaultValue={{ value: 'usd', label: 'USD' }}
                                /> */}

                                <a
                                    href='https://affiliate.usdfx.org'
                                    className="btn-fill"
                                    target='_blank'
                                >
                                    Affiliate
                                </a>

                                <Link
                                    to='/tokensale'
                                    className="btn-unfill"
                                >
                                    Buy Token
                                </Link>
                            </div>
                        </div>
                        <div className={clsx(styles.mobileMenuOpener, "d-block d-lg-none")} onClick={() => setShowMobileMenu(true)}>
                            <span className="fa fa-bars"></span>
                        </div>
                    </nav>
                </div>
            </div>
            <section className={clsx(styles.mobile, showMobileMenu && styles.showMobileMenu, "d-block d-lg-none")}>
                <div className={clsx(styles.mobileClose, "text-right")} onClick={() => setShowMobileMenu(false)}>
                    <i className="fa fa-times" />
                </div>
                <div className={styles.mobileMenu}>
                    <ul className="navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#about">Tokenomics</Link></li>
                        <li><Link to="#">Partnership</Link></li>
                        <li><Link to="/tokensale">Swap</Link></li>
                    </ul>

                    <div className={styles.mobileRightNav}>
                        <div className="mynav-btns">
                            <a href="https://affiliate.usdfx.org" target='_blank' className="btn-fill">Affiliate</a>
                            <Link to="/tokensale" className="btn-unfill">Buy Token</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
