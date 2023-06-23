import * as React from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';
import * as config from './config/Projects.config';

const Projects = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.headerContainer}>
                <Typography sx={{ fontSize: "2vw" }}>
                    {config.header}
                </Typography>
            </Box>
            <Box className={styles.projectsContainer}>
                <ProjectCard 
                    image="../projectLogos/avatar.jpg"
                    imageTitle="avatar"
                    name="My Avatar"
                />
                <ProjectCard 
                    image="../projectLogos/avatar.jpg"
                    imageTitle="avatar"
                    name="My Avatar"
                />
            </Box>
        </Box>
    );
};

export default Projects;