import React, {useEffect} from 'react';

const {kakao} = window;

const Map = (props) => {
	let markers = [];

	useEffect(() => {
		let axisX = '127.01417875697042';
		let axisY = '37.48581618312246';

		const mapContainer = document.getElementById('map');
		const mapOption = {
			center: new kakao.maps.LatLng(axisY, axisX)
			, level: 2
		};

		const map = new kakao.maps.Map(mapContainer, mapOption);
		const ps = new kakao.maps.services.Places();
		const infowindow = new kakao.maps.InfoWindow({zIndex:1});

		searchPlaces();

		// 키워드 검색을 요청하는 함수
		function searchPlaces() {
			let keyword = props.searchKeyword;

			if (!keyword.replace(/^\s+|\s+$/g, "")) {
				console.log("키워드를 입력해주세요!");
				return false;
			}

			// 장소검색 객체를 통해 키워드로 장소검색을 요청
			ps.keywordSearch(keyword, placesSearchCB);
		}

		// 장소검색이 완료됐을 때 호출되는 콜백함수
		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				// 정상적으로 검색이 완료됐으면
				// 검색 목록과 마커를 표출
				displayPlaces(data);

				// 페이지 번호를 표출
				displayPagination(pagination);

			} else if (status === kakao.maps.services.Status.ZERO_RESULT) {
				alert('검색 결과가 존재하지 않습니다.');
				return;
			} else if (status === kakao.maps.services.Status.ERROR) {
				alert('검색 결과 중 오류가 발생했습니다.');
				return;
			}
		}

		// 검색 결과 목록과 마커를 표출하는 함수
		function displayPlaces(places) {
			const listEl = document.getElementById('places-list'), 
					resultEl = document.getElementById('search-result'),
					fragment = document.createDocumentFragment(), 
					bounds = new kakao.maps.LatLngBounds();

			// 검색 결과 목록에 추가된 항목들을 제거
			listEl && removeAllChildNods(listEl);

			// 지도에 표시되고 있는 마커를 제거
			removeMarker([]);

			for ( var i=0; i<places.length; i++ ) {
				// 마커를 생성하고 지도에 표시
				let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
					marker = addMarker(placePosition, i, undefined), 
					itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가
				bounds.extend(placePosition);

				// 마커와 검색결과 항목에 mouseover 했을때
				// 해당 장소에 인포윈도우에 장소명을 표시
				// mouseout 했을 때는 인포윈도우를 닫기
				(function(marker, title) {
				kakao.maps.event.addListener(marker, 'mouseover', function() {
					displayInfowindow(marker, title);
				});

				kakao.maps.event.addListener(marker, 'mouseout', function() {
					infowindow.close();
				});

				itemEl.onmouseover =  function () {
					displayInfowindow(marker, title);
				};

				itemEl.onmouseout =  function () {
					infowindow.close();
				};
				})(marker, places[i].place_name);

				fragment.appendChild(itemEl);
			}

			// 검색결과 항목들을 검색결과 목록 Element에 추가
			listEl && listEl.appendChild(fragment);
			if (resultEl) {
				resultEl.scrollTop = 0;
			}

			// 검색된 장소 위치를 기준으로 지도 범위를 재설정
			map.setBounds(bounds);
		}

		// 검색결과 항목을 Element로 반환하는 함수
		function getListItem(index, places) {
			const el = document.createElement('li');
			let itemStr = `
				<div class="info">
					<span class="marker marker_${index+1}">
					${index+1}
					</span>
					<a href="${places.place_url}">
					<h5 class="info-item place-name">${places.place_name}</h5>
					${
						places.road_address_name 
						? `<span class="info-item road-address-name">
							${places.road_address_name}
						</span>
						<span class="info-item address-name">
							${places.address_name}
						</span>`
						: `<span class="info-item address-name">
							${places.address_name}
						</span>`
					}
					<span class="info-item tel">
						${places.phone}
					</span>
					</a>
				</div>
				`

			el.innerHTML = itemStr;
			el.className = 'item';

			return el;
		}

		// 마커를 생성하고 지도 위에 마커를 표시하는 함수
		function addMarker(position, idx, title) {
			var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지
				imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
				imgOptions =  {
					spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
					spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
					offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
				},
				markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
				marker = new kakao.maps.Marker({
					position: position, // 마커의 위치
					image: markerImage 
				});

			marker.setMap(map); // 지도 위에 마커를 표출
			markers.push(marker);  // 배열에 생성된 마커를 추가

			return marker;
		}

		// 지도 위에 표시되고 있는 마커를 모두 제거합니다
		function removeMarker() {
			for ( var i = 0; i < markers.length; i++ ) {
				markers[i].setMap(null);
			}
			markers = [];
		}

		// 검색결과 목록 하단에 페이지번호를 표시는 함수
		function displayPagination(pagination) {
			const paginationEl = document.getElementById('pagination');
			let fragment = document.createDocumentFragment();
			let i; 

			// 기존에 추가된 페이지번호를 삭제
			while (paginationEl.hasChildNodes()) {
				paginationEl.lastChild &&
				paginationEl.removeChild(paginationEl.lastChild);
			}

			for (i=1; i<=pagination.last; i++) {
				const el = document.createElement('a');
				el.href = "#";
				el.innerHTML = i.toString();

				if (i===pagination.current) {
				el.className = 'on';
				} else {
				el.onclick = (function(i) {
					return function() {
					pagination.gotoPage(i);
					}
				})(i);
				}

				fragment.appendChild(el);
			}
			paginationEl.appendChild(fragment);
		}

		// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
		// 인포윈도우에 장소명을 표시
		function displayInfowindow(marker, title) {
			const content = '<div style="padding:5px;z-index:1;" class="marker-title">' + title + '</div>';

			infowindow.setContent(content);
			infowindow.open(map, marker);
		}

		// 검색결과 목록의 자식 Element를 제거하는 함수
		function removeAllChildNods(el) {
			while (el.hasChildNodes()) {
				el.lastChild &&
				el.removeChild (el.lastChild);
			}
		}

	}, [props.searchKeyword])

	return (
		<div className="map-container">
			<div id='map' style={{width:'80%', height:'800px'}}></div>
			<div id="search-result">
				<p className="result-text">
				<span className="result-keyword">
					{ props.searchKeyword }
				</span>
				검색 결과
				</p>
				<div className="scroll-wrapper">
				<ul id="places-list"></ul>
				</div>
				<div id="pagination"></div>
			</div>
		</div>
	)

	// useEffect(() => {
	// 	let axisX = '127.01417875697042';
	// 	let axisY = '37.48581618312246';
	// 	let container = document.getElementById('map');

	// 	let options = {
	// 		center: new kakao.maps.LatLng(axisY, axisX)
	// 		,level: 2
	// 	};

	// 	// 지도생성
	// 	let map = new kakao.maps.Map(container, options);

	// 	// 마커표시할위치
	// 	// let loc = new kakao.maps.LatLng(axisY, axisX);

	// 	// 장소 검색 객체
	// 	let ps = new kakao.maps.services.Places();

	// 	// 결과목록이나 마커 클릭했을때 장소명 나오는 인포윈도우 생성
	// 	let infowindow = new kakao.maps.InfoWindow({zIndex:1});

	// 	// search
	// 	searchPlaces();

	// 	function searchPlaces() {
	// 		let keyword = props.searchKeyword;

	// 		if(!keyword.replace(/^\s+|\s+$/g, '')) {
	// 			console.log('please input keyword!');
	// 			return false;
	// 		}

	// 		ps.keywordSearch(keyword, placesSearchCB);
	// 	}

	// 	// 검색완료됐을때 콜백함수
	// 	function placesSearchCB(data, status, pagination) {
	// 		let kservices = kakao.maps.services;
	// 		if(status === kservices.Status.OK) {
	// 			displayPlaces(data);
	// 			displayPagination(pagination);
	// 		}
	// 		else if(status === kservices.Status.ZERO_RESULT) {
	// 			alert('no res');
	// 			return;
	// 		}
	// 		else if(status === kservices.Status.ERROR) {
	// 			alert('yes error');
	// 			return;
	// 		}
	// 	}

	// 	// 검색목록
	// 	function displayPlaces() {
	// 	}
	// 	function displayPagination() {
	// 	}
		
	// 	let marker = new kakao.maps.Marker({
	// 		// position: loc
	// 	});
	// 	marker.setMap(map);

	// 	// console.log(props.searchKeyword);
	// 	console.log('loding..');
	// }, [props.searchKeyword]);

	// return (
	// 	<div>
	// 		<div id='map' style={{width:'80%', height:'800px'}}></div>
	// 	</div>
	// );
};

export default Map;