import { combineReducers, configureStore } from "@reduxjs/toolkit"
import axios from "axios"
import * as api from "./config"
import { controlsReducer } from "./features/controls/controls-slice"
import { countryReducer } from "./features/countries/countries-slice"
import { detailsReducer } from "./features/details/details-slice"
import { themeReducer } from "./features/theme/theme-slice"

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
	theme: themeReducer,
	controls: controlsReducer,
	countries: countryReducer,
	details: detailsReducer,
})

const persistConfig = {
	key: "root",
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			// ! if we use thunk, serializableCheck: false
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
