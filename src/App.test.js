import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Olá Viceri!', () => {
  render(<App />);
  const text = screen.getByText(/Olá Viceri!/i);
  expect(text).toBeInTheDocument();
});
