import styled from 'styled-components';

const VideoItemContainer = styled.div`
  border-bottom: 1px solid #ccc;
  display: block;
  border-collapse: collapse;
  width: auto;
  height: auto;
`;

const VideoImage = styled.img`
  width: 30%;
  padding: 1em;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const VideoAnchor = styled.a.attrs((props) => ({
  href: `https://www.youtube.com/watch?v=${props.url}`,
  target: '_blank',
  rel: 'noreferrer',
}))`
  text-transform: uppercase;
`;

const VideoTitle = styled.p`
  &:hover {
    color: blueviolet;
  }
`;

const Styled = {
  VideoItemContainer,
  VideoImage,
  VideoAnchor,
  VideoTitle,
};

export default Styled;
