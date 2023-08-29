import styled from "styled-components"
import { CustomSelect } from "./CustomSelect"
import { Search } from "./Search"
import { optionsMap } from "../helpers/defaultData"
import { useControls } from "../hooks/useControls"

const options = Object.values(optionsMap)

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`

export const Controls = () => {
	const [region, handleSelect] = useControls()

	return (
		<Wrapper>
			<Search />
			<CustomSelect options={options} placeholder="Filter by Region" isSearchable={false} value={optionsMap[region] || ""} onChange={handleSelect} />
		</Wrapper>
	)
}
