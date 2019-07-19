export default function (state=null, action) {
	switch (action.type) {
		case 'SHOW_SIDE_MENU':
			return action.payload;
		default:
			return state;
	}
}