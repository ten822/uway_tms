import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ClassCounterContainer from './container/classCounterContainer';
import FunctionCounterContainer from './container/functionCounterContainer';
import ReduxCounterContainer from './container/reduxCounterContainer';

function Count() {
	const number = useSelector((state) => state.counter);	// redux
	const [count, setNum] = useState(0);

	const addNum = () => {
		setNum(count+1);
	};
	const subNum = () => {
		setNum(count-1);
	};

	return (
		<div>
			<h2>global : {count}</h2>
			<ClassCounterContainer addNum={addNum} subNum={subNum}/>
			<FunctionCounterContainer addNum={addNum} subNum={subNum}/>
			
			<h2>global : {number}</h2>
			<ReduxCounterContainer/>
		</div>
	);
}

export default Count;