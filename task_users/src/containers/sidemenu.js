import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SideMenu extends Component {
	componentWillUpdate(nextProps){
		if (nextProps.showSideMenu){
			this.refs.sideMenu.classList.add('show');
		}
		else {
			this.refs.sideMenu.classList.remove('show');
		}
	}

	render() {
		return (
			<div className="sideMenu"
				ref="sideMenu">
				<button>Main</button>
				<button>About</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		showSideMenu: state.showSideMenu
	};
}

export default connect(mapStateToProps)(SideMenu);