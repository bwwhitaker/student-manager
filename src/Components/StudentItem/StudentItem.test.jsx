import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentItem from './StudentItem';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('renders student list', () => {
	const student = {
		name: 'John Bailey',
		email: 'dancingthrulife@gmail.com',
		phonenumber: '317-555-1234',
	};
	render(<StudentItem student={student} />);
	it('renders student list', () => {
		expect(screen.getByText('John Bailey')).toBeInTheDocument();
	});
});
