import { SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_DETAILS } from "./details-actions"

const initialState = {
	currentCountry: null,
	status: "idle",
	error: null
}

const detailsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_COUNTRY:
			return { ...state, status: "received", currentCountry: payload }
		case SET_LOADING:
			return { ...state, error: null, status: "loading" }
		case SET_ERROR:
			return { ...state, status: "rejected", error: payload }
		case CLEAR_DETAILS:
			return initialState
		default:
			return state
	}
}

export default detailsReducer
