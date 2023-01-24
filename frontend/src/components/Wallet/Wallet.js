import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export const Wallet = ({img, label, active, signIn}) => {
    return (
        <div className={clsx(!active && styles.disabled, styles.wallet, "col-md-4 col-sm-6")} onClick={signIn}>
            <img src={img} alt="" />
            <p>{label}</p>
            <span className={active ? styles.active : styles.comingsoon}>{active ? 'Active' : 'Coming Soon'}</span>
        </div>
    )
};
