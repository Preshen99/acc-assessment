import { render, screen } from '@testing-library/react';
import Body from './Body';

test('Initial Testing', () => {
  render(<Body />);
  const intial = screen.getByText(/Body/i);
  expect(intial).toBeInTheDocument();
});
