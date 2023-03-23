import { combineReducers } from "redux"
import controlsReducer from "./controls/controls-reducer"
import { countriesReducer } from "./countries/countries-reducer"
import themeReducer from "./theme/theme-reducer"

const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer,
	controls: controlsReducer
})

export default rootReducer
