import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { AccountCircleOutlined, EmailOutlined } from '@material-ui/icons';
import React from 'react'
import useStyles from '../../styles/Styles';

export default function TextInput({inputFocus, setInputFocus, text}) {

    const classes = useStyles();

    const {_userName, _email} = inputFocus;

    const handleFocus = () => {
        if(text === 'usuario'){
            setInputFocus({...inputFocus, _userName : true})
        } else {
            setInputFocus({...inputFocus, _email : true})
        }
    }

    const handleBlur = () => {
        if(text === 'usuario'){
            setInputFocus({...inputFocus, _userName : false})
        } else {
            setInputFocus({...inputFocus, _email : false})
        }
    }

    return (
        <>
            <FormControl className={classes.inputControl} variant="outlined">
                <InputLabel htmlFor="user-input" className={classes.capitalize}>{text}</InputLabel>
                <OutlinedInput
                    id={text === 'usuario' ? 'user-input' : 'email-input'}
                    type="text"
                    labelWidth={text === 'usuario' ? 60 : 45}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    endAdornment={
                    <InputAdornment position="end">
                        {text === 'usuario'?
                        <AccountCircleOutlined className={[classes.trans , _userName ? classes.iconsLight : classes.icons]}/>
                        :
                        <EmailOutlined className={[classes.trans , _email ? classes.iconsLight : classes.icons]}/>
                        }
                    </InputAdornment>
                    }
                />
                <FormHelperText id="outlined-weight-helper-text" className={classes.errorText}>{'El ' + text + ' no es válido'}</FormHelperText>
            </FormControl>
        </>
    )
}
