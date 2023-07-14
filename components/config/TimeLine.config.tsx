import SchoolIcon from '@mui/icons-material/School';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';

export const timeLineTitle = "Time Line Continues ...";

export const eventIcons = {

}

export const events = [
    {
		primary: "Birth",
		secondary: "I was born in the beautiful city of Wuhan, China.",
		time: new Date("May 17, 2000"),
		image: "",
		icon: <ChildCareIcon />
    },
    {
		primary: "Junior High School",
		secondary: "I attended Wuhan Wuluolu Experimental High School.",
		time: new Date("September 1, 2012"),
		image: "",
		icon: <SchoolIcon />
    },
    {
		primary: "First Time Abroad",
		secondary: "I spent two months in the lovely town of Bournemouth, United Kingdom.",
		time: new Date("July 1, 2013"),
		image: "",
		icon: <FlightTakeoffIcon />
    },
    {
		primary: "Senior High School",
		secondary: "I obtained my A-Levels (A*) and IELTS (7.5).",
		time: new Date("September 1, 2015"),
		image: "",
		icon: <SchoolIcon />
    },
    // {
	//   primary: "First Part-time Job",
	//   secondary: "I worked as a chef at Burger King for two months during my first year of senior high school.",
	//   time: new Date("July 1, 2016"),
	//   image: "",
	//   icon: <SchoolIcon />
    // },
    {
		primary: "University of Manchester",
		secondary: "I pursued a Master of Engineering with Honours in Computer Science.",
		time: new Date("September 13, 2018"),
		image: "",
		icon: <SchoolIcon />
    },
    {
		primary: "First Internship",
		secondary: "I worked as a Technical Assistant at the Ministry of Foreign Affairs Office of China.",
		time: new Date("June 1, 2019"),
		image: "",
		icon: <WorkIcon />
    },
    {
		primary: "Second Internship",
		secondary: "I worked as a Software Engineer at iFlyTek.",
		time: new Date("July 1, 2021"),
		image: "",
		icon: <WorkIcon />
    },
    {
		primary: "Met My Love",
		secondary: "I met my lovely girlfriend, Lynn.",
		time: new Date("April 29, 2022"),
		image: "",
		icon: <FavoriteIcon />
    },
    {
		primary: "Graduation",
		secondary: "I graduated from the University of Manchester. Big Step in my life.",
		time: new Date("July 1, 2022"),
		image: "",
		icon: <SchoolIcon />
    },
    {
		primary: "Our First Pet",
		secondary: "We got a cute Netherland Dwarf Rabbit named Oreo.",
		time: new Date("January 17, 2023"),
		image: "",
		icon: <PetsIcon />
    },
    {
		primary: "Full Stack Engineer",
		secondary: "I started working as a Full Stack developer at Radley Associates.",
		time: new Date("March 10, 2023"),
		image: "",
		icon: <WorkIcon />
    },
];

export const lengthOfGapBetweenEachItem = "35px";