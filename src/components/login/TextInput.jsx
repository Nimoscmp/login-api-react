import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { AccountCircleOutlined, EmailOutlined } from '@material-ui/icons';
import React from 'react'
import useStyles from '../../styles/Styles';

export default function TextInput({inputFocus, setInputFocus, text, handleChange, error}) {

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
            <FormControl className="inputControl" variant="outlined">
                <InputLabel htmlFor="user-input" className="capitalize">{text}</InputLabel>
                <OutlinedInput
                    id={text === 'usuario' ? 'user-input' : 'email-input'}
                    name={text === 'usuario' ? 'userName' : 'email'}
                    type="text"
                    labelWidth={text === 'usuario' ? 60 : 45}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        {text === 'usuario'?
                        <AccountCircleOutlined className={_userName? "trans iconsLight" : "trans icons"}/>
                        :
                        <EmailOutlined className={_email? "trans iconsLight" : "trans icons"}/>
                        }
                    </InputAdornment>
                    }
                />
                {error?
                <FormHelperText id="outlined-weight-helper-text" className="errorText">{'El ' + text + ' no es válido'}</FormHelperText>
                :
                null
                }
            </FormControl>
        </>
    )
}
