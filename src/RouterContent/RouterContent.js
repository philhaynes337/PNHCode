import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home'

class RouterContent extends Component {

    render() {

        return(
            <>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            </>
        )
    }
}

export default RouterContent;