import React, { useState, useEffect } from 'react';

import { TeamCard } from '../../components'

import OwlCarousel from "react-owl-carousel";

import { founders, advisors, operations } from './helper';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from './styles.module.scss';
import './team.scss';

function getWindowWidth() {
    const { innerWidth: width, innerHeight: height } = window;
    return width;
}

export const Team = () => {
    const [width, setWidth] = useState(getWindowWidth());
    const [itemCount, setItemCount] = useState(4);
    const [viewAll, setViewAll] = useState(false);

    const toggleMode = () => {
        setViewAll(!viewAll);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(getWindowWidth());
        };

        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if(width > 1200) {
            setItemCount(4);
        } else if(width > 990) {
            setItemCount(3);
        } else if(width > 768) {
            setItemCount(2);
        } else {
            setItemCount(1);
        }
    }, [width])

    const options = {
        loop: true,
        margin: 10,
        items: itemCount,
        autoplay: true,
        nav: true,
      };
    return (
        <>
            {
                viewAll ? (
                    <section>
                        <div className="section-title pb-4">
                            <h2>Founding Team</h2>
                        </div>
                        <div className="row align-items-start">
                            {
                                founders.map((founder, index) => [
                                    <TeamCard key={index} {...founder} />
                                ])
                            }
                        </div>
                        <div className="section-title pb-4">
                            <h2>Core Team</h2>
                        </div>
                        <div className="row align-items-start">
                            {
                                advisors.map((advisor, index) => [
                                    <TeamCard key={index} {...advisor} />
                                ])
                            }
                        </div>
                        <div className="section-title pb-4">
                            <h2>Team</h2>
                        </div>
                        <div className="row align-items-start">
                            {
                                operations.map((operation, index) => [
                                    <TeamCard key={index} {...operation} />
                                ])
                            }
                        </div>
                    </section>
                ) : (
                    <div
                        className={"row"}
                        {...options}
                    >
                        {
                            founders.map((founder, index) => [
                                <TeamCard key={index} {...founder} />
                            ])
                        }
                    </div>
                )
            }

            <div className={styles.toggleViewMode}>
                <button onClick={() => toggleMode()} className="btn-fill">
                    {`View ${viewAll ? 'Less' : 'All'}`}
                </button>
            </div>
        </>
    );
}
