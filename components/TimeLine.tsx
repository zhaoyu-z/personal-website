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
import animations from '../styles/Animations.module.css'
import { formatDate } from './shared/utilities'
import * as config from './config/TimeLine.config'
import { HandleSubComponentScroll } from './shared/utilities'

type TimeLineProps = {
	isVisible?: boolean
}

export type EventState = {
    [key: string]: boolean;
};

config.events.sort((a, b) => b.time.valueOf() - a.time.valueOf())

function TimeLine(props: TimeLineProps) {

    /* used for checking components has been scrolled down into viewport*/
    const [eventVisibilityStates, setEventVisibilityStates] = React.useState<EventState>({});

    /* initialise the component states */
    React.useEffect(() => {
        const newState: EventState = {};
        config.events.forEach(event => {
            newState[event.primary] = false;
        });
        setEventVisibilityStates(newState);
    }, []);

    // React.useEffect(() => {
    //     console.log('Current State:', eventVisibilityStates);
    // }, [eventVisibilityStates]);

    config.events.map((event) => {
        HandleSubComponentScroll(event.primary, setEventVisibilityStates, eventVisibilityStates);
    })

    return (
        <Box id='TimeLine' className={`${styles.timeLine} ${props.isVisible ? animations.fadein_l2r : ''}`}>
            <CssBaseline />
            <Box>
				<Typography textAlign='center' className={styles.timeLineHeader}>
                    {config.timeLineTitle}
                </Typography>
            </Box>
            <Timeline position='alternate'>
                {config.events.map((e) => (
                <TimelineItem id={e.primary} key={e.primary}>
                    <TimelineOppositeContent
						sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                      <Typography className={`${styles.timeLineOppositeContent} ${eventVisibilityStates[e.primary] ? animations.fadein_l2r : ""}`}>
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