import React from 'react';

import PropTypes from 'prop-types';
import { FaHeadphones } from 'react-icons/fa';

import './SongCard.scss';

const propTypes = {
  song: PropTypes.object.isRequired,
};

const SongCardView = (props) => {
  const { song, rank, onClick } = props;

  return (
    <div onClick={onClick} className="song-card-component">
      <img
        alt="album-cover"
        className="album-img"
        src={song.album.images[0].url}
      />
      <div className="song-info">
        <div className="song-name">
          <span className="rank">{rank}</span>. {song.name}
        </div>
        <div className="song-artist">{song.artists[0].name}</div>

        <div className="play-button">
          <FaHeadphones className="play-icon" />
        </div>
      </div>
    </div>
  );
};

SongCardView.propTypes = propTypes;
export default SongCardView;
