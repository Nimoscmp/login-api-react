import { Button, useMediaQuery } from '@material-ui/core'
import { ExitToApp, PeopleOutlined, PersonAddOutlined } from '@material-ui/icons'
import React from 'react'
import useStyles from '../../styles/Styles';

export default function Header({handleLogOut}) {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.h3}>Red</div>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.li}><PersonAddOutlined fontSize="large"/></li>
                        <li className={classes.li}><PeopleOutlined fontSize="large"/></li>
                        <li className={classes.li}>
                            {matches?
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                type="submit"
                                onClick={handleLogOut}>
                                <span className={classes.spanButton}>Cerrar sesión</span>
                            </Button>
                            :
                            <ExitToApp
                                onClick={handleLogOut}
                                fontSize="large"
                                color="secondary"
                            />
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
