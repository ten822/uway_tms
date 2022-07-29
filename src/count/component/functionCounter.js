import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function FunctionCounter(props) {
	const [counter, setCounter] = useState(0);

	return (
		<Stack spacing={2} direction="row">
			<h3>fnc: {counter}</h3>
			<Button variant="contained"onClick={()=> {setCounter(counter + 1); props.addNum();}} startIcon={<DeleteIcon />}>inc</Button>
			<Button variant="contained"onClick={()=> {setCounter(counter - 1); props.subNum();}}>dec</Button>
		</Stack>
	);
}

export default FunctionCounter;