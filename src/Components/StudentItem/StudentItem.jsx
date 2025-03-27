import React from 'react';

export default function StudentItem({ student }) {
	return (
		<div>
			<div>{student.name}</div>
			<div>{student.email} </div>
			<div>{student.phonenumber}</div>
		</div>
	);
}
