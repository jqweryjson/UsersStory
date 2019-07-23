import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Navigate from '../containers/navigate';
import { Button } from "../components/dumb";
import {showSideMenu, setGroup} from '../actions/index';

class Content extends React.PureComponent {
	state = {
		openSideMenu: false,
		mainContent: true
	}

	componentWillMount(){
		this.getGroup('all');
	}

	getGroup(group) {
		const f = this;;
		debugger;
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
				{ ['All','First group','Second group','Third group',].map(item => <Button key={item} value={item} text={item} onClick={this.getGroup} />) }
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