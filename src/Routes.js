import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import RecettePage from './Recette/RecettePage';

import Header from './Includes/Header'

const Routes = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={HomePage}/>
            <Route path='/recette/:id' component={RecettePage}/>
        </div>
    </Router>
);

export default Routes;