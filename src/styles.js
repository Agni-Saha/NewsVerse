import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        color: 'black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '120px',
        margin: "2rem 0 1rem 0",
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(21, 101, 192)',
    },
    image: {
        marginLeft: 20,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '3%',
        borderRadius: 10,
        color: 'white',
        margin: '10% 12px',
        textAlign: 'center',
        height: '25vmin',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
            width: '100%',
            height: 'initial',
            '&:nth-of-type(1)': {
                marginBottom: '12px',
            },
        },
    },
    card1: {
        backgroundColor: '#0077b6',
    },
    card2: {
        backgroundColor: '#023e8a',
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    logoContainer: {
        padding: '1% 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    alanLogo: {
        height: '15vmin',
        padding: '0 5%',
        margin: '3% 0',
        [theme.breakpoints.down('sm')]: {
            height: '30vmin',
        },
    },
}));
