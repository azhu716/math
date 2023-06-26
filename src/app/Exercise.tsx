import React from 'react';

const dict = new Map<string, boolean>();

function rand() {
	while(true) {
		const a = Math.round(Math.random() * 20);
		const b = Math.round(Math.random() * 20);
		const key = `${a},${b}`;
		if(a + b <= 20 && !dict.get(key)) {
			dict.set(key, true);
			return [a, b];
		}
	}
}

export default function Exercise() {
	const [a, b] = rand();
	return (
		<div style={{
			fontSize: '1rem',
			margin: '1rem 1rem 1.6rem 1rem',
		}}>{`${a}+${b}=`}</div>
	);
}