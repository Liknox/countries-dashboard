import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearDetails, loadCountryByName, selectDetails } from "./details-slice"

export const useDetails = name => {
	const dispatch = useDispatch()
	const details = useSelector(selectDetails)

	useEffect(() => {
		dispatch(loadCountryByName(name))
		document.title = name
		return () => {
			dispatch(clearDetails())
		}
	}, [name, dispatch])
	return details
}
