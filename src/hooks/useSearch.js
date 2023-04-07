import { useDispatch, useSelector } from "react-redux"
import { selectSearch } from "../store/controls/controls-selectors"
import { setSearch } from "../store/controls/controls-actions"

export const useSearch = () => {
	const dispatch = useDispatch()
	const search = useSelector(selectSearch)

	const handleSearch = e => {
		dispatch(setSearch(e.target.value))
	}

	return [search, handleSearch]
}
