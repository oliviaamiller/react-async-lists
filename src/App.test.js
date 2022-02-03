import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coffee link', () => {
  render(<App />);
  const linkElement = screen.getByText(/coffee/i);
  expect(linkElement).toBeInTheDocument();
});
