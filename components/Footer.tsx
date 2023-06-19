import * as React from 'react';
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
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import * as config from './config/Footer.config';
import styles from '../styles/Footer.module.css';
import { isValidEmail, HandleComponentScroll, ResizableTextArea } from './shared/utilities';
import animations from '../styles/Animations.module.css';

function Footer() {

    const [name, setName] = React.useState<string>('');
    const [nameHelperText, setNameHelperText] = React.useState<string>("");

    const handleNameChange = (e: any) => {
        setName(e.target.value);
        setNameHelperText("");
    };

    const [emailInputBox, setEmailInputBox] = React.useState<string>('');
    const [isLegalEmail, setIsLegalEmail] = React.useState<boolean>(true);
    const [emailHelperText, setEmailHelperText] = React.useState<string>("");

    const handleEmailChange = (event: any) => {
        const inputValue = event.target.value;
        setEmailInputBox(inputValue);
        setIsLegalEmail(isValidEmail(inputValue));
        if (isValidEmail(emailInputBox)) {
            setEmailHelperText("");
        }
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
	];

	scrollControlList.map(({componentId, setter}) => {
		HandleComponentScroll(componentId, setter);
	});

    const [message, setMessage] = React.useState<string>('');
    const [messageError, setMessageError] = React.useState<boolean>(false);
    const [messageHelperText, setMessageHelperText] = React.useState<string>("");

    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };

    React.useEffect(() => {
        if (message && message.length >= config.maxLength) {
            setMessageHelperText(config.errorMessages.messageExceedMaxLength);
            setMessageError(true);
        } else {
            setMessageError(false);
            setMessageHelperText("");
        }
    }, [message]);

    const [sending, setSending] = React.useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        if (!name || name.trim() === "" || name.length === 0) {
            setNameHelperText(config.errorMessages.emptyName);
            return;
        }

        if (!emailInputBox || emailInputBox.trim() === "" || emailInputBox.length === 0) {
            setEmailHelperText(config.errorMessages.emptyEmail);
            return;
        }

        if (!message || message.trim() === "" || message.length === 0) {
            setMessageHelperText(config.errorMessages.emptyMessage);
            return;
        }


        if (!isValidEmail(emailInputBox)) {
            setEmailHelperText(config.errorMessages.invalidEmail);
            return;
        }

        setSending(true);
        e.preventDefault();
    
        const emailData = {
            name: name ? name : config.infoMessages.emailField,
            email: emailInputBox ? emailInputBox : config.infoMessages.emailField,
            message: message ? message : config.infoMessages.emailField,
        };
        
        try {
            await emailjs.send(
                config.emailServer.service_id,
                config.emailServer.template_id,
                emailData,
                config.emailServer.public_key
            );
        
            setSending(false);
            setName('');
            setEmailInputBox('');
            setMessage('');
            setMessageHelperText(config.successMessages.emailSent);
        } catch (error) {
            console.error(error);
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", mt: 2 }}>
                        <PersonIcon sx={{ mr: 1, my: 2 }}/>
                        <TextField id="input_name" label={config.nameLabel} variant="outlined"
                            autoComplete='name'
                            value={name}
                            onChange={handleNameChange}
                            helperText={nameHelperText}
                            sx={{  "& .MuiFormHelperText-root": {
                                color: `${config.helperTextColor} !important`
                            }}}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center", mt: 2 }}>
                        <EmailIcon sx={{ mr: 1, my: 2 }} />
                        <TextField id="input_email" label={config.emailLabel} variant="outlined" 
                            autoComplete='email'
                            value={emailInputBox}
                            onChange={handleEmailChange}
                            error={!isLegalEmail}
                            helperText={!isLegalEmail ? config.errorMessages.invalidEmail : emailHelperText}
                            sx={{  "& .MuiFormHelperText-root": {
                                color: `${config.helperTextColor}`
                            }}}
                        />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center", mt: 2 }}>
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
                            sx={{  "& .MuiFormHelperText-root": {
                                color: `${config.helperTextColor} !important`
                            }}}
                        />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <LoadingButton variant='outlined'
                            sx={{ mt: 1 }} size="large"
                            onClick={handleSubmit}
                            loading={sending}
                            endIcon={<SendIcon />}
                            loadingPosition="end"
                        >
                            {config.buttonLabel}
                        </LoadingButton>
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
                            minWidth: '0px',
                        }}
                        className={styles.socialMediaLink}
                        />
                    </Tooltip>
                ))}
                </Breadcrumbs >
            </Box>

            </Box>

            <Divider className={styles.bottomDivider}/>
        </Box>
    );
};

export default Footer;