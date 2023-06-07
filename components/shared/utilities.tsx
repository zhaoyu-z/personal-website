import * as React from 'react'

export const HandleComponentScroll = (componentId: string, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
	const handleScroll = () => {
		const componentElement = document.getElementById(componentId)
		if (componentElement) {
			const componentPosition = componentElement.getBoundingClientRect()
			const { top, bottom } = componentPosition
			const isVisible = top < window.innerHeight && bottom >= 0

			if (isVisible) {
				setIsVisible(true)
			}
		} else {
			console.log("Could not find component id: " + componentId)
		}
	}
  
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		handleScroll() // Check initial visibility on mount
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []) // eslint-disable-line
}

type MonthDict = {
	[index: number]: string
}

export const monthMap: MonthDict = {
	0: 'January',
	1: 'February',
	2: 'March',
	3: 'April',
	4: 'May',
	5: 'June',
	6: 'July',
	7: 'August',
	8: 'September',
	9: 'October',
	10: 'November',
	11: 'December'
}

export const formatDate = (date: Date) => {
	const month: string = monthMap[date.getMonth()].toString()
	const day: string = date.getDate().toString()
	const year: string = date.getFullYear().toString()
	return `${month} ${day}, ${year}`
}