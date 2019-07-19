import {combineReducers} from 'redux';
import ShowSideMenu from './showSideMenu';
import UserInfo from './user-info';
import SetGroup from './setGroup';

const allReducers = combineReducers ({
	showSideMenu: ShowSideMenu,
	userInfo: UserInfo,
	currentGroup: SetGroup
});

export default allReducers;