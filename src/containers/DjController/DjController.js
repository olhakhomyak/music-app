import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import Player from '../../components/Player/Player';
import SongsList from '../../components/SongsList/SongsList';
import './DjController.scss';

class DjController extends Component {
  render () {
    return (
      <div className="DjControllerContainer">
        <div className="PlaylistItem">
          <Player
            className="PlayerWrapper"
            width='100%'
            height='100%'
            side='left'
            list={ this.props.lists.left }
            config={ this.props.playerConfig.left }
            playPause= { this.props.onPlayPause }
            setVolume= { this.props.onSetVolume }
            stopSong= { this.props.onStop } />
          <SongsList
            songs={ this.props.lists.left }
            activeSong= { this.props.playerConfig.left.url }
            side="left"
            displayControl={ false }
            onPlayHandler= { this.props.onSongPlayed }
           />
        </div>
        <div className="PlaylistItem">
          <Player
            className="PlayerWrapper"
            width='100%'
            height='100%'
            side='right'
            list={ this.props.lists.right }
            config={ this.props.playerConfig.right }
            playPause= { this.props.onPlayPause }
            setVolume= { this.props.onSetVolume }
            stopSong= { this.props.onStop } />
          <SongsList
            songs={ this.props.lists.right }
            activeSong= { this.props.playerConfig.right.url }
            side="right"
            displayControl={ false }
            onPlayHandler= { this.props.onSongPlayed }
           />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      lists: state.playlist.lists,
      playerConfig: state.player,
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onPlayPause: (playing, side) => dispatch(actions.onPlayPause(playing, side)),
    onSongPlayed: (songUrl, side) => dispatch(actions.onSongPlayed(songUrl, side)),
    onSetVolume: (val, side) => dispatch(actions.onSetVolume(val, side)),
    onStop: (side) => dispatch(actions.onStop(side)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( DjController );
