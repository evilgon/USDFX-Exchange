import React from 'react';

import RoadmapImg from '../../assets/images/about/roadmap/roadmap.png';

import './roadmap.scss';

export const Roadmap = () => {
    return (
        <div className="roadmap">

            <div className="roadmap-content roadmap-content-top d-flex ">

                <div className="roadmap-text mx-auto"> 
                    <h5>BETA Test for Initial Merchants</h5>
                    <h5>Onboarded</h5>
                    <h5>Smart Contract Verification</h5>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h3>2023</h3>
                    <h5>January 30</h5>
                    <p>Token Distribution</p>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h5>April 30</h5>
                    <p>Submission of the Quarterly Audited</p>
                    <p>Statement on the Application</p>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h5>August 30</h5>
                    <p>Submission of the Quarterly Audited</p>
                    <p>Statement on the Application</p>
                </div>

                

            </div>

            <div className="roadmap-img">
                <img src={RoadmapImg} width="100%" alt="" />
            </div>

            <div className="roadmap-content roadmap-content-bottom d-flex  ">

                <div className="roadmap-text mx-auto"> 
                    <h5>BETA Test for Initial Merchants</h5>
                    <h5>Onboarded</h5>
                    <h5>Smart Contract Verification</h5>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h3>2023</h3>
                    <h5>January 30</h5>
                    <p>Token Distribution</p>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h5>April 30</h5>
                    <p>Submission of the Quarterly Audited</p>
                    <p>Statement on the Application</p>
                </div>

                <div className="roadmap-text mx-auto"> 
                    <h5>August 30</h5>
                    <p>Submission of the Quarterly Audited</p>
                    <p>Statement on the Application</p>
                </div>

                

            </div>

        </div>
    )
};
