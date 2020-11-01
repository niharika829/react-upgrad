import React, { Component } from 'react';
import Header from './Header.js';
import FormBody from './FormBody.js';
import Footer from './Footer.js';
import './Todo.css';
class Todo extends Component {
	render() {
		return (
			<div id="container">
				<Header />
				<FormBody />
				<Footer />
			</div>
		);
	}
}
export default Todo;
