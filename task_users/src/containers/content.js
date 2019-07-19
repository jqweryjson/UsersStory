import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Navigate from '../containers/navigate';
import {showSideMenu, setGroup} from '../actions/index';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openSideMenu: false,
			mainContent: true
		}
	}

	componentWillMount(){
		this.getGroup('all');
	}

	getGroup(group) {
		if (group === 'all') {
			return this.props.setGroup(this.props.userInfo);
		} else if ((group === 'first') || (group === 'second') || (group === 'third')) {
			var result = [];
			this.props.userInfo.map((user) => {
				if (user.group === group) {
					result.push(user);
				}
			});
			return this.props.setGroup(result);
		}

	}

	toShowSideMenu = () => {
		var returnedValue = !this.state.openSideMenu;
		this.setState({openSideMenu: returnedValue});
		this.props.showSideMenu(returnedValue);
		returnedValue ? this.refs.content.classList.add('move') : this.refs.content.classList.remove('move');
	}


	render() {
		return (
			<div className="content"
				ref="content">
				<button className="menu-btn" onClick={this.toShowSideMenu}>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<hr/>
				<button onClick={() => this.getGroup('all')}>All</button>
				<button onClick={() => this.getGroup('first')}>First group</button>
				<button onClick={() => this.getGroup('second')}>Second group</button>
				<button onClick={() => this.getGroup('third')}>Third group</button>
				<Navigate />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		showSideMenu: showSideMenu,
		setGroup: setGroup
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Content);