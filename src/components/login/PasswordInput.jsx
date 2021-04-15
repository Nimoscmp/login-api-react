import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react';
import useStyles from '../../styles/Styles';

export default function PasswordInput({inputFocus, setInputFocus, handleChange, error}) {

    const classes = useStyles();

    const [showpassword, setShowPassword] = useState(false);

    //Styles
    const handleShowPassword = () => {
        if(showpassword){
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    return (
        <>
            <FormControl className={classes.inputControl} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <OutlinedInput
                    id="input-password"
                    name="password"
                    type={showpassword ? 'text' : 'password'}
                    labelWidth={90}
                    onFocus={() => setInputFocus({...inputFocus, _password: true})}
                    onBlur={() => setInputFocus({...inputFocus, _password: false})}
                    onChange={handleChange}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                        >
                        {showpassword?
                            <VisibilityOff className={[classes.trans , inputFocus._password? classes.iconsLight : classes.icons]}/>
                            :
                            <Visibility className={[classes.trans , inputFocus._password? classes.iconsLight : classes.icons]}/>
                        }
                        </IconButton>
                    </InputAdornment>
                    }
                />
                {error?
                <FormHelperText id="outlined-weight-helper-text" className={classes.errorText}>La contraseña no es válida</FormHelperText>
                :
                null
                }
            </FormControl>
        </>
    )
}
