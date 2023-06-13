import * as React from 'react'
import {
    Box,
    Typography,
    CssBaseline,
    Avatar
} from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/Intro.module.css'
import animations from '../styles/Animations.module.css'
import * as config from './config/Intro.config'

type IntroProps = {
    additionalStyles?: any
    isVisible: boolean
}

function Intro(props?: IntroProps) {

    const [leftMovement, setLeftMovement] = React.useState(0)
    const [rightMovement, setRightMovement] = React.useState(0)
    const prevMouseXRef = React.useRef(null)
    const timerRef = React.useRef<number | any>(null)

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
        }, config.resetBackgroundImageIntervalInMilliSeconds / totalIterations)
    }

    return (
        <Box
            id="Intro"
            className={`${styles.background} ${props?.isVisible ? animations.fadein : ''}`}
            sx={{ ...props?.additionalStyles, overflow: 'hidden', width: '100%' }}
        >
            <CssBaseline />
            <Avatar 
                src={config.backgroundImage} 
                alt={config.backgroundImageAlt}
                variant="square"
                style={{
                    width: "100%",
                    height: "auto"
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
                sequence={config.typingAnimation.sequence}
                speed={config.typingAnimation.speed}
                deletionSpeed={config.typingAnimation.deletionSpeed}
                style={{ position: 'absolute' }}
                repeat={config.typingAnimation.repeat}
                cursor={false}
                className={styles.type}
            />
        </Box>
    )
}

export default Intro