import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router';
import useStyles from '../styles/Styles';

export default function Home({setCheckLogin, setCheckLogOut, checkLogOut}) {

    const classes = useStyles();

    setCheckLogin(false);

    const handleLogOut = () => {
        setCheckLogOut(true);
    }

    useEffect(() => {
        if (checkLogOut) {
            history.push('/login');
        }
    }, [checkLogOut])


    // >>> Routing
    let history = useHistory();

    return (
        <>
            <Button 
                variant="contained" 
                color="secondary" 
                type="submit"
                className={classes.inputControl}
                onClick={handleLogOut}>
                <span className={classes.spanButton}>Cerrar sesión</span>
            </Button>
        </>
    )
}
