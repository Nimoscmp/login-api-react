import { Button, useMediaQuery } from '@material-ui/core'
import { ExitToApp, PeopleOutlined, PersonAddOutlined } from '@material-ui/icons'
import React from 'react'
import useStyles from '../../styles/Styles';

export default function Header({handleLogOut, setToggleFriends}) {

    const classes = useStyles();

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <header className="header">
                <div className="logo">Red</div>
                <nav>
                    <ul className="ul">
                        <li className="margin1">
                            <PersonAddOutlined 
                                fontSize="large" 
                                className="iconsHeader"
                                onClick={() => setToggleFriends(true)}/>
                        </li>
                        <li className="margin1">
                            <PeopleOutlined 
                                fontSize="large" 
                                className="iconsHeader"
                                onClick={() => setToggleFriends(false)}/>
                        </li>
                        <li className="margin1">
                            {matches?
                            <Button 
                                variant="contained"
                                size="small" 
                                className="gray" 
                                type="submit"
                                onClick={handleLogOut}>
                                <span className="spanButton">Cerrar sesión</span>
                            </Button>
                            :
                            <ExitToApp
                                onClick={handleLogOut}
                                fontSize="large"
                                className="lightgray"
                            />
                            }
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
