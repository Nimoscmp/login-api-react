import React, { useEffect, useState } from 'react';
// import Paper from '@material-ui/core/Paper';
import { Button, Grid } from '@material-ui/core';
import useStyles from '../styles/Styles';
import TextInput from './login/TextInput';
import PasswordInput from './login/PasswordInput';
import Section from './login/Section';
// import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login({setCheckLogin, setCheckLogOut, checklogin, localUser}) {

    //Declare constant from styles component
    const classes = useStyles();
    //Use state to change icon colors when focus

    useEffect(() => {
        setCheckLogOut(false);
        // eslint-disable-next-line
    }, [])

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
    const checkIfReady = (event) =>{

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
        if(checklogin || localStorage.getItem('usuario') === 'Usuario'){
            history.push('/home');
        }
       // eslint-disable-next-line  
    }, [checklogin])
    
    return (
        <>
            <Grid container spacing={3} className="cover">
                <Section />

                <Grid container item xs={12} md={6} justify="center">
                    <aside className="asideContainer">
                        <form 
                            className="formContainer" 
                            noValidate 
                            autoComplete="on"
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
                                className="inputControl"
                                onClick={checkIfReady}>
                                <span className="spanButton">Iniciar sesión</span>
                            </Button>
                        </form> 
                    </aside>
                </Grid>
            </Grid>
        </>
    )
}
