import * as React from 'react'
import {
    Link,
    CssBaseline,
    Box,
    Typography,
    Stack,
    ImageList,
    ImageListItem
} from '@mui/material'
import Image from 'next/image'

type ProjectCardProps = {
    image: any,
    name: string,
    time: Date,
    techs: Array<string>,
    link: string,
}

function ProjectCard(props: ProjectCardProps) {
    const {
        image,
        name,
        time,
        techs,
        link
    } = props

    return (
        <Box>
            <CssBaseline />
            <Typography variant='h5'>
                {name}
            </Typography>
            <Typography variant='h6'>
                {time}
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
            {/* </Stack> */}
        </Box>
    )
}

export default ProjectCard