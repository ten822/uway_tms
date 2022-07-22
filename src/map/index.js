/* global kakao */
import React, {useEffect} from 'react';

// const {kakao} = window;
const Map = () => {
	useEffect(() => {
		let container = document.getElementById('map');

		let options = {
			center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488)
			,level: 3
		};

		let map = new kakao.maps.Map(container, options);
		let position = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
		let marker = new kakao.maps.Marker({
			position: position
		});
		marker.setMap(map);

		console.log('loding..');
	}, []);

	return (
		<div>
			<div id='map' style={{width:'80%', height:'800px'}}></div>
		</div>
	);
};

export default Map;