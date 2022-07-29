import React, {useState} from 'react';
import Map from './map';

const Landing = () => {
	// 
	const [inputVal, setValue] = useState('');
	// 
	const [keyword, setKeyword] = useState('');

	const keywordChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	}

	const submitKeyword = (e) => {
		e.preventDefault();
		setKeyword(inputVal);
	}

	const valueChecker = () => {
		if (inputVal === "") {
			alert ("검색어를 입력해주세요.")
		}
	}

	return (
		<div className="landing-page">
			<div className="landing-page__inner">
				<div className="search-form-container">
					<form className="search-form" onSubmit={ submitKeyword }>
					<label htmlFor="place" className="form__label">
						<input type="text" id="movie-title" className="form__input" name="place" onChange={ keywordChange } placeholder="입력 (ex: 강남 맛집)" required />
						<div className="btn-box">
						<input className="btn form__submit" type="submit" value="검색" onClick={ valueChecker }/>
						</div>
					</label>
					</form>
				</div>
				
				{/* 제출한 검색어 넘기기 */}
				<Map searchKeyword={ keyword }/>
			</div>
		</div>
	);
};

export default Landing;