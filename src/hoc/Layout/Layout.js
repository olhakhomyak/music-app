import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import  { NotificationContainer, NotificationManager } from 'react-notifications';
import Header from '../../components/Header/Header';
import './Layout.scss';

class Layout extends Component {
  navLinkHandler = (e) => {
    const lists = this.props.lists
    if(!lists.left.length || !lists.right.length) {
      e.preventDefault()
      const emptyList = !lists.left.length ? 'left' : 'right'
      NotificationManager.warning(`Please, add some songs to your ${emptyList} playlist`, 'Can\'t switch to DJ-controller!', 5000);
    }
  }

  render () {
    return (
        <Fragment>
          <Header clicked={ this.navLinkHandler } />
          <main>
            { this.props.children }
          </main>
        <NotificationContainer type="warning" />
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    lists: state.playlist.lists
  };
};

export default  connect( mapStateToProps )( Layout );
