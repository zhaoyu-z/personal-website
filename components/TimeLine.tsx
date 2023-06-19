import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CssBaseline, ListItemIcon, styled } from '@mui/material';
import Image from 'next/image';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../styles/TimeLine.module.css';
import animations from '../styles/Animations.module.css';
import { formatDate } from './shared/utilities';
import * as config from './config/TimeLine.config';
import { HandleSubComponentScroll } from './shared/utilities';

type TimeLineProps = {
	isVisible?: boolean
};

export type EventState = {
    [key: string]: boolean;
};

config.events.sort((a, b) => b.time.valueOf() - a.time.valueOf());

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
    });

    return (
        <Box id='TimeLine' className={`${styles.timeLine} ${props.isVisible ? animations.fadein_l2r : ''}`}>
            <CssBaseline />
            <Box>
				<Typography textAlign='center' className={styles.timeLineHeader}>
                    {config.timeLineTitle}
                </Typography>
            </Box>
            <Timeline position='alternate'>
                {config.events.map((e, index) => (
                <TimelineItem id={e.primary} key={e.primary}>
                    <TimelineOppositeContent
						sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {/* <ListItemIcon>
                            <AccessTimeIcon />
                        </ListItemIcon> */}
                        <Typography className={
                            /* 
                                adds the corresponding animation (when index divides 2, show l2r, else show r2l)
                                when the component has entered the viewport (check the states variable)
                            */ 
                            `${styles.timeLineOppositeContent} ${
                                eventVisibilityStates[e.primary] 
                                ? (index % 2 === 0 ? animations.fadein_l2r : animations.fadein_r2l) 
                                : ""
                            }`
                        }>
                            {formatDate(e.time)}
                        </Typography>
                        {(e.image) &&
                            <Image src={e.image} alt={`${e.image}_image`} width="2500px" height="900px">
                            </Image>
                        }
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ height: `${config.lengthOfGapBetweenEachItem}` }}/>
                        <TimelineDot variant='outlined'>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ height: `${config.lengthOfGapBetweenEachItem}` }}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ 
                        py: '12px', px: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                        className={`${
                            eventVisibilityStates[e.primary]
                            ? (index % 2 === 1 ? animations.fadein_l2r : animations.fadein_r2l) 
                            : ""
                        }`}
                    >
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
    );
};

export default TimeLine;