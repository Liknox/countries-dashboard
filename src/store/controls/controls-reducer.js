import { clearControls, CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from "./controls-actions"

const initialState = {
	search: "",
	region: ""
}

const controlsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SEARCH:
			return { ...state, search: payload }
		case SET_REGION:
			return { ...state, region: payload }
		case CLEAR_CONTROLS:
			return initialState
		default:
			return state
	}
}

export default controlsReducer
