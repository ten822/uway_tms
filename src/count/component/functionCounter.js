import React, {useState} from 'react';

function Mpp(props) {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h3>fnc: {counter}</h3>
			<button onClick={()=> {setCounter(counter + 1); props.addNum();}}> Increase</button>
			<button onClick={()=> {setCounter(counter - 1); props.subNum();}}> Decrease</button>
		</div>
	);
}

export default Mpp;