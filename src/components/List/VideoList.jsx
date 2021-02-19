import React, { Component } from 'react';
import { v4 } from 'uuid';
import Styled from './VideoListStyled';
import { items } from '../../mock-data.json';

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

function VideoInfo(props) {
  return (
    <Styled.VideoItemContainer>
      <img
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
      />
      <a
        href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <p>{props.video.snippet.title}</p>
      </a>
    </Styled.VideoItemContainer>
  );
}

export default VideoList;
