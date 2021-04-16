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
    cover : {
        width: '100%',
        height: '100vh'
    }
}));

export default useStyles;