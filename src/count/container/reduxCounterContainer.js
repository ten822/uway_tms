import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ReduxCounter from '../component/reduxCounter';
import {increase, decrease} from '../redux/counter';

function ReduxCounterContainer() {
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	
	const onIncrease = () => {
		dispatch(increase());
	};
	const onDecrease = () => {
		dispatch(decrease());
	};

	return (
		<div>
			<ReduxCounter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
		</div>
	);
}

export default ReduxCounterContainer;	// �ٸ� js���Ͽ��� �ҷ��� �� �ֵ���
