import * as React from 'react';
import { EventState } from '../TimeLine';
import { styled } from '@mui/system';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
	setState: React.Dispatch<React.SetStateAction<EventState>>,
	states: EventState
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

export const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

export const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

export const ResizableTextArea = styled(TextareaAutosize)(
    ({ theme }) => `
	resize: vertical;

    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  `,
);