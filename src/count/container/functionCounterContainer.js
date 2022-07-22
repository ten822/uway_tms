import React from 'react';
import FunctionCounter from '../component/functionCounter';

function FunctionCounterContainer(props) {
	return (
		<div>
			<FunctionCounter addNum={props.addNum} subNum={props.subNum}/>
		</div>
	);
}

export default FunctionCounterContainer;	// 다른 js파일에서 불러올 수 있도록
