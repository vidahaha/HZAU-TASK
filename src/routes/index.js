import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '@/views/Login/Login';
import Index from '@/views/Index/Index';

const routes = (
    <BrowserRouter>
        <div style={{height: '100%'}}>
            <Route path="/" component={Index} />        
            <Route path="/login" component={Login} />
            <Route path="/index" component={Index} />
        </div>
    </BrowserRouter>
);

export default routes;