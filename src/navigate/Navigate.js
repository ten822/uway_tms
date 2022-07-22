import React from 'react';
import {useNavigate} from 'react-router-dom';

const Navigate = () => {
	let navigate = useNavigate();
	return (
		<div>
			<button onClick={() => {navigate('/count');}}>count</button>
			<button onClick={() => {navigate('/test');}}>test</button>
			<button onClick={() => {navigate('/io');}}>IO</button>
			<button onClick={() => {navigate('/map');}}>map</button>
		</div>
	);
};

export default Navigate;