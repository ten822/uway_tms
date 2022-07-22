import React, {useState, useEffect} from 'react';
import axios from 'axios';

const IO = () => {
	const [data, setData] = useState();

	axios.get('https://ta.uwayapply.com')
	.then(function(res) {
		console.log('success');
	})
	.catch(function(error) {
		console.log('fail');
	});

	return (
		<div>
			{data && <textarea rows={7} value={JSON.stringify(data,null,2)}/>}
		</div>
	);
};

export default IO;