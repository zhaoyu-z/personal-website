import * as React from 'react'
import {
    Avatar,
    Breadcrumbs,
    Typography,
    Box,
    Button,
    Link,
    Tooltip
} from '@mui/material'
import * as config from './config/Footer.config'
import styles from '../styles/Footer.module.css'

function Footer() {
    console.log(config.socialMediaList)
    return (
        <Box className={styles.footer}>
            <Typography sx={{ mb: 4 }} className={styles.contactMe}>
                {config.title}
            </Typography>
            <Breadcrumbs className={styles.socialMediaLinks}>
            {config.socialMediaList.map((item, index) => (
                <Tooltip key={index} title={item.title}>
                <Button
                    key={index}
                    component={Link} 
                    href={item.link} 
                    underline="none" 
                    color="inherit" 
                    startIcon={
                        <Avatar 
                        src={item.imagePath} 
                        className={styles.socialMediaIcon}
                        />
                    }
                    sx={{
                        '& .MuiButton-startIcon': {
                            marginLeft: '0px',
                            marginRight: '0px'
                        },
                        minWidth: '0px'
                    }}
                    />
                </Tooltip>
            ))}
            </Breadcrumbs >
        </Box>
    )
}

export default Footer