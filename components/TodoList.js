import React, { Component } from 'react';
import './Button.css';
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
		this.add = this.add.bind(this);
		this.del = this.del.bind(this);
	}
	add() {
		const item = [...this.state.list];
		item.push(this.refs.item.value);
		this.refs.item.value = '';
		this.setState({ list: item });
	}
	del() {
		const item = [...this.state.list];
		item.pop();
		this.refs.item.value = '';
		this.setState({ list: item });
	}
	render() {
		return (
			<div>
				<input type="text" ref="item" />
				<br />
				<br />
				<button id="btn" onClick={this.add}>
					Add
				</button>
				<button id="btn" onClick={this.del}>
					Delete
				</button>
				<div>
					<ul>
						{this.state.list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default TodoList;
