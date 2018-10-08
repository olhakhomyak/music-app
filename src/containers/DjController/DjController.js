import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Player from '../../components/Player/Player';
import SongsList from '../../components/SongsList/SongsList';
import './DjController.scss';

class DjController extends Component {
  render () {
    const sides = ['left', 'right'];
    const players = sides.map((side, i) => {

      return (<div key={i} className="PlaylistItem">
        <Player
          className="PlayerWrapper"
          width='100%'
          height='100%'
          side={ side }
          list={ this.props.lists[side] }
          config={ this.props.playerConfig[side] }
          playPause= { this.props.onPlayPause }
          playNext= { this.props.onPlayNext }
          playPrev= { this.props.onPlayPrev }
          setVolume= { this.props.onSetVolume }
          stopSong= { this.props.onStop } />
        <SongsList
          songs={ this.props.lists[side] }
          activeSong= { this.props.playerConfig[side].url }
          side={ side }
          displayControl={ false }
          onPlayHandler= { this.props.onSongPlayed }
         />
      </div>)
    });

    return (
      <div className="DjControllerContainer">
        { players }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.playlist,
    playerConfig: state.player,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlayPause: (playing, side) => dispatch(actions.onPlayPause(playing, side)),
    onPlayNext: (side) => dispatch(actions.onPlayNext(side)),
    onPlayPrev: (side) => dispatch(actions.onPlayPrev(side)),
    onSongPlayed: (songUrl, side) => dispatch(actions.onSongPlayed(songUrl, side)),
    onSetVolume: (val, side) => dispatch(actions.onSetVolume(val, side)),
    onStop: (side) => dispatch(actions.onStop(side)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( DjController );
