import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from '../../styles/Styles';

export default function Section() {
    //Declare constante from styles component
    const classes = useStyles();

    return (
        <Grid container item xs={12} md={6} className="bgLight" justify="center">
            <section className="sectionContainer">
                <div className="formContainer">
                    <h2 className="fw400">¿Listo para <strong className="iconsLight">conectarte</strong> con tus amigos?</h2>
                    <p>Esta plataforma te permite unirte con cientos de personas alrededor del mundo</p>
                </div>
            </section>
        </Grid>
    )
}
