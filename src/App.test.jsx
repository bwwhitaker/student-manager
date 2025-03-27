import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Default Load', () => {
	render(<App />);
	it('renders app title', () => {
		expect(screen.getByText('Student Manager')).toBeInTheDocument();
	});

	it('renders student list title', () => {
		expect(screen.getByText(/my students/i)).toBeInTheDocument();
	});
});
