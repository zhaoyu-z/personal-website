import * as React from 'react';
import {
    Link,
    CssBaseline,
    Box,
    Typography,
    Stack,
    ImageList,
    ImageListItem,
    Button
} from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { formatDate } from './shared/utilities';

type ProjectCardProps = {
    image?: any,
    name: string,
    time: Date,
    techs: Array<string>,
    link?: string,
}

function ProjectCard(props: ProjectCardProps) {
    const {
        image,
        name,
        time,
        techs,
        link
    } = props;

    return (
        <Box
            sx={{ 
                width: "50%", 
                height: "300px", 
                justifyContent: "center", 
                alignItems: "center", 
                display: "flex",
                flexDirection: "column"
            }}
        >
            <CssBaseline />
            <Typography variant='h5'>
                {name}
            </Typography>
            <Typography variant='h6'>
                {formatDate(time)}
            </Typography>
            {/* <Stack direction="row"> */}
            <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {techs.map((item) => (
                    <ImageListItem key={item} cols={1} >
                        <Image
                            src={""}
                            alt={item}
                            loading="lazy"
                            width="20px" 
                            height="20px"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            {link && <Button
                component={Link} 
                href={link} 
                underline="none" 
                color="inherit"
                endIcon={
                    <ArrowForwardIcon />
                } 
            >
                <Typography
                    variant="h6"
                    component="div"
                >
                    View Source
                </Typography>
            </Button>}
            {/* </Stack> */}
        </Box>
    );
};

export default ProjectCard;