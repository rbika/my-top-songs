import React, { useEffect, useState } from 'react';

import queryString from 'query-string';

import constants from '../../constants';
import TopSongsView from './TopSongs.view';
import { spotifyApi } from '../../api';

const TopSongsContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const { timeRange } = props;
  let listTitle;

  if (timeRange === constants.SHORT_TERM) {
    listTitle = 'Last Month';
  } else if (timeRange === constants.MEDIUM_TERM) {
    listTitle = 'Last 6 Month';
  }

  useEffect(() => {
    setLoading(true);

    const params = queryString.stringify({
      time_range: timeRange,
      limit: constants.SONGS_LIMIT,
    });

    spotifyApi.get(`/me/top/tracks?${params}`).then((resp) => {
      setSongs(resp.data.items);
      setLoading(false);
    });
  }, [timeRange]);

  return <TopSongsView listTitle={listTitle} songs={songs} loading={loading} />;
};

export default TopSongsContainer;
