import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from 'react-router-dom'
import Table from './Table.jsx';
import UserProfile from './UserProfile.jsx';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={Table}/> 
                    <Route path="/userProfile" component={UserProfile} />
                </Switch>
            </main>
        );
    }
};

export default Main;