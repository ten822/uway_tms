/* global kakao */
import React, {useEffect} from 'react';

// const {kakao} = window;
const Map = () => {
	useEffect(() => {
		let axisX = '127.01417875697042';
		let axisY = '37.48581618312246';
		let container = document.getElementById('map');

		let options = {
			center: new kakao.maps.LatLng(axisY, axisX)
			,level: 2
		};

		let map = new kakao.maps.Map(container, options);
		let loc = new kakao.maps.LatLng(axisY, axisX);
		let marker = new kakao.maps.Marker({
			position: loc
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