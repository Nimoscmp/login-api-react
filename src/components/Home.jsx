import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
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
    const [toggleFriends, setToggleFriends] = useState(true);
    const [addedFriend, setAddedFriend] = useState([]);

    //Initialize friends
    let friendsInit = JSON.parse(localStorage.getItem('friendsList'));
    if(!friendsInit) {
        friendsInit = [];
    }
    
    const [friendList, setFriendList] = useState(friendsInit);

    //Save in local storage 
    useEffect(() => {
        let friendsInit = JSON.parse(localStorage.getItem('friendsList'));

        if (friendsInit) {
            localStorage.setItem('friendsList', JSON.stringify(friendList));
        } else {
            localStorage.setItem('friendsList', JSON.stringify([]));
        }
        
    }, [friendList])

    //Styles
    
    
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
        // eslint-disable-next-line
    }, [])

    const handleLogOut = () => {
        setCheckLogOut(true);
        localStorage.removeItem('usuario');
    }

    // >>> Get APIS <<<
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
                friendList={friendList}
                setFriendList={setFriendList}
            />
            :
            <SeeFriends
                friendList={friendList}
                setFriendList={setFriendList}
            />
            }
        </>
    )
}
