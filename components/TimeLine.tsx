import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@mui/lab' 
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'

// const events = [
//     {
//         id: 1,
//         primary: "I was born!",
//         secondary: "I was born in a beautiful city, Wuhan, in China",
//         time: "17/5/2000",
//         image: ""
//     },
//     {
//         id: 2,
//         primary: "Junior High School",
//         secondary: "Wuhan Wuluolu Experimental High School",
//         time: "1/9/2012",
//         image: ""
//     },
//     {
//         id: 3,
//         primary: "First Time Abroad",
//         secondary: "I spent 2 months at Bournemouth - United Kingdom - And it's really a nice and amazing small town",
//         time: "",
//         image: ""
//     },
//     {
//         id: 4,
//         primary: "Senior High School",
//         secondary: "I obtained my A-LEVELs (A*) and IELTS (7.5) here!",
//         time: "1/9/2015",
//         image: ""
//     },
//     {
//         id: 5,
//         primary: "First Part-time - Burger King",
//         secondary: "I spend 2 months as a chef at Burger King in my first year of senior high school",
//         time: "",
//         image: ""
//     },
//     {
//         id: 6,
//         primary: "University of Manchester",
//         secondary: "Pursuing a Master of Engineering with Honhours in Computer Science",
//         time: "13/9/2018",
//         image: ""
//     },
//     {
//         id: 7,
//         primary: "First Internship",
//         secondary: "Worked as a Technical Assistant at Ministry of Foreign Affairs Office of China",
//         time: "1/6/2019 - 1/9/2019",
//         image: ""
//     },
//     {
//         id: 8,
//         primary: "Second Internship",
//         secondary: "Worked as a Software Engineer at iFlyTek",
//         time: "1/7/2021 - 22/9/2021",
//         image: ""
//     },
//     {
//         id: 9,
//         primary: "We Are Together!",
//         secondary: "Met my lovely girlfriend, Lynn",
//         time: "29/4/2022",
//         image: ""
//     },
//     {
//         id: 10,
//         primary: "Graduation!!!",
//         secondary: "I got a Second Class, Divison One degree!",
//         time: "1/7/2022",
//         image: ""
//     },
//     {
//         id: 11,
//         primary: "Our First Pet!",
//         secondary: "A cute Netherland Dwarf Rabbit, Oreo",
//         time: "17/1/2023",
//         image: ""
//     },
//     {
//         id: 12,
//         primary: "Full Stack Engineer - Radley Associates",
//         secondary: "Java Springboot, React and Postgresql",
//         time: "10/3/2023",
//         image: ""
//     },
// ]

const events = [
    {
      id: 1,
      primary: "Birth",
      secondary: "I was born in the beautiful city of Wuhan, China.",
      time: "May 17, 2000",
      image: ""
    },
    {
      id: 2,
      primary: "Junior High School",
      secondary: "I attended Wuhan Wuluolu Experimental High School.",
      time: "September 1, 2012",
      image: ""
    },
    {
      id: 3,
      primary: "First Time Abroad",
      secondary: "I spent two months in the lovely town of Bournemouth, United Kingdom.",
      time: "",
      image: ""
    },
    {
      id: 4,
      primary: "Senior High School",
      secondary: "I obtained my A-Levels (A*) and IELTS (7.5).",
      time: "September 1, 2015",
      image: ""
    },
    {
      id: 5,
      primary: "First Part-time Job",
      secondary: "I worked as a chef at Burger King for two months during my first year of senior high school.",
      time: "",
      image: ""
    },
    {
      id: 6,
      primary: "University of Manchester",
      secondary: "I pursued a Master of Engineering with Honours in Computer Science.",
      time: "September 13, 2018",
      image: ""
    },
    {
      id: 7,
      primary: "First Internship",
      secondary: "I worked as a Technical Assistant at the Ministry of Foreign Affairs Office of China.",
      time: "June 1, 2019 - September 1, 2019",
      image: ""
    },
    {
      id: 8,
      primary: "Second Internship",
      secondary: "I worked as a Software Engineer at iFlyTek.",
      time: "July 1, 2021 - September 22, 2021",
      image: ""
    },
    {
      id: 9,
      primary: "Meeting My Girlfriend",
      secondary: "I met my lovely girlfriend, Lynn.",
      time: "April 29, 2022",
      image: ""
    },
    {
      id: 10,
      primary: "Graduation",
      secondary: "I received a Second Class, Division One degree.",
      time: "July 1, 2022",
      image: ""
    },
    {
      id: 11,
      primary: "Our First Pet",
      secondary: "We got a cute Netherland Dwarf Rabbit named Oreo.",
      time: "January 17, 2023",
      image: ""
    },
    {
      id: 12,
      primary: "Full Stack Engineer",
      secondary: "I started working as a Java Springboot, React, and Postgresql developer at Radley Associates.",
      time: "March 10, 2023",
      image: ""
    },
  ];

function TimeLine() {

    const e = events[0]
    return (
        <Box>
            <Box>
                <Typography textAlign='center' fontSize="5vw">
                    {"Zhaoyu's Timeline"}
                </Typography>
            </Box>
            <Timeline position='alternate'>
                {events.reverse().map((e) => (
                <TimelineItem key={e.id}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', fontSize: "2vw" }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {e.time}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot variant='outlined'>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography 
                            variant="h6"
                            component="span"
                            sx={{ fontSize: "3vw" }}    
                        >
                            {e.primary}
                        </Typography>
                        <Typography
                            sx={{ fontSize: "1.5vw" }}
                        >
                            {e.secondary}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}

export default TimeLine