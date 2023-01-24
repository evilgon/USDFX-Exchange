import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import { Banner, KYC, About, Wallet, FAQ, Report, Contact } from '../../containers';


const Home = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView();
                }
            }, 0);
        }
    }, [pathname, hash, key]);

    return (
        <>
            <Banner />
            {/* <KYC /> */}
            <About />
            <Wallet />
            {/* <FAQ /> */}
            {/* <Report /> */}
            <Contact />
        </>
    );
}

export default Home;
