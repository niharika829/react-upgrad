import React, { Component } from 'react';
class Header extends Component {
	render() {
		return (
			<div
				style={{
					position: 'relative',
					left: '40%',
					backgroundColor: 'dodgerblue',
					width: '20%',
					fontSize: '200%',
					textAligin: 'centre',
				}}
			>
				ToDo List App
			</div>
		);
	}
}
export default Header;
