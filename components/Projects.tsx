import * as React from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';
import * as config from './config/Projects.config';
import { HandleSubComponentScroll } from './shared/utilities';

export type ProjectState = {
    [key: string]: boolean;
};

const Projects = () => {

    /* used for checking components has been scrolled down into viewport*/
    const [projectVisibilityStates, setProjectVisibilityStates] = React.useState<ProjectState>({});

    /* initialise the component states */
    React.useEffect(() => {
        const newState: ProjectState = {};
        config.projects.forEach(project => {
            newState[project.name] = false;
        });
        setProjectVisibilityStates(newState);
    }, []);

    config.projects.map((project) => {
        HandleSubComponentScroll(project.name, setProjectVisibilityStates, projectVisibilityStates);
    });

    return (
        <Box className={styles.container}>
            <Box className={styles.headerContainer}>
                <Typography className={styles.projectHeader}>
                    {config.header}
                </Typography>
            </Box>
            <Box className={styles.projectsContainer}>
                {config.projects.map((p, index) => (
                    <ProjectCard
                        id={p.name}
                        isVisible={projectVisibilityStates[p.name]}
                        animationDirection={index % 2 == 0 ? "left2right" : "right2left"}
                        key={index}
                        image={p.image}
                        imageTitle={p.imageTitle}
                        imageAspectRatio={p.imageAspectRatio}
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