import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './Add/Add';
import Home from './Home/Home';
import Locations from './Locations/Locations';
import Navbar from './Navbar/Navbar';

function Routes(){
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/locations">
                    <Locations />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;