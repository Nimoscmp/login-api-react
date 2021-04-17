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
                <div className={classes.logo}>Red</div>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.margin1}><PersonAddOutlined fontSize="large" className={classes.iconsHeader}/></li>
                        <li className={classes.margin1}><PeopleOutlined fontSize="large" className={classes.iconsHeader}/></li>
                        <li className={classes.margin1}>
                            {matches?
                            <Button 
                                variant="contained"
                                size="small" 
                                className={classes.gray} 
                                type="submit"
                                onClick={handleLogOut}>
                                <span className={classes.spanButton}>Cerrar sesión</span>
                            </Button>
                            :
                            <ExitToApp
                                onClick={handleLogOut}
                                fontSize="large"
                                className={classes.gray}
                            />
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
