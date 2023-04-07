import { useDispatch, useSelector } from "react-redux"
import { selectRegion } from "../store/controls/controls-selectors"
import { setRegion } from "../store/controls/controls-actions"

export const useControls = () => {
	const dispatch = useDispatch()
	const region = useSelector(selectRegion)

	const handleSelect = reg => {
		dispatch(setRegion(reg?.value || ""))
	}

	return [region, handleSelect]
}
