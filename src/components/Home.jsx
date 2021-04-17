import React, { useEffect, useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router';
import useStyles from '../styles/Styles';
import Header from './home/Header';
import Main from './home/Main';
import SeeFriends from './home/SeeFriends';

export default function Home({setCheckLogin, setCheckLogOut, checklogin, checkLogOut, loggedIn, localUser}) {

    //Declare states
    // const [showPreload, setShowPreload] = useState(true);
    const [dataUsers, setDataUsers] = useState([]);
    const [imageUsers, setImageUsers] = useState([]);
    const [imgDataUsers, setImgDataUsers] = useState([]);
    const [completeUsers, setCompleteUsers] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const [toggleFriends, setToggleFriends] = useState(true);

    //Styles
    const classes = useStyles();
    
    //Routing import 
    let history = useHistory();
    
    //Effect to check log out 
    useEffect(() => {
        if (localStorage.getItem('usuario') !== 'Usuario') {    
            if (checkLogOut || !checklogin) {
                history.push('/');
            }
        }
        // eslint-disable-next-line 
    }, [checkLogOut, checklogin])        
    
    useEffect(() => {
        if(checklogin){
            localStorage.setItem('usuario', localUser.userName);
        }
        // eslint-disable-next-line 
    }, []) 

    useEffect(() => {
        setCheckLogin(false);
    }, [])

    const handleLogOut = () => {
        setCheckLogOut(true);
        localStorage.clear();
    }

    // >>> Get api
    
    
    const getApi = async() => {
        const baseUrl = 'https://jsonplaceholder.typicode.com/users';
        try {
            const response = await fetch(baseUrl);
            const dataJson = await response.json();
            setDataUsers(dataJson);
        } catch (error){
            console.log(error);
        }
    }

    const getApiImages = async() => {
        const baseUrl = 'https://picsum.photos/v2/list';
        try {
            const response = await fetch(baseUrl);
            const dataJson = await response.json();
            setImageUsers(dataJson);
        } catch (error){
            console.log(error);
        }
      }

    useEffect(() => {
        getApi();
        getApiImages();
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            {/* {showPreload?           
            <main className={classes.mainLoad2}>
                <div className={classes.divLoad}>
                    <span className={classes.h3}>Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </main>
            :
            null
            } */}

            <Header 
                handleLogOut={handleLogOut}
                setToggleFriends={setToggleFriends}
            />
            {toggleFriends?
            <Main 
                dataUsers={dataUsers}
                imageUsers={imageUsers}
                imgDataUsers={imgDataUsers}
                setImgDataUsers={setImgDataUsers}
                completeUsers={completeUsers}
                setCompleteUsers={setCompleteUsers}
            />
            :
            <SeeFriends
                
            />
            }

        </>
    )
}
