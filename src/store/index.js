import { createStore, compose, applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"
import rootReducer from "./root-reducer"
import * as api from "../config"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk.withExtraArgument({ client: axios, api }))))

export default store
