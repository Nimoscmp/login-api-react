import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import useStyles from '../styles/Styles';

export default function Loading() {

    const classes = useStyles();

    // let history = useHistory();

    // useEffect(() => {
    //     history.push('/login');
    // }, [])

    return (
        <>
            <main className="mainLoad">
                <div className="divLoad">
                    <span className="h3">Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </main>
        </>
    )
}
