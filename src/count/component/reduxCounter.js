import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, multiple} from '../../redux/counter';

const ReduxCounter = () => {
	const count = useSelector((state) => state.counter.value);

	const dispatch = useDispatch();

	const handleIncrement = () => {dispatch(increment());};
	const handleDecrement = () => {dispatch(decrement());};
	const handleMulti = () => {dispatch(multiple());};

	return (
		<div>
			<p>redux: {count}</p>
			<button onClick={handleIncrement}>inc</button>
			<button onClick={handleDecrement}>dec</button>
			<button onClick={handleMulti}>mul3</button>
		</div>
	);
}

export default ReduxCounter;