import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Initial Testing', () => {
  render(<Navbar />);
  const intial = screen.getByText(/Service/i);
  expect(intial).toBeInTheDocument();
});
