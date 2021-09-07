import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './features/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'App.css';
import Services from 'features/Service/Service';
import Products from 'features/Product/Product';
import SignUp from 'features/Sign-Up/SignUp';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
