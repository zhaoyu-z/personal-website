import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// import Link from '@mui/material/Link'
import Image from 'next/image'
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
// import LaptopMacIcon from '@mui/icons-material/LaptopMac'
// import HotelIcon from '@mui/icons-material/Hotel'
// import RepeatIcon from '@mui/icons-material/Repeat'

type MonthDict = {
  [index: number]: string
}

const monthMap: MonthDict = {
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

function formatDate(date: Date) {
  const month: string = monthMap[date.getMonth()].toString()
  const day: string = date.getDate().toString()
  const year: string = date.getFullYear().toString()
  return `${month} ${day}, ${year}`
}

const events = [
    {
      primary: "Birth",
      secondary: "I was born in the beautiful city of Wuhan, China.",
      time: new Date("May 17, 2000"),
      image: ""
    },
    {
      primary: "Junior High School",
      secondary: "I attended Wuhan Wuluolu Experimental High School.",
      time: new Date("September 1, 2012"),
      image: ""
    },
    {
      primary: "First Time Abroad",
      secondary: "I spent two months in the lovely town of Bournemouth, United Kingdom.",
      time: new Date("July 1, 2013"),
      image: ""
    },
    {
      primary: "Senior High School",
      secondary: "I obtained my A-Levels (A*) and IELTS (7.5).",
      time: new Date("September 1, 2015"),
      image: ""
    },
    {
      primary: "First Part-time Job",
      secondary: "I worked as a chef at Burger King for two months during my first year of senior high school.",
      time: new Date("July 1, 2016"),
      image: ""
    },
    {
      primary: "University of Manchester",
      secondary: "I pursued a Master of Engineering with Honours in Computer Science.",
      time: new Date("September 13, 2018"),
      image: ""
    },
    {
      primary: "First Internship",
      secondary: "I worked as a Technical Assistant at the Ministry of Foreign Affairs Office of China.",
      time: new Date("June 1, 2019"),
      image: ""
    },
    {
      primary: "Second Internship",
      secondary: "I worked as a Software Engineer at iFlyTek.",
      time: new Date("July 1, 2021"),
      image: ""
    },
    {
      primary: "Meeting My Girlfriend",
      secondary: "I met my lovely girlfriend, Lynn.",
      time: new Date("April 29, 2022"),
      image: ""
    },
    {
      primary: "Graduation",
      secondary: "I received a Second Class, Division One degree.",
      time: new Date("July 1, 2022"),
      image: ""
    },
    {
      primary: "Our First Pet",
      secondary: "We got a cute Netherland Dwarf Rabbit named Oreo.",
      time: new Date("January 17, 2023"),
      image: ""
    },
    {
      primary: "Full Stack Engineer",
      secondary: "I started working as a Java Springboot, React, and Postgresql developer at Radley Associates.",
      time: new Date("March 10, 2023"),
      image: ""
    },
]

events.sort((a, b) => b.time.valueOf() - a.time.valueOf())

function TimeLine() {

    const e = events[0]

    return (
        <Box sx={{paddingLeft: "20vw", paddingRight: "20vw"}}>
            <Box>
                <Typography textAlign='center' fontSize="3vw">
                    {"Zhaoyu's Timeline"}
                </Typography>
            </Box>
            <Timeline position='alternate'>
                {events.map((e) => (
                <TimelineItem key={e.primary}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', fontSize: "1.5vw" }}
                        variant="body2"
                        color="text.secondary"
                    >
                      <Typography>
                        {formatDate(e.time)}
                      </Typography>
                      {(e.image) &&
                        <Image src={e.image} alt={`${e.image}_image`} width="2500px" height="900px">
                        </Image>
                      }
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
                            sx={{ fontSize: "1.5vw" }}    
                        >
                            {e.primary}
                        </Typography>
                        <Typography
                            sx={{ fontSize: "0.75vw" }}
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