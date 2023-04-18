import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Content } from "./router"

function App() {
	return (
		<>
			<Header />
			<Main>
				<Content />
			</Main>
		</>
	)
}

export default App
