import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Default Load', () => {
	it('renders default message', () => {
		render(<App />);
		expect(screen.getByText('Student Manager')).toBeInTheDocument();
	});
});
