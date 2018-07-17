import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './components/common/login';
import Speakers from './components/speakers/speakers';
import Home from './components/home/home';
import RouteNotFound from './route-not-found';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.props.action();
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/speakers" component={Speakers} />
          <Route exact path="/login" component={Login} />
          <Route render={props => <RouteNotFound action={this.handler} />} />
        </Switch>
      </div>
    );
  }
}

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
