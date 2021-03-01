import React from 'react';

import Styled from './VideoInfoStyled';

const VideoInfo = (props) => {
  return (
    <Styled.VideoItemContainer>
      <Styled.VideoImage
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
      />
      <Styled.VideoAnchor url={props.video.id.videoId}>
        <Styled.VideoTitle>{props.video.snippet.title}</Styled.VideoTitle>
      </Styled.VideoAnchor>
    </Styled.VideoItemContainer>
  );
};

export default VideoInfo;
