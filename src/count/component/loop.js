import React from 'react';
import {useSelector} from 'react-redux';

const Loop = () => {
	const count = useSelector((state) => state.counter.value);
	let res = '';
	let first = 0;
	let second = 1;
	let arr = [];

	if(count === 0) {
		res = '영!';
	}
	else if(count < 0) {
		res = '안돼!';
	}
	else {
		for(let i=0; i<count; i++) {
			if(i === 0) {
				arr[i] = second;
				continue;
			}
			res = first+second;
			first = second;
			second = res;
			arr[i] = res;
		}
		res = arr;
	}

	return (
		<div>
			{
				!Array.isArray(res)
				? res
				: res.map(function(val,idx) {
					return(<div key={idx}>{idx+1}{'=>'}{val}</div>)
				})
			}
		</div>
	);
};

export default Loop;