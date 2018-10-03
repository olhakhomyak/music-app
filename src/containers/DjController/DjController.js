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
            config={ this.props.playerConfig }
            playPause= { this.props.onPlayPause }
            setVolume= { this.props.onSetVolume } />
          <SongsList
            songs={ this.props.lists.left }
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
            config={ this.props.playerConfig }
            playPause= { this.props.onPlayPause }
            setVolume= { this.props.onSetVolume } />
          <SongsList
            songs={ this.props.lists.right }
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
    onPlayPause: () => dispatch(actions.onPlayPause()),
    onSongPlayed: (songUrl, side) => dispatch(actions.onSongPlayed(songUrl, side)),
    onSetVolume: (val, side) => dispatch(actions.onSetVolume(val, side))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( DjController );
