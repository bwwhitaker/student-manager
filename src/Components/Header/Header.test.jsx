import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Default Load', () => {
	it('renders app title', () => {
		render(<Header />);
		expect(screen.getByText('Student Manager')).toBeInTheDocument();
	});
});
