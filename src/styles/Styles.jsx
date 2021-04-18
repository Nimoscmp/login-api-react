import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    inputControl: {
        width: '80%',
        margin: theme.spacing(1)        
    },
    trans: {
        transition: 'all 0.3s ease'
    },
    bgLight: {
        backgroundColor: '#d1e2ff',
        fontFamily: 'Montserrat, sansSerif'
    },
    icons: {
        color: '#94b6f2'
    },
    iconsLight: {
        color: '#002884'
    },
    spinner: {
        color: '#ffffff'
    },
    spanButton: {
        textTransform: 'none',
        fontSize: '1.2rem'
    },
    errorText: {
        color: '#c77430'
    },
    asideContainer: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionContainer: {
        width: '80%',
        margin: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    fw300: {
        fontWeight: '300'
    },
    fw400: {
        fontWeight: '400'
    },
    h3 : {
        fontSize: '1.5rem',
        color: '#f50057',
        margin: '5px'
    },
    divLoad: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainLoad: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '96vh'
    },
    mainLoad2: {
        position: 'absolute',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff'
    },
    cover : {
        width: '100%',
        height: '100vh',
        margin: '0'
    },
    logo: {
        fontFamily: 'Shadows Into Light',
        fontSize: '2.2rem',
        color: '#f50057',
        margin: '5px'
    },
    header : {
        position: 'fixed',
        top: '0',
        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '2px 2px 15px #d6d6d6',
        backgroundColor: 'white'
    },
    ul : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        listStyle: 'none'
    },
    margin1: {
        margin: theme.spacing(1)
    },
    main: {
        width: '100%',
        marginTop: '5.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    card: {
        boxShadow: '2px 2px 2px #cfcfcf',
        margin: '1rem',
        width:  '42%',
        borderRadius: '10px',
        padding: '0',
        fontFamily: 'Montserrat, sans-serif',
        '&:hover': {
            boxShadow: '10px 10px 20px #cfcfcf',
            transform: 'scale(1.02)',
            transformOrigin: '50% 50%'
        }
    },
    cardMini: {
        boxShadow: '2px 2px 2px #cfcfcf',
        margin: '1rem',
        width:  '90%',
        borderRadius: '10px',
        padding: '0',
        fontFamily: 'Montserrat, sans-serif',
        '&:hover': {
            boxShadow: '5px 5px 20px #cfcfcf',
            transform: 'scale(1.01)',
            transformOrigin: '50% 50%'
        }
    },
    span1: {
        margin: '5px',
        padding: '5px',
        color: '#f50057',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    span2: {
        margin: '5px',
        padding: '5px',
        color: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: '0.8rem'
    },
    span3: {
        margin: '10px 15px',
        alignItems: 'center',
        textAlign: 'end'
    },
    imgUrl: {
        width: '90px',
        maxHeight: '60px',
        borderRadius: '5px',
        margin: theme.spacing(1),
        boxShadow: '1px 1px 1px gray'
    },
    justBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#78626c',
        borderRadius: '10px 10px 0 0'
    },
    justAround: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconAdd : {
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        color: '#e6d3dc',
        margin: theme.spacing(1),
        '&:hover': {
            color: 'white'
        }
    },
    white: {
        color: 'white'
    },
    gray: {
        color: '#3b3b3b'
    },
    lightgray: {
        color: 'lightgray',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: 'gray'
        }
    },
    iconsHeader: {
        color: 'black',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
            color: '#f50057'
        }
    }
}));

export default useStyles;
