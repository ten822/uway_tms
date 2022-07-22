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

export default ClassCounterContainer;	// �ٸ� js���Ͽ��� �ҷ��� �� �ֵ���
