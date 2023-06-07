import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material'
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
import styles from '../styles/TimeLine.module.css'
import fadein from '../styles/FadeIn.module.css'
import { formatDate } from './shared/utilities'
import * as config from './config/TimeLine.config'

type TimeLineProps = {
	isVisible: boolean
}

config.events.sort((a, b) => b.time.valueOf() - a.time.valueOf())

function TimeLine(props: TimeLineProps) {

    return (
        <Box id='TimeLine' className={`${styles.timeLine} ${props.isVisible ? fadein.global_fadein : ''}`}>
            <CssBaseline />
            <Box>
				<Typography textAlign='center' className={styles.timeLineHeader}>
                    {config.timeLineTitle}
                </Typography>
            </Box>
            <Timeline position='alternate'>
                {config.events.map((e) => (
                <TimelineItem key={e.primary}>
                    <TimelineOppositeContent
						sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
						
                    >
                      <Typography className={styles.timeLineOppositeContent}>
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
                            className={styles.primary}
                        >
                            {e.primary}
                        </Typography>
                        <Typography
                            className={styles.secondary}
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