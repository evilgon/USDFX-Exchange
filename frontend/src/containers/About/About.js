import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Tab, Nav } from 'react-bootstrap';

import styles from './styles.module.scss';

import { StableCoin } from './StableCoin';
import { Team } from './Team';
import { Tokenomics } from './Tokenomics';
import { Roadmap } from './Roadmap';

import { TabNav } from '../../components';

export const About = () => {
    const [selected, setSelected] = useState('coin');

    const tabs = [
        {
            event: 'coin', text: 'Stable Coin'
        },
        {
            event: 'team', text: 'Team'
        },
        {
            event: 'tokenomics', text: 'Tokenomics'
        },
        {
            event: 'roadmap', text: 'Roadmap'
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className="section-title">
                <div className="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                    <h2 data-aos="fade-up-right">About USDFX</h2>
                    <div className={styles.buyToken} data-aos="fade-down-left">
                        <Link to="/tokensale" className="btn-fill-green">Buy Token</Link>
                    </div>
                </div>
            </div>
            <Tab.Container
                defaultActiveKey="coin"
            >
                <Nav className={styles.tabs} data-aos="fade-up-left">
                    {
                        tabs.map((tab, index) => 
                            <TabNav
                                key={index}
                                {...tab}
                                active={selected === tab.event}
                                onClick={() => setSelected(tab.event)}
                            />
                        )
                    }
                </Nav>
                <div className="tab-content">
                    <Tab.Content>
                        <Tab.Pane eventKey="coin">
                            <StableCoin />
                        </Tab.Pane>
                        <Tab.Pane eventKey="team">
                            <Team />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tokenomics">
                            <Tokenomics />
                        </Tab.Pane>
                        <Tab.Pane eventKey="roadmap">
                            <Roadmap />
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </section>
    );
};
