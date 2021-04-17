import { makeStyles } from '@material-ui/core/styles';

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
        position: 'fixed',
        top: '0',
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
        fontFamily: 'Monda, sansSerif',
        fontSize: '1.2rem',
        color: '#000000'
    },
    header : {
        position: 'fixed',
        top: '0',
        display: 'flex',
        width: '100%',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-around',
        boxShadow: '10px 10px 10px lightgray',
        backgroundColor: 'white'
    },
    ul : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        listStyle: 'none'
    },
    li: {
        margin: theme.spacing(1)
    },
    main: {
        marginTop: '5.5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    card: {
        boxShadow: '3px 3px 3px lightgray',
        margin: '1rem',
        width: '80%',
        borderRadius: '10px',
        padding: '10px'
    },
    span1: {
        margin: '5px',
        padding: '5px'
    },
    span2: {
        margin: '5px',
        padding: '5px',
        color: '#f50057'
    }
}));

export default useStyles;