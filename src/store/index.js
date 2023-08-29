import { legacy_createStore as createStore, compose, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./root-reducer"
import * as api from "../config"

const persistConfig = {
	key: "root",
	storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

let enhancer

if (import.meta.env.VITE_MODE === "development") {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	enhancer = composeEnhancer(applyMiddleware(thunk.withExtraArgument({ client: axios, api })))
} else {
	enhancer = applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
}

const store = createStore(persistedReducer, enhancer)

export default store
export const persistor = persistStore(store)
