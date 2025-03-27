import React, { useState } from 'react';
import AddStudentButton from '../AddStudentButton/AddStudentButton';
import StudentItem from '../StudentItem/StudentItem';

export default function StudentList({ initialStudents = [] }) {
	const [students, setStudents] = useState(initialStudents);

	return (
		<div>
			<h1>My Students</h1>
			{students.length === 0 ? (
				<p>You don't have any students.</p>
			) : (
				students.map((student) => <StudentItem student={student} />)
			)}
			<AddStudentButton />
		</div>
	);
}
