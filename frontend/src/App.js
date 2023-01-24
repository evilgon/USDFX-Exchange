import React from 'react';

import './App.scss';
import { Routes , Route } from 'react-router-dom';
import routes from './Routes';
import { Layout } from './containers';
import { WalletProvider } from './providers';

function App() {
  return (
    <WalletProvider>
      <Layout>
        <Routes>
          {
            routes.map((route, index) => 
              <Route
                key={index}
                exact={true}
                path={route.path}
                element={route.component}
              />
            )
          }
        </Routes>
      </Layout>
    </WalletProvider>
  );
}

export default App;
