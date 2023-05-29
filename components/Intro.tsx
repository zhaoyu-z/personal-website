import * as React from 'react'
import {
    Box,
    Typography,
    CssBaseline,
    Paper
} from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/Intro.module.css'

type IntroProps = {
    additionalStyles?: any;
}

function Intro(props?: IntroProps) {

    return (
        <Box
            className={styles.background}
            sx={{ ...props?.additionalStyles }}
        >
            <CssBaseline />
            {/* <Typography sx={{ color: "white", fontSize: "2vw" }}>
                {"Hi, I'm Zhaoyu Zhang"}
            </Typography> */}
            <TypeAnimation
                sequence={[
                    // Same String at the start will only be typed once, initially
                    'Hi, I\'m Zhaoyu Zhang',
                    1000,
                    'Welcome to My Personal Website!',
                    1000,
                    'I\'m a Software Engineer',
                    1000,
                    'Contact Me if You Need Anything!',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '5em' }}
                repeat={Infinity}
                cursor={false}
                className={styles.type}
            />
        </Box>
    )
}

export default Intro