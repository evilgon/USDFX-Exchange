import React from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

export const TeamCard = ({ img, name, linkedin, website, position, description }) => {
    return (
        <div className={clsx("col-lg-3 col-md-4", styles.card)}>
            <div className={styles.img}>
                <img src={img} width="100%" alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h2>{name}</h2>
                    <div className="team-socail">
                        <a href={linkedin} target="_blank" className="mr-2">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        {/* <a href={website}>
                            <i className="fa fa-globe"></i>
                        </a> */}
                    </div>
                </div>

                <div className={styles.info}>
                    <h6>{position}</h6>

                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
}
