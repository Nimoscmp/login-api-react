import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from '../../styles/Styles';

export default function SeeFriends({friendList, setFriendList}) {

    const classes = useStyles();

    const [showPreload2, setShowPreload2] = useState(true);

    const handleLoad2 = () => {
        setShowPreload2(false);
    }

    return (
        <>
            {/* <section 
                className={classes.mainLoad2}
                style={{
                    display: showPreload2 ? 'flex' : 'none'
                }}>
                <div className={classes.divLoad}>
                    <span className={classes.h3}>Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </section> */}

            <main className={classes.main} onLoad={handleLoad2}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos impedit ea modi mollitia, harum eos. Quod, animi aperiam porro dolore repudiandae quaerat velit esse vitae ea quia eaque maiores ipsa!</p>
            </main>
        </>
    )
}
