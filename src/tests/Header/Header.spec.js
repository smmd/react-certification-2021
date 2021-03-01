import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header/Header.component';

describe('Header component test', () => {
  it('testing header message is defined', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Sag challenge!')).toBeDefined();
  });

  it('testing it contains searchbar', () => {
    const { getByPlaceholderText } = render(<Header />);

    expect(getByPlaceholderText('Search…')).toBeDefined();
  });
});
