import React from 'react';

import { Nav } from 'react-bootstrap';

import styles from './styles.module.scss';

export const TabNav = ({event, text, active = false, onClick}) => {
    return (
        <Nav.Item>
            <Nav.Link
                className={active && styles.active}
                eventKey={event}
                onClick={() => onClick()}
            >
                {text}
            </Nav.Link>
        </Nav.Item>
    );
};
