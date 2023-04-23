import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadNeighborsByBorder } from "../store/details/details-actions"
import { selectNeighbors } from "../store/details/details-selectors"

export const useInfo = borders => {
	const dispatch = useDispatch()
	const neighbors = useSelector(selectNeighbors)

	useEffect(() => {
		dispatch(loadNeighborsByBorder(borders))
	}, [dispatch])

	return neighbors
}
