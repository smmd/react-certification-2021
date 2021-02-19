import styled from 'styled-components';

const VideoListContainer = styled.div`
  max-height: 200px;
  margin: 20px auto;
`;

const VideoItemContainer = styled.div`
  border-bottom: 1px solid #ccc;
  display: block;
  border-collapse: collapse;
  width: auto;
  height: auto;

  & > img {
    width: 30%;
    padding: 1em;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  & > a {
    text-transform: uppercase;

    & > p {
      :hover {
        color: blueviolet;
      }
    }
  }
`;

const Styled = { VideoListContainer, VideoItemContainer };
export default Styled;
