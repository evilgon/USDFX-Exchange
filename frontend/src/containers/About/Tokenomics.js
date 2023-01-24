import React from 'react';

import styles from './styles.module.scss';

import Left from '../../assets/images/about/tokenomics/left.png';
import Right from '../../assets/images/about/tokenomics/right.png';

import Orange from '../../assets/images/about/tokenomics/orange.png';
import Green from '../../assets/images/about/tokenomics/green.png';
import Founder from '../../assets/images/about/tokenomics/founder.png';
import Advisor from '../../assets/images/about/tokenomics/advisor.png';
import Mark from '../../assets/images/about/tokenomics/mark.png';

export const Tokenomics = () => {
    return (
        <div className={styles.tokenomics}>
            <div className="row">
                <div className="col-lg-6 my-5 pr-lg-5">
                    <div className="section-title">
                        <h2>Token Allocation</h2>

                        <div className="d-flex flex-column">

                            <div className="d-flex flex-column flex-sm-row flex-wrap">
                                
                            
                                <div className={styles.detail}>
                                    <img src={Orange} alt="" />
                                    <h6>Liquidity 67%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Green} alt="" />
                                    <h6>Insurance Lock 20%</h6>
                                </div>
                            </div>

                            <div className="d-flex flex-column flex-sm-row flex-wrap">
                                
                                <div className={styles.detail}>
                                    <img src={Founder} alt="" />
                                    <h6>Founders 6%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Advisor} alt="" />
                                    <h6>Advisor 4%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Mark} alt="" />
                                    <h6>Marketing 3%</h6>
                                </div>
                                
                            </div>

                            

                        </div>

                        <div className={styles.img}>
                            <img src={Left} width="100%" alt="" />
                        </div>

                        {/* <div className={styles.content}>
                            <h4>Collateralized loan against commodities</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div> */}

                    </div>
                </div>

                <div className="col-lg-6 my-5 pl-lg-5">
                    <div className="section-title">
                        <h2>Use of funds</h2>

                        <div className="funds take-detail-wrap d-flex flex-column flex-sm-row flex-wrap">

                            
                                <div className={styles.detail}>
                                    <img src={Mark} alt="" />
                                    <h6>Liquidity 55,6%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Founder} alt="" />
                                    <h6>Insurance Lock 15%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Advisor} alt="" />
                                    <h6>Marketing 5%</h6>
                                </div>
                                
                            

                            

                                <div className={styles.detail}>
                                    <img src={Advisor} alt="" />
                                    <h6>Legal&Compliance 3%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Founder} alt="" />
                                    <h6>Development 7.5%</h6>
                                </div>

                                <div className={styles.detail}>
                                    <img src={Advisor} alt="" />
                                    <h6>Operations 13%</h6>
                                </div>
                            </div>


                        

                        <div className={styles.img}>
                            <img src={Right} width="100%" alt="" />
                        </div>

                        {/* <div className={styles.content}>
                            <h4>Collateralized loan against commodities</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div> */}

                    </div>
                </div>

            </div>
            
        </div>
    );
}
