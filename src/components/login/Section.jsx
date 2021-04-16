import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from '../../styles/Styles';

export default function Section() {
    //Declare constante from styles component
    const classes = useStyles();

    return (
        <Grid container item xs={12} md={6} className={classes.bgLight} justify="center">
            <section className={classes.sectionContainer}>
                <div className={classes.formContainer}>
                    <h2 className={classes.fw400}>¿Listo para <strong className={classes.iconsLight}>conectarte</strong> con tus amigos?</h2>
                    <p>Esta plataforma te permite unirte con cientos de personas alrededor del mundo</p>
                </div>
            </section>
        </Grid>
    )
}
