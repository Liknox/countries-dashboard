import { combineReducers } from "redux"
import { countriesReducer } from "./countries/countries-reducer"
import themeReducer from "./theme/theme-reducer"

const rootReducer = combineReducers({
	theme: themeReducer,
	countries: countriesReducer
})

export default rootReducer
