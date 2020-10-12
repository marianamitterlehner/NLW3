import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagerMap from './pages/OrphanagersMap';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component = {Landing} exact />
                <Route path="/app" component = {OrphanagerMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;