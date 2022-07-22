import React, { Component } from 'react';

class Counter extends Component {
	state = {
		counter: 0
	};
	
	handleIncrease = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	};

	handleDecrease = () => {
		this.setState({
			counter: this.state.counter - 1
		});
	};

	addNum = () => {
		this.props.addNum();
	};
	subNum = () => {
		this.props.subNum();
	};

	render() {
		return (
			<div>
				<h3>class: {this.state.counter}</h3>
				<button onClick={() => {this.handleIncrease(); this.addNum();}}>+1</button>
				<button onClick={() => {this.handleDecrease(); this.subNum();}}>-1</button>
			</div>
		);
	}
}

export default Counter;