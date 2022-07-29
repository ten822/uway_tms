import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Route,Routes} from 'react-router-dom';
import Navigate from './navigate/navigate';
import ClassCounter from './component/classCounter';
import FunctionCounter from './component/functionCounter';
import ReduxCounter from './component/reduxCounter';
import Loop from './component/loop';

const Count = () => {
	const [count, setNum] = useState(0);
	const count2 = useSelector((state) => state.counter.value);	// redux

	const addNum = () => {
		setNum( count+1);
	};
	const subNum = () => {
		setNum(count-1);
	};

	return (
		<div>
			<h4>A: {count}</h4>
			<h4>B: {count2}</h4>
			<Navigate/>

			<Routes>
				<Route path='/*' element={<div>hi</div>}/>
				<Route path='/class' element={<ClassCounter addNum={addNum} subNum={subNum}/>}/>
				<Route path='/function' element={<FunctionCounter addNum={addNum} subNum={subNum}/>}/>
				<Route path='/redux' element={<ReduxCounter/>}/>
				<Route path='/loop' element={<Loop/>}/>
			</Routes>
		</div>
	);
};

// function Count() {
// 	const number = useSelector((state) => state.counter.value);	// redux
// 	const [count, setNum] = useState(0);

// 	const addNum = () => {
// 		setNum( count+1);
// 	};
// 	const subNum = () => {
// 		setNum(count-1);
// 	};

// 	return (
// 		<div>
// 			<h2>global : {count}</h2>
// 			<ClassCounterContainer addNum={addNum} subNum={subNum}/>
// 			<FunctionCounterContainer addNum={addNum} subNum={subNum}/>
			
// 			<h2>global : {number}</h2>
// 			<ReduxCounterContainer2/>
// 		</div>
// 	);
// }

export default Count;