import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./store"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<HashRouter>
				<App />
			</HashRouter>
		</PersistGate>
	</Provider>
)
