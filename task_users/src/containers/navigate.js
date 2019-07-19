import React, {Component} from 'react';
import {connect} from 'react-redux';

class Navigate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userID: 0
		}
	}

	switchUser = (direction) => {
		if (direction === 'next') {
			if (this.state.userID !== (this.props.currentGroup.length - 1)) {
				this.setState({
					userID: this.state.userID + 1
				});
			}
		} else {
			if (this.state.userID !== 0) {
				this.setState({
					userID: this.state.userID - 1
				});
			}
		}
	}

	render() {
		return (
			<div className="nav-users">
				<div className="navigate" ref="navigate">
					<div className="nav-bar">
						<button className="toLeft"
							onClick={this.switchUser('previous')}>&lt;</button>
						<span>{this.state.userID + 1} from {this.props.currentGroup.length}</span>
						<button className="toRight" 
							onClick={() => this.switchUser('next')}>&gt;</button>
					</div>
					<div className="info">
						<span>Name: {this.props.currentGroup[this.state.userID].name}</span> 
						<button className="edit" ref="editName">Edit</button>
					</div>
					<div className="info">
						<span>Description: {this.props.currentGroup[this.state.userID].description}</span> 
						<button className="edit" ref="editDesc">Edit</button>
					</div>
				</div>
				<div className="about" ref="about">
					<span>Text About</span>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentGroup: state.currentGroup
	};
}

export default connect(mapStateToProps)(Navigate);