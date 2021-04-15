import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, CircularProgress, FormControl, FormGroup, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import { AccountCircleOutlined, EmailOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import useStyles from '../styles/Styles';
import axios from 'axios';

export default function Login() {
    //Declare constante from styles component
    const classes = useStyles();
    //Use state to change icon colors when focus
    const [inputFocus, setInputFocus] = useState({
        userName: false,
        email: false,
        password: false
    });

    const [showpassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        if(showpassword){
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    }

    const baseUrl = 'https://www.datos.gov.co/resource/gt2j-8ykr.json';

    const getApi = async() => {
        try {
            const response = await axios.get(baseUrl);
            const dataJson = await response.data;
            const statusCode = await response.status;
            // setPhrases(dataJson[0]);
            console.log(dataJson);
            console.log(statusCode);
        } catch (error){
            console.log(error);
        }
      }

    //   <CircularProgress />

    return (
        <>
            <h1>Hola</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <section>
                        <button onClick={getApi}>Pulsa aquí</button>
                    </section>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto culpa eos. Expedita, illum consequuntur atque sequi animi totam nostrum. Consequatur facere vitae soluta voluptatum dolore fugiat, deserunt placeat repellendus.</p>
                    </section>
                </Grid>

                <Grid container item xs={12} sm={6} justify="center">
                    <aside className={classes.asideContainer}>
                        <form className={classes.formContainer} noValidate autoComplete="off">   
                            <FormControl className={classes.inputControl} variant="outlined">
                                <InputLabel htmlFor="user-input">Usuario</InputLabel>
                                <OutlinedInput
                                    id="user-input"
                                    type="text"
                                    labelWidth={60}
                                    onFocus={() => setInputFocus({...inputFocus, userName: true})}
                                    onBlur={() => setInputFocus({...inputFocus, userName: false})}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <AccountCircleOutlined className={[classes.trans , inputFocus.userName? classes.iconsLight : classes.icons]}/>
                                    </InputAdornment>
                                    }
                                />
                                <FormHelperText id="outlined-weight-helper-text" className={classes.errorText}>El usuario no es válido</FormHelperText>
                            </FormControl>

                            <FormControl className={classes.inputControl} variant="outlined">
                                <InputLabel htmlFor="email-input">Email</InputLabel>
                                <OutlinedInput
                                    id="email-input"
                                    type="text"
                                    labelWidth={45}
                                    onFocus={() => setInputFocus({...inputFocus, email: true})}
                                    onBlur={() => setInputFocus({...inputFocus, email: false})}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <EmailOutlined className={[classes.trans , inputFocus.email? classes.iconsLight : classes.icons]}/>
                                    </InputAdornment>
                                    }
                                />
                                <FormHelperText id="outlined-weight-helper-text" className={classes.errorText}>El email no es válido</FormHelperText>
                            </FormControl>

                            <FormControl className={classes.inputControl} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showpassword ? 'text' : 'password'}
                                    labelWidth={90}
                                    onFocus={() => setInputFocus({...inputFocus, password: true})}
                                    onBlur={() => setInputFocus({...inputFocus, password: false})}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        edge="end"
                                        >
                                        {showpassword?
                                            <VisibilityOff className={[classes.trans , inputFocus.password? classes.iconsLight : classes.icons]}/>
                                            :
                                            <Visibility className={[classes.trans , inputFocus.password? classes.iconsLight : classes.icons]}/>
                                        }
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                <FormHelperText id="outlined-weight-helper-text" className={classes.errorText}>La contraseña no es válida</FormHelperText>
                            </FormControl>

                            <Button 
                                variant="contained" 
                                color="primary" 
                                type="submit"
                                disabled={true}
                                className={classes.inputControl}>
                                <span className={classes.spanButton}>Iniciar sesión</span>
                            </Button>
                        </form> 
                    </aside>
                </Grid>
            </Grid>
        </>
    )
}
