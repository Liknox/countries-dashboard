import { Link } from "react-router-dom"
import styled from "styled-components"
import { Container } from "./Container"
import ThemeSwitcher from "../features/theme/ThemeSwitcher"
import { useCleanUp } from "../features/controls/useCleanUp"

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
	to: "/"
})`
	color: var(--colors-text);
	font-size: 20px;
	text-decoration: none;
	font-weight: var(--fw-bold);
	@media (max-width: 500px) {
		font-size: 18px;
	}
`

export const Header = () => {
	const cleanUp = useCleanUp()
	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>Where is the world?</Title>
					<ThemeSwitcher />
				</Wrapper>
			</Container>
		</HeaderEl>
	)
}
