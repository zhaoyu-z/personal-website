import * as React from 'react'
import {
    Box,
    Typography,
    Paper
} from '@mui/material'
import styles from '../styles/Intro.module.css'

function Intro() {


    return (
        <Box
            className={styles.background}
        >
            <Typography sx={{ color: "white", fontSize: "2vw" }}>
                {"Hi, I'm Zhaoyu Zhang"}
            </Typography>
        </Box>
    )
}

export default Intro