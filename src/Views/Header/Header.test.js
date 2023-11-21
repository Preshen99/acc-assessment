import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Initial Testing', () => {
  render(<Header />);
  const intial = screen.getByText(/Service/i);
  expect(intial).toBeInTheDocument();
});
