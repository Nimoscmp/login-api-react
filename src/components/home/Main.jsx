import { CircularProgress, useMediaQuery } from '@material-ui/core';
import { AddCircle, CheckCircleOutline, LocationCity, PhoneEnabledOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import useStyles from '../../styles/Styles';

export default function Main({dataUsers, imageUsers, imgDataUsers, setImgDataUsers, completeUsers, setCompleteUsers, friendList, setFriendList}) {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:805px)');

    const [showPreload, setShowPreload] = useState(true);

    const handleLoad = () => {
        setShowPreload(false);
    }

    setTimeout(() => {
        setShowPreload(false);
    }, 800);

    useEffect(() => {
        setImgDataUsers(
            imageUsers.filter(item => parseInt(item.id) < 1005 && parseInt(item.id) !== 1003)
        )
        // eslint-disable-next-line
    }, [imageUsers])

    useEffect(() => {
        const dataFunc = () => {
            setCompleteUsers(
                dataUsers.map((item, index) => ({
                    name: item.username,
                    fullname: item.name,
                    id: item.id,
                    company: item.company.name,
                    website: item.website,
                    phone: item.phone,
                    city: item.address.city,
                    phrase: item.company.catchPhrase,
                    imgUrl: imgDataUsers[index].download_url
                })) 
            )
        }

        dataFunc();
        // eslint-disable-next-line
    }, [imgDataUsers])

    const AddFriend = identifier => {
        const newFriend = completeUsers.filter(item => item.id === identifier);
        setFriendList([...friendList, newFriend[0]])
    }

    const checkIfFriend = identifier => {
        if(friendList.length > 0){
            const friendAlready = friendList.filter(friend => friend.id === identifier);

            if(friendAlready.length === 0){
                return false;
            }
            else {
                return true;
            }

        } else {
            return false;
        }        
    }

    return (
        <> 
            <section 
                className="mainLoad2"
                style={{
                    display: showPreload ? 'flex' : 'none'
                }}>
                <div className="divLoad">
                    <span className="h3">Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </section>

            <main className="main" onLoad={handleLoad}>
                {completeUsers.map(item => (
                    <div key={item.id} className={matches ? "card" : "cardMini"}>
                        <div className="justBetween">
                            <div className="justAround">
                                <img src={item.imgUrl} alt="" className="imgUrl"/>
                                <span className="margin1"><strong className="white">{item.name}</strong></span>
                            </div>
                            {
                            checkIfFriend(item.id)
                            ?
                            <CheckCircleOutline
                                fontSize="large"
                                className="iconCheck"
                            />
                            :
                            <AddCircle 
                                fontSize="large" 
                                className="iconAdd"
                                onClick={() => AddFriend(item.id)}/>
                            }
                        </div>
                        <div>
                            <p className="span1"><small className="margin1"><strong>{item.city}</strong></small><LocationCity color="secondary"/></p>
                            <p className="span2">
                                {item.phone}
                                <PhoneEnabledOutlined style={{marginLeft: '8px'}}/></p>
                            <p className="span3">{item.phrase}</p>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

