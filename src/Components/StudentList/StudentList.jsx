import React from 'react';
import AddStudentButton from '../AddStudentButton/AddStudentButton';

export default function StudentList() {
	return (
		<div>
			<h1>My Students</h1>
			<p>You don't have any students.</p>
			<AddStudentButton />
		</div>
	);
}
