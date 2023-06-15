import * as React from 'react'
import {
    Avatar,
    Breadcrumbs,
    Typography,
    Box,
    Button,
    Link,
    Tooltip,
    Divider,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    TextField
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import * as config from './config/Footer.config'
import styles from '../styles/Footer.module.css'

function Footer() {
    // console.log(config.socialMediaList)
    return (
        <Box className={styles.footer}>

            <Divider className={styles.divider}/>

            <Box className={styles.container}>

            
            <Box className={styles.leftContainer}>
                <Box>
                    <Typography className={styles.title}>
                        {config.title}
                    </Typography>
                    <Typography className={styles.subtitle}>
                        {config.subtitle}
                    </Typography>
                </Box>

                <Box >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PersonIcon sx={{ mr: 1, my: 0.5 }}/>
                        <TextField id="input_name" label="Name" variant="outlined"
                            autoComplete='name'
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <EmailIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField id="input_email" label="Email" variant="outlined" 
                            autoComplete='email'
                        />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: 1 }}>
                        <MessageIcon sx={{ mr: 1, my: 2 }} />
                        <TextField id="input_message" label="Message" variant="outlined"
                            multiline={true} rows={8} sx={{ width: "223px" }}
                            InputProps={{ sx: { 
                                height: "223px",
                                alignItems: "flex-start"
                            }}}
                        />
                    </Box>
                </Box>
            </Box>

            <Box className={styles.rightContainer}>
                <Breadcrumbs 
                    className={styles.socialMediaLinks}
                    separator=""
                >
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

            </Box>
        </Box>
    )
}

export default Footer