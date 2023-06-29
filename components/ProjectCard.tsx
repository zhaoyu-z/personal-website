import * as React from 'react';
import {
    Link,
    Box,
    Typography,
    Card,
    CardMedia,
    Breadcrumbs
} from '@mui/material';
import styles from '../styles/ProjectCard.module.css';
import animations from '../styles/Animations.module.css';

type ProjectCardProps = {
    id: string,
    isVisible: boolean,
    animationDirection: "left2right" | "right2left",
    image: string,
    // imageTitle: string
    // imageAspectRatio: string
    name: string,
    description: string,
    techs: Array<string>,
    link: string,
    area: string
}

function ProjectCard(props: ProjectCardProps) {
    const {
        id,
        isVisible,
        animationDirection,
        image,
        // imageTitle,
        // imageAspectRatio,
        name,
        description,
        techs,
        link,
        area
    } = props;

    return (
        <Link id={id} href={link} target="_blank" 
            sx={{ 
                textDecoration: "none",
                gridArea: area,
                backgroundImage: `
                    -webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(0, 0, 0, 0.1)), 
                    color-stop(95%, rgba(0, 0, 0, 0.4))), 
                    url(${image})
                `,
                borderRadius: "24px",
            }}
            className={`${
                isVisible 
                ? animationDirection === "left2right" ? animations.fadein_l2r : animations.fadein_r2l 
                : ""
            } ${styles.link}`}
        >
            <Box className={`${styles.hoverDiv}`}>
                <Box className={styles.techsContainer}>
                    <Breadcrumbs separator="|">
                        {techs.map((t, index) => (
                            <Typography key={index} color="white !important">
                                {t}
                            </Typography>
                        ))}
                    </Breadcrumbs>
                </Box>
                <Box className={styles.nameContainer}>
                    <Typography textAlign='right' variant='h6'
                        sx={{ color: "white !important" }}
                        className={styles.description}
                    >
                        {description}
                    </Typography>
                    <Typography textAlign='right' variant='h4'
                        sx={{ color: "white !important" }}
                    >
                        {name}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default ProjectCard;