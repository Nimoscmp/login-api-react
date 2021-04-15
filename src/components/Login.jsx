import React, { Fragment, useState } from 'react';
// import Paper from '@material-ui/core/Paper';
import { Button, Grid } from '@material-ui/core';
import useStyles from '../styles/Styles';
import TextInput from './login/TextInput';
import PasswordInput from './login/PasswordInput';
import axios from 'axios';

export default function Login() {
    //Declare constante from styles component
    const classes = useStyles();
    //Use state to change icon colors when focus
    const [inputFocus, setInputFocus] = useState({
        _userName: false,
        _email: false,
        _password: false
    });
    //Strings
    const strings = ['usuario', 'email'];

    /*
    ===== Validate inputs =====   
    */

    const localUser = {
        userName: "Usuario",
        email: "usuario@usuario.com",
        password: "123456"
    }

    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        userName: false,
        email: false,
        password: false
    })

    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
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

                            <TextInput 
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                                text={strings[0]}
                            />
                            <TextInput 
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                                text={strings[1]}
                            />
                            <PasswordInput
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                            />

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
