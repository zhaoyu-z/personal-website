import * as React from 'react';
import { EventState } from '../TimeLine';
import { ProjectState } from '../Projects';
import { styled } from '@mui/system';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import * as colors from './colors';

export const HandleComponentScroll = (componentId: string, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
	const handleScroll = () => {
		const componentElement = document.getElementById(componentId);
		if (componentElement) {
			const componentPosition = componentElement.getBoundingClientRect();
			const { top, bottom } = componentPosition;
			const isVisible = top < window.innerHeight && bottom >= 0;

			if (isVisible) {
				setIsVisible(true);
			}
		} else {
			console.log("Could not find component id: " + componentId);
		}
	};
  
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial visibility on mount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []); // eslint-disable-line
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
	setState: React.Dispatch<React.SetStateAction<EventState | ProjectState>>,
	states: EventState | ProjectState
) => {
	const handleScroll = () => {
		const componentElement = document.getElementById(componentId);
		if (componentElement) {
			const componentPosition = componentElement.getBoundingClientRect();
			const { top, bottom } = componentPosition;
			const isVisible = top < window.innerHeight && bottom >= 0;

			if (isVisible) {
				setState(prevState => ({
					...prevState,
					/* only set the state that is false to true, because component that already been into viewport
					will only show the animation once */
					[componentId]: true 
				}));
			}
		} else {
			console.log("Could not find component id: " + componentId);
		}
	}
  
	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial visibility on mount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []); // eslint-disable-line
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
	const month: string = monthMap[date.getMonth()].toString();
	const day: string = date.getDate().toString();
	const year: string = date.getFullYear().toString();
	return `${month} ${day}, ${year}`;
}

export function isValidEmail(email: string) {
	if (email.length === 0) return true;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export const repeatString = (value: string, n: number) => {
	if (n <= 0) {
	    return "";
	}
	var result = "";
	for (let x=0; x<n; x++) {
	    result += value + " ";
	}
	return result;
}

/* 
	used to create a grid layout css property of areas
	sample usage:

	a = createGrid(9, 2, ["0:5", "5:9", "0:4", "4:9", "0:5", "5:9", "0:4", "4:9"])
	
	gives

	Area1 Area1 Area1 Area1 Area1 Area2 Area2 Area2 Area2
	Area3 Area3 Area3 Area3 Area4 Area4 Area4 Area4 Area4
	Area5 Area5 Area5 Area5 Area5 Area6 Area6 Area6 Area6
	Area7 Area7 Area7 Area7 Area8 Area8 Area8 Area8 Area8
*/
export function createGrid(noOfCols: number, noOfElementsPerRow: number, ranges: Array<string>) {
	let eIndex = 0;
	let result = "";
	const noOfRows = Math.floor(ranges.length / noOfElementsPerRow);

	for (let i = 0; i < noOfRows; i++) {
	  let row = "";
	  const curRanges = ranges.slice(eIndex, eIndex + noOfElementsPerRow);

	  for (let r of curRanges) {
		let curElement = "Area" + (eIndex + 1);
		const [start, end] = r.split(":").map(Number);

		for (let j = start; j < end; j++) {
		  row += curElement + " ";
		}

		eIndex++;
	  }
		result += `"${row.trim()}"\n`;
	}
	return result.trim();
}