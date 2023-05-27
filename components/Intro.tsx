import * as React from 'react'
import {
    Box,
    Typography,
    CssBaseline,
    Paper
} from '@mui/material'
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
            <Typography sx={{ color: "white", fontSize: "2vw" }}>
                {"Hi, I'm Zhaoyu Zhang"}
            </Typography>
        </Box>
    )
}

export default Intro