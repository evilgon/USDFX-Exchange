import React, { useEffect } from 'react';
import { Header, Footer } from '../index';

import styles from './styles.module.scss';

import AOS from "aos";
import "aos/dist/aos.css";

export const Layout = ({ children }) => {
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            { children }
            <Footer />
        </div>
    )
};
