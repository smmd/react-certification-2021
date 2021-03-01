import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import VideoList from '../../components/List/VideoList';

describe('List component test', () => {
  test('the generation of a video link', () => {
    const { container } = render(<VideoList />);
    const link = container.querySelector('a');

    expect(link.getAttribute('href')).toContain('https://www.youtube.com');
  });

  it('generate image for all elements', async () => {
    await act(async () => {
      render(<VideoList />);
    });

    expect(await screen.findAllByRole('img')).toHaveLength(25);
  });
});
