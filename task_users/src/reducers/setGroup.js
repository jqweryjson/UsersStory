export default function (state=null, action) {
	switch (action.type) {
		case 'SET_GROUP':
			return action.payload;
		default:
			return state;
	}
}