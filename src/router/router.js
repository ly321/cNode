import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Index from '../view/Index/Index';

class RouterConfig extends Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route  path="/" component={Index}></Route>
            </Switch>
            </Router>
        )
    }
}
export default RouterConfig;