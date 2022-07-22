import React, {useState} from 'react';
import axios from 'axios';

const IO = () => {
	const [photos, setPhotos] = useState([]);
	let test_url = "https://jsonplaceholder.typicode.com/photos";

	axios.get(test_url)
	.then(function(res) {
		setPhotos(res.data);
		console.log('success');
	})
	.catch(function(error) {
		console.log('fail');
	});

	if(photos.length > 0) {
		return (
			photos.map(photo => (
				(photo.id < 10) ? (
					<div key={photo.id}>
						<p>title: {photo.title}</p>
						<img src={photo.thumbnailUrl} alt='img'/>
					</div>
				) : null
			))
		);
	}
	else {
		return (
			<div>
				<button onClick={IO}>???</button>
			</div>
		);
	}
};

export default IO;