import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coffee link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/coffee/i);
  expect(linkElement).toBeInTheDocument();
});

