export const showSideMenu = (someState) => {
	return {
		type: "SHOW_SIDE_MENU",
		payload: someState
	}
}

export const setGroup = (group) => {
	return {
		type: "SET_GROUP",
		payload: group
	}
}