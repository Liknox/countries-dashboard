import { Info } from "./Info"
import { useDetails } from "./useDetails"

const CountryDetails = ({ name, navigate }) => {
	const { currentCountry, error, status } = useDetails(name)

	return (
		<>
			{status === "loading" && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
			{error && <h2 style={{ textAlign: "center" }}>Can't fetch data</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</>
	)
}
export default CountryDetails
