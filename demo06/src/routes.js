/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import App from './components/App';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App>{component}</App>;
  });
});

export default router;
