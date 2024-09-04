import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form/Form';

test('renders initial deposit text', () => {
  render(<Form />);
  const textElement = screen.getByText(/Initial Deposit/i);
  expect(textElement).toBeInTheDocument();
});
