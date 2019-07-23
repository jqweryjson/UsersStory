import * as React from 'react';
import { Button } from "../components/dumb";
import {connect} from 'react-redux';

class Navigate extends React.PureComponent {

	state = {
		userID: 0
	}
	switchPrevious = () => {
		if (this.state.userID !== 0) {
			this.setState({
				userID: this.state.userID - 1
			});
		}
	}
	switchNext = () => {
		if (this.state.userID !== (this.props.currentGroup.length - 1)) {
			this.setState({
				userID: this.state.userID + 1
			});
		}
	}

	render() {
		return (
			<div className="nav-users">
				<div className="navigate" ref="navigate">
					<div className="nav-bar">
						<Button className="toLeft" 
							text="&lt;" 
							onClick={this.switchPrevious} />
						<span>{this.state.userID + 1} from {this.props.currentGroup.length}</span>
						<Button className="toRight"  
							text="&gt;" 
							onClick={this.switchNext} />							
					</div>
					<div className="info">
						<span>Name: {this.props.currentGroup[this.state.userID].name}</span> 
						<Button className="edit" 
							ref="editName" 
							text="Edit" />
					</div>
					<div className="info">
						<span>Description: {this.props.currentGroup[this.state.userID].description}</span> 
						<Button className="edit" 
							ref="editDesc" 
							text="Edit" />
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