import React, { Component } from 'react';
import './FormBody.css';
class FormBody extends Component {
	constructor() {
		super();
		this.val = this.val.bind(this);
	}
	val() {
		console.log(this.refs.name.value);
	}
	render() {
		return (
			<div>
				<form id="main" action="#" onSubmit={this.val} style={{ position: 'relative', left: '40%' }}>
					<p id="para">Username:-</p>
					<input id="main-inpt" type="text" ref="name" required />
					<p>Password:-</p>
					<input id="main-inpt" type="Password" ref="pwd" required />
					<br />
					<br />

					<input id="main-btn" type="submit" value="submit" />
				</form>
			</div>
		);
	}
}
export default FormBody;
