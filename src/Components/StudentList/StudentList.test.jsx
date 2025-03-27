import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import StudentList from './StudentList';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';

afterEach(cleanup);
const mockStudents = [
	{
		name: 'John Bailey',
		email: 'dancingthrulife@gmail.com',
		phonenumber: '317-555-1234',
	},
];

describe('Default Load', () => {
	it('renders Student List Title', () => {
		render(<StudentList />);
		expect(screen.getByText(/my students/i)).toBeInTheDocument();
	});

	it('renders missing student warning', () => {
		render(<StudentList />);
		expect(screen.getByText(/You don't have any students./i)).toBeInTheDocument();
	});

	it('renders student list', () => {
		render(<StudentList initialStudents={mockStudents} />);
		expect(screen.getByText('John Bailey')).toBeInTheDocument();
	});

	it('renders add student button', () => {
		render(<StudentList />);
		const button = screen.getByRole('button', { name: /add student/i });
		expect(button).toBeVisible();
	});
});
