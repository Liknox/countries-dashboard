import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { routes } from "./router/index.jsx"

function App() {
	return (
		<>
			<Header />
			<Main>
				<Routes>
					{routes.map(e => (
						<Route exact={e.exact} path={e.path} element={e.component} key={e.path} />
					))}
				</Routes>
			</Main>
		</>
	)
}

export default App
