import { IoMoon, IoMoonOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container } from "./Container"
import { useHeader } from "../hooks/useHeader"

const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`

const Title = styled(Link).attrs({
	to: "/",
})`
	color: var(--colors-text);
	font-size: 20px;
	text-decoration: none;
	font-weight: var(--fw-bold);
	@media (max-width: 500px) {
		font-size: 18px;
	}
`

const ModeSwitcher = styled.div`
	display: flex;
	align-items: center;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	// font-weight: var(--fw-bold);
	text-transform: capitalize;
`

export const Header = () => {
	const [theme, toggleTheme, cleanUp] = useHeader()

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>Where is the world?</Title>
					<ModeSwitcher onClick={toggleTheme}>
						{theme === "light" ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />} <span style={{ marginLeft: "0.75rem" }}>{theme === "light" ? "Dark" : "Light"} Mode</span>
					</ModeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
