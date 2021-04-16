import React, { Fragment, useEffect, useState } from 'react';
// import Paper from '@material-ui/core/Paper';
import { Button, Grid } from '@material-ui/core';
import useStyles from '../styles/Styles';
import TextInput from './login/TextInput';
import PasswordInput from './login/PasswordInput';
import Section from './login/Section';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login({setCheckLogin, setCheckLogOut, checklogin}) {

    //Declare constante from styles component
    const classes = useStyles();
    //Use state to change icon colors when focus

    setCheckLogOut(false);

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
        setSubmitted(false);

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

    //Function to check if ready
    const checkIfReady = () =>{
        if(userData.userName.trim() === localUser.userName && userData.email.trim() === localUser.email && userData.password.trim() === localUser.password){
            setCheckLogin(true);
        } else {
            setCheckLogin(false);
        }
    }

    function HandleSubmit (e) {
        e.preventDefault();
        setSubmitted(true);
    }
    
    /*===========================
    =====       ROUTER      =====   
    =============================*/

    let history = useHistory();

    useEffect(() => {
        if(checklogin){
            history.push('/home');
        } else {
            history.push('/login');
        }
    }, [checklogin])
    
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
            <Grid container spacing={3} className={classes.cover}>
                <Section />

                <Grid container item xs={12} md={6} justify="center">
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
                                className={classes.inputControl}
                                onClick={checkIfReady}>
                                <span className={classes.spanButton}>Iniciar sesión</span>
                            </Button>
                        </form> 
                    </aside>
                </Grid>
            </Grid>
        </>
    )
}
