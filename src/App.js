import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './assets/icons/icons';

import Layout from './hoc/Layout/Layout'
import Upload from './containers/Upload/Upload';
import DjController from './containers/DjController/DjController';
import './App.scss';

class App extends Component {
  render () {
    const lists = this.props.lists
    const hasSongs = lists.right.length && lists.left.length
    let routes = (
      <Switch>
        <Route path="/upload" component={ Upload } />
        <Redirect to="/upload" />
      </Switch>
    )
    if(hasSongs) {
      routes = (
        <Switch>
          <Route path="/upload" component={ Upload } />
          <Route path="/dj-controller" component={ DjController } />
          <Redirect to="/upload" />
        </Switch>
      )
    }

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.playlist.lists,
  };
};

export default withRouter( connect( mapStateToProps )( App ) );
