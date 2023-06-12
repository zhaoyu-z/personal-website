import * as React from 'react'
import { EventState } from '../TimeLine'

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

/* 
	Function for controls the animation 
	It changes a React state variable which has a list of component states, denoted by their event.primary
	all initialised as false 
	once the component with the componentId enters the viewport, update that state to true,
	so the component will show the animation 
*/
export const HandleSubComponentScroll = (
	componentId: string,
	setState: React.Dispatch<React.SetStateAction<EventState>>,
	states: EventState
) => {
	const handleScroll = () => {
		const componentElement = document.getElementById(componentId)
		if (componentElement) {
			const componentPosition = componentElement.getBoundingClientRect()
			const { top, bottom } = componentPosition
			const isVisible = top < window.innerHeight && bottom >= 0

			if (isVisible) {
				setState(prevState => ({
					...prevState,
					/* only set the state that is false to true, because component that already been into viewport
					will only show the animation once */
					[componentId]: true 
				}));
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