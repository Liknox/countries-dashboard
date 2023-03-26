import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadNeighborsByBorder, selectNeighbors } from "./details-slice"

export const useNeighbors = borders => {
	const dispatch = useDispatch()
	const neighbors = useSelector(selectNeighbors)

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	useEffect(() => {
		if (borders.length) {
			dispatch(loadNeighborsByBorder(borders))
		}
	}, [borders, dispatch])

	return [neighbors, numberWithCommas]
}
