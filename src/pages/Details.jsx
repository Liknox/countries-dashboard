import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { IoArrowBack } from "react-icons/io5"
import { useEffect } from "react"
import { Button } from "../components/Button"
import { Info } from "../components/Info"
import { selectDetails } from "../store/details/details-selectors"
import { clearDetails, loadCountryByName } from "../store/details/details-actions"

export const Details = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadCountryByName(name))
		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])

	const { currentCountry, error, status } = useSelector(selectDetails)

	return (
		<div>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack /> Back
			</Button>
			{status === "loading" && <h2 style={{ textAlign: "center" }}>Loading...</h2>}
			{error && <h2 style={{ textAlign: "center" }}>Can't fetch data</h2>}
			{currentCountry && <Info push={navigate} {...currentCountry} />}
		</div>
	)
}
