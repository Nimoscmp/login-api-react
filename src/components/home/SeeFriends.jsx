import { CircularProgress } from '@material-ui/core';
import { HighlightOff, LocationCity, PhoneEnabledOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import useStyles from '../../styles/Styles';

export default function SeeFriends({friendList, setFriendList}) {

    const classes = useStyles();

    const [showPreload2, setShowPreload2] = useState(true);

    const handleLoad2 = () => {
        setShowPreload2(false);
    }

    setTimeout(() => {
        setShowPreload2(false);
    }, 500);

    const deleteFriend = (identifier) => {
        setFriendList(friendList.filter(item => item.id !== identifier))
    }

    return (
        <>
            <section 
                className={classes.mainLoad2}
                style={{
                    display: showPreload2 ? 'flex' : 'none'
                }}>
                <div className={classes.divLoad}>
                    <span className={classes.h3}>Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </section>
            {friendList.length === 0 ?
            <section className={classes.main}>
                <p style={{fontSize: '1.5rem'}} >¡Aún no has agregado amigos! Amplia tu red de contactos</p>
            </section>
            :
            <main className={classes.main} onLoad={handleLoad2}>
                {friendList.map(item => (
                    <div key={item.id} className={classes.cardMini}>
                        <div className={classes.justBetween}>
                            <div className={classes.justAround}>
                                <img src={item.imgUrl} alt="" className={classes.imgUrl}/>
                                <span className={classes.margin1}><strong className={classes.white}>{item.name}</strong></span>
                            </div>
                            <HighlightOff
                                color="secondary" 
                                fontSize="large" 
                                className={classes.iconAdd}
                                onClick={() => deleteFriend(item.id)}/>
                        </div>
                        <div>
                            <p className={classes.span1}><small className={classes.margin1}><strong>{item.city}</strong></small><LocationCity color="secondary"/></p>
                            <p className={classes.span2}>
                                {item.phone}
                                <PhoneEnabledOutlined style={{marginLeft: '8px'}}/></p>
                            <p className={classes.span3}>{item.phrase}</p>
                        </div>
                    </div>
                ))}
            </main>
            }
        </>
    )
}
