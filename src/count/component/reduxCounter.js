import React from 'react';

const reduxCounter = ({count, onIncrease, onDecrease}) => {
	return (
		<div>
			<h3>redux: {count}</h3>
			<button onClick={onIncrease}>inc</button>
			<button onClick={onDecrease}>dec</button>
		</div>
	);
};

export default reduxCounter;