import React from 'react';
import FunctionCounter from '../component/functionCounter';

function FunctionCounterContainer(props) {
	return (
		<div>
			<FunctionCounter addNum={props.addNum} subNum={props.subNum}/>
		</div>
	);
}

export default FunctionCounterContainer;	// �ٸ� js���Ͽ��� �ҷ��� �� �ֵ���
