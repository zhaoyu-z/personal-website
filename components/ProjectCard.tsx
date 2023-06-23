import * as React from 'react';
import {
    Link,
    CssBaseline,
    Box,
    Typography,
    Stack,
    ImageList,
    ImageListItem,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material';
// import Image from 'next/image';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { formatDate } from './shared/utilities';

type ProjectCardProps = {
    image: string,
    imageTitle: string
    name: string,
    time?: Date,
    techs?: Array<string>,
    link?: string,
}

function ProjectCard(props: ProjectCardProps) {
    const {
        image,
        imageTitle,
        name,
        time,
        techs,
        link
    } = props;

    return (
        <Card sx={{ margin: "20px" }}>
            <CardMedia
                sx={{ height: "600px", width: "600px" }}
                image={image}
                title={imageTitle}
            >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {techs}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </CardMedia>
        </Card>
    );
};

export default ProjectCard;