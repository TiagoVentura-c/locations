import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './Add/Add';
import Locations from './Locations/Locations';
import Navbar from './Navbar/Navbar';
import HomeAdmin from './Admin/Home'
import Home from './Home/Home'

function Routes(){
    return(
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/locations">
                    <Locations />
                </Route>
                <Route path="/admin">
                    <HomeAdmin />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;