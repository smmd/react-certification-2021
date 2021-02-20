import React from 'react';
import { render } from '@testing-library/react';
import VideoList from '../../components/List/VideoList';

describe('List component test', () => {
  it('testing is generate href of video', () => {
    const { container } = render(<VideoList />);
    const link = container.querySelector('a');

    expect(link.getAttribute('href')).toContain('https://www.youtube.com');
  });

  it('testing is getting src image', () => {
    const { container } = render(<VideoList />);
    const link = container.querySelector('img');

    expect(link.getAttribute('src')).toContain('https://yt3.ggpht.com/');
  });
});
