import { render, screen } from '@testing-library/react';
import App from './App';

// Podemos encontrar información en testing-library.com


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Ingreso Club/i);
  expect(linkElement).toBeInTheDocument();
});
