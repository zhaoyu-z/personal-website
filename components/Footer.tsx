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
import emailjs from 'emailjs-com';
import * as config from './config/Footer.config'
import styles from '../styles/Footer.module.css'
import { isValidEmail, HandleComponentScroll, ResizableTextArea } from './shared/utilities';
import animations from '../styles/Animations.module.css'

function Footer() {

    const [name, setName] = React.useState<string>('');

    const handleNameChange = (e: any) => {
        setName(e.target.value);
    }

    const [emailInputBox, setEmailInputBox] = React.useState<string>('');
    const [isLegalEmail, setIsLegalEmail] = React.useState<boolean>(true);

    const handleEmailChange = (event: any) => {
        const inputValue = event.target.value;
        setEmailInputBox(inputValue);
        setIsLegalEmail(isValidEmail(inputValue));
    };

    const [isTopVisible, setIsTopVisible] = React.useState<boolean>(false);
    const [isBottomVisible, setIsBottomVisible] = React.useState<boolean>(false);

    const scrollControlList = [
		{
			componentId: "TopContainer",
			setter: setIsTopVisible
		},
        // {
		// 	componentId: "BottomContainer",
		// 	setter: setIsBottomVisible
		// },
	]

	scrollControlList.map(({componentId, setter}) => {
		HandleComponentScroll(componentId, setter);
	})

    const [message, setMessage] = React.useState<string>('');
    const [messageError, setMessageError] = React.useState<boolean>(false);
    const [messageHelperText, setMessageHelperText] = React.useState<string>("");

    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    React.useEffect(() => {
        if (message && message.length >= config.maxLength) {
            setMessageHelperText(config.messageExceedMaxLength);
            setMessageError(true);
        } else {
            setMessageError(false);
            setMessageHelperText("");
        }
    }, [message])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const emailData = {
            contact_number: 1,
            name: name,
            email: emailInputBox,
            message: message,
        };
        
        try {
            await emailjs.send(
                'service_zhangzy517',
                'contact_iamzzy.com',
                emailData,
                'ICE3dACU9d2mH1-S9'
            );
        
            alert('Email sent successfully!');
            setName('');
            setEmailInputBox('');
            setMessage('');
        } catch (error) {
            console.error(error);
            alert('An error occurred while sending the email.');
        }
    };

    return (
        <Box className={styles.footer}>

            <Divider className={styles.topDivider}/>

            <Box id="TopContainer" 
            className={`${styles.container} ${isTopVisible ? animations.fadein_b2t : ""}`}>
            
            <Box className={styles.leftContainer}>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography className={styles.title} textAlign='center' sx={{ my: 1 }}>
                        {config.title}
                    </Typography>
                    <Typography className={styles.subtitle} textAlign='center' sx={{ my: 1 }}>
                        {config.subtitle}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", mb: 1 }}>
                        <PersonIcon sx={{ mr: 1, my: 0.5 }}/>
                        <TextField id="input_name" label={config.nameLabel} variant="outlined"
                            autoComplete='name'
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center", mt: 1 }}>
                        <EmailIcon sx={{ mr: 1, my: 2 }} />
                        <TextField id="input_email" label={config.emailLabel} variant="outlined" 
                            autoComplete='email'
                            value={emailInputBox}
                            onChange={handleEmailChange}
                            error={!isLegalEmail}
                            helperText={!isLegalEmail ? 'Invalid email address' : ''}
                        />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center", mt: 1 }}>
                        <MessageIcon sx={{ mr: 1, my: 2 }} />
                        <TextField id="input_message" label={config.messageLabel} variant="outlined"
                            multiline={true} value={message}
                            InputProps={{ sx: {
                                alignItems: "flex-start",
                            }}}
                            inputProps={{ sx: {
                                resize: "both",
                                minWidth: "195px",
                                maxWidth: "300px",
                                minHeight: "184px",
                                maxHeight: "400px"
                            }, maxLength: config.maxLength
                            }}
                            onChange={handleMessageChange}
                            error={messageError}
                            helperText={messageHelperText}
                        />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant='outlined'
                            sx={{ mt: 1 }} size="large"
                            onClick={handleSubmit}
                        >
                            {config.buttonLabel}
                        </Button>
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

            <Divider className={styles.bottomDivider}/>
        </Box>
    )
}

export default Footer