import React, { Component } from 'react';
import ClassCounter from '../component/classCounter';

class ClassCounterContainer extends Component {
	addNum = () => {
		this.props.addNum();
	};
	subNum = () => {
		this.props.subNum();
	};

	render() {
		return (
			<div>
				<ClassCounter addNum={this.addNum} subNum={this.subNum}/>
			</div>
		);
	}
}

export default ClassCounterContainer;	// 다른 js파일에서 불러올 수 있도록
