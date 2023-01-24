import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { Audit } from '../../components';

import styles from './styles.module.scss';

import Intel from '../../assets/images/kyc/audit/intel.png';
import Vodafone from '../../assets/images/kyc/audit/vodafone.png';
import Tesla from '../../assets/images/kyc/partner/tesla.png';
import Talkit from '../../assets/images/kyc/partner/talkit.png';

export const KYC = () => {
    const audits = [
        {
            image: Intel,
            url: "/"
        },
        {
            image: Vodafone,
            url: "/"
        }
    ];

    const partners = [
        {
            image: Intel,
            url: "/"
        },
        {
            image: Vodafone,
            url: "/"
        },
        {
            image: Tesla,
            url: "/"
        },
        {
            image: Talkit,
            url: "/"
        }
    ];

    return (
        <section className={styles.kyc}>
            <h1>
                Smart Contract Audit
            </h1>
            <div className="row align-items-center">
                {
                    audits.map((audit, index) => 
                        <Audit {...audit} key={index} />
                    )
                }
            </div>
            <div />

            <h1 className={styles.spliter}>
                Our Partners
            </h1>
            <div className="row align-items-center">
                {
                    partners.map((audit, index) => 
                        <Audit {...audit} key={index} />
                    )
                }
            </div>
        </section>
    );
};
