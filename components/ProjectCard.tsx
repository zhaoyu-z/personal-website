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
// import animations from '../styles/Animations.module.css';

type ProjectCardProps = {
    image: string,
    imageTitle: string
    imageAspectRatio: string
    name: string,
    description: string,
    techs: Array<string>,
    link: string,
}

function ProjectCard(props: ProjectCardProps) {
    const {
        image,
        imageTitle,
        imageAspectRatio,
        name,
        description,
        techs,
        link
    } = props;

    return (
        <Card sx={{ margin: "20px", borderRadius: "24px", flexBasis: "40%",
        }}>
            <Link href={link} target="_blank" sx={{ textDecoration: "none" }}>
                <CardMedia
                    image={image}
                    title={imageTitle}
                    className={styles.cardMedia}
                    sx={{ 
                        paddingBottom: imageAspectRatio,
                    }}
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
                </CardMedia>
            </Link>
        </Card>
    );
};

export default ProjectCard;