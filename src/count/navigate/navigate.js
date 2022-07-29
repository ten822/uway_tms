import React from 'react';
import {useNavigate} from 'react-router-dom';

const Navigate = () => {
	let navigate = useNavigate();
	
	return (
		<div>
			<button onClick={() => {navigate('/count/class');}}>class</button>
			<button onClick={() => {navigate('/count/function');}}>function</button>
			<button onClick={() => {navigate('/count/redux');}}>redux</button>
			<button onClick={() => {navigate('/count/loop');}}>loop</button>
		</div>
	);
}

export default Navigate;