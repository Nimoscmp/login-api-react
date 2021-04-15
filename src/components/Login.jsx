import React, { Fragment, useEffect, useState } from 'react';
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

    /*===========================
    =====  VALIDATE INPUTS  =====   
    =============================*/

    const localUser = {
        userName: "Usuario",
        email: "usuario@usuario.com",
        password: "123456"
    }

    const [buttondisabled, setButtonDisabled] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [erroruser, setErrorUser] = useState(false);
    const [erroremail, setErrorEmail] = useState(false);
    const [errorpassword, setErrorPassword] = useState(false);

    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        const compareStrings = () => {
            if (userData.userName.trim() === localUser.userName) {
                setErrorUser(false);
            } 
            if (userData.email.trim() === localUser.email) {
                setErrorEmail(false);
            }
            if (userData.password.trim() === localUser.password) {
                setErrorPassword(false);
            }
        }

        compareStrings();

        if(userData.userName !== '' && userData.email !== '' && userData.password !== ''){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
        // eslint-disable-next-line
    }, [userData])

    useEffect(() => {
        const compareStrings = () => {
            if ((userData.userName.trim() !== localUser.userName) && submitted) {
                setErrorUser(true);
            } 
            if ((userData.email.trim() !== localUser.email) && submitted) {
                setErrorEmail(true);
            }
            if ((userData.password.trim() !== localUser.password) && submitted) {
                setErrorPassword(true);
            }
        }

        compareStrings();
        // eslint-disable-next-line
    }, [submitted])

    function HandleSubmit (e) {
        e.preventDefault();
        setSubmitted(true);
        
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
                        <form 
                            className={classes.formContainer} 
                            noValidate 
                            autoComplete="off"
                            onSubmit={HandleSubmit}>

                            <TextInput 
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                                text={strings[0]}
                                handleChange={handleChange}
                                error={erroruser}
                            />
                            <TextInput 
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                                text={strings[1]}
                                handleChange={handleChange}
                                error={erroremail}
                            />
                            <PasswordInput
                                inputFocus={inputFocus}
                                setInputFocus={setInputFocus}
                                handleChange={handleChange}
                                error={errorpassword}
                            />

                            <Button 
                                variant="contained" 
                                color="primary" 
                                type="submit"
                                disabled={buttondisabled}
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
