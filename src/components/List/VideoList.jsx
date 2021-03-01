import React, { Component } from 'react';
import { v4 } from 'uuid';
import Styled from './VideoListStyled';
import { items } from '../../mock-data.json';

import VideoInfo from './VideoInfo';

// TODO: implement this in a hook
class VideoList extends Component {
  constructor(props) {
    super(props);
    this.videoInfo = items;
  }

  render() {
    return (
      <Styled.VideoListContainer>
        {this.videoInfo.map((video) => {
          return <VideoInfo video={video} key={v4()} />;
        })}
      </Styled.VideoListContainer>
    );
  }
}

export default VideoList;
