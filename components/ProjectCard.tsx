import * as React from 'react'
import {
    Link,
    Box,
    Typography,
    Stack
} from '@mui/material'

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
        </Box>
    )
}

export default ProjectCard