import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';
import SongsList from '../../components/SongsList/SongsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Upload.scss';

class Upload extends Component {

handleSubmit(event, side) {
   const input = this.refs;
   event.preventDefault();
   if (!input[side].value.trim()) return
   this.props.onSongAdded(input[side].value, side);
   input[side].value = '';
 }

  render () {
    const lists = this.props.lists
    return (
      <Fragment>
        <h1>TRACKS <FontAwesomeIcon icon="music" /> </h1>
      <h3>Add some songs from <a href="https://www.youtube.com/" target="_blank">Youtube</a> or <a href="https://soundcloud.com/" target="_blank">SoundCloud</a></h3>
          <div className="PlaylistsContainer">
            <div className="PlaylistItem">
              <SongsList
                songs={ lists.left }
                side={ 'left' }
                displayControl={ true }
                onRemoveHandler={ this.props.onSongRemoved }
              />
              <form onSubmit={(e) => this.handleSubmit(e, "left")}>
                <div className="FormInput">
                    <input ref="left" type="text" placeholder="Add link here" />
                    <button className="FormButton" type="submit">
                      <FontAwesomeIcon icon="plus" />
                    </button>
                </div>
              </form>
            </div>
            <div className="PlaylistItem">
              <SongsList
                songs={ lists.right }
                side={ 'right' }
                displayControl={ true }
                onRemoveHandler={ this.props.onSongRemoved }
              />
              <form onSubmit={ (e) => this.handleSubmit(e, "right") }>
                <div className="FormInput">
                  <input ref="right" type="text" placeholder="Add link here" />
                  <button className="FormButton" type="submit">
                    <FontAwesomeIcon icon="plus" />
                  </button>
                </div>
              </form>
            </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.playlist.lists,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSongAdded: (songUrl, side) => dispatch(actions.addSong(songUrl, side)),
    onSongRemoved: (songUrl, side) => dispatch(actions.removeSong(songUrl, side)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Upload );
