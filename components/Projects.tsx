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
                {config.projects.map((p, index) => (
                    <ProjectCard
                        key={index}
                        image={p.image}
                        imageTitle={p.imageTitle}
                        imageAspectRatio={p.imageAspectRatio}
                        // imageWidth={p.imageWidth}
                        name={p.name}
                        description={p.description}
                        techs={p.techs}
                        link={p.link}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Projects;