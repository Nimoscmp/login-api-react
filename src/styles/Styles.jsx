import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    inputControl: {
        width: '80%',
        margin: theme.spacing(1)        
    },
    trans: {
        transition: 'all 0.3s ease'
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
        width: '90%'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    capitalize: {
        textTransform: 'capitalize'
    }
}));

export default useStyles;