// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoughCycle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoughCycle/i);
    expect(titleElement).toBeInTheDocument();
});
