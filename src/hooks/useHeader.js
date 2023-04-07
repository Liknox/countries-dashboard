import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../store/theme/theme-actions"
import { clearControls } from "../store/controls/controls-actions"
import { useEffect } from "react"
import { selectTheme } from "../store/theme/theme-selector"

export const useHeader = () => {
	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()

	const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"))

	const cleanUp = () => dispatch(clearControls())

	useEffect(() => {
		document.body.setAttribute("data-theme", theme)
	}, [theme])

	return [theme, toggleTheme, cleanUp]
}
