import React from 'react';

import Home from './pages/home/Home';
import TokenSale from './pages/tokensale/TokenSale';
import TronWallet from './components/tron/TronWallet';

const routes = [
    { path: '/', component: <Home />},
    { path: '/tokensale', component: <TokenSale />},
    { path: '/tronWallet', component: <TronWallet />}
];

export default routes;
