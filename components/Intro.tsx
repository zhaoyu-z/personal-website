import * as React from 'react'
import {
    Box,
    Typography,
    CssBaseline,
    Avatar
} from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/Intro.module.css'

type IntroProps = {
    additionalStyles?: any
}

function Intro(props?: IntroProps) {

    const [leftMovement, setLeftMovement] = React.useState(0)
    const [rightMovement, setRightMovement] = React.useState(0)
    const prevMouseXRef = React.useRef(null)
    const timerRef = React.useRef<number | any>(null)
    const resetBackgroundImageIntervalInMilliSeconds = 1000

    const handleMouseEnter = (event: any) => {
        clearInterval(timerRef.current)
        prevMouseXRef.current = event.clientX
    }

    const handleMouseMove = (event: any) => {
        const mouseX = event.clientX

        if (prevMouseXRef.current !== null) {
            if (prevMouseXRef.current > mouseX) {
                const movement = Math.floor((prevMouseXRef.current - mouseX) / 8)
                setLeftMovement(movement)
            } else {
                const movement = Math.floor((mouseX - prevMouseXRef.current) / 8)
                setRightMovement(movement)
            }
        }
    }

    const handleMouseLeave = () => {

        let totalIterations = Math.max(leftMovement, rightMovement)
      
        timerRef.current = setInterval(() => {
            setLeftMovement((prevLeftMovement) => Math.max(prevLeftMovement - 1, 0))
            setRightMovement((prevRightMovement) => Math.max(prevRightMovement - 1, 0))
        
            totalIterations--
        
            if (totalIterations === 0) {
                clearInterval(timerRef.current)
                prevMouseXRef.current = null
            }
        }, resetBackgroundImageIntervalInMilliSeconds / totalIterations)
    }

    return (
        <Box
            className={styles.background}
            sx={{ ...props?.additionalStyles, overflow: 'hidden' }}
        >
            <CssBaseline />
            <Avatar 
                src={"../Homepage Background.png"} 
                alt="Image Alt Text"
                variant="square"
                style={{
                    width: "100%",
                    height: "40%"
                }}
                sx={{ 
                    position: 'relative', top: '0',
                    left: leftMovement ? `-${leftMovement}px` : `${rightMovement}px`,
                    transform: prevMouseXRef.current 
                    ? (leftMovement ? `translateX(${leftMovement})` : `translateX(${rightMovement})`)
                    : `translateX(0)`,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
            <TypeAnimation
                sequence={[
                    'Hi, I\'m Zhaoyu Zhang',
                    1000,
                    'Welcome to My Personal Website!',
                    1000,
                    'I\'m a Software Engineer',
                    1000,
                    'Contact Me if You Need Anything!',
                    1000,
                ]}
                speed={10}
                deletionSpeed={80}
                style={{ fontSize: '5em', position: 'absolute' }}
                repeat={Infinity}
                cursor={false}
                className={styles.type}
            />
        </Box>
    )
}

export default Intro