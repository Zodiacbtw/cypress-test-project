import './App.css';
import Login from './Components/Login.jsx';
import Success from './Components/Success.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/success" component={Success} />
            </Switch>
        </Router>
    )
}

export default App;