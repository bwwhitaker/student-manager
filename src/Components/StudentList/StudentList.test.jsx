import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Default Load', () => {
	render(<StudentList />);
	it('renders Student List Title', () => {
		expect(screen.getByText(/my students/i)).toBeInTheDocument();
	});

	it('renders missing student warning', () => {
		expect(screen.getByText(/You don't have any students./i)).toBeInTheDocument();
	});

	it('renders add student button', () => {
		const button = screen.getByRole('button', { text: 'Add Student' });
		expect(button).toBeVisible();
	});
});
