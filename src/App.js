import React from 'react';
import Navigate from './navigate/Navigate';
import Count from './count/index';
import Test from './Test';
import IO from './io/index';
import Map from './map/index';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
	return (
		<div className="App">

			<Router>
				<Navigate/>

				<Routes>
					<Route path='/count' element={<Count/>}/>
					<Route path='/test' element={<Test/>}/>
					<Route path='/io' element={<IO/>}/>
					<Route path='/map' element={<Map/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;	// 다른 js파일에서 불러올 수 있도록
