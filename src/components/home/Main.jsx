import { CircularProgress, useMediaQuery } from '@material-ui/core';
import { AddCircle, LocationCity, PhoneEnabledOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import useStyles from '../../styles/Styles';

export default function Main({dataUsers, imageUsers, imgDataUsers, setImgDataUsers, completeUsers, setCompleteUsers}) {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:805px)');

    const [showPreload, setShowPreload] = useState(true);

    const handleLoad = () => {
        setShowPreload(false);
    }

    useEffect(() => {
        setImgDataUsers(
            imageUsers.filter(item => parseInt(item.id) < 1005 && parseInt(item.id) !== 1003)
        )
    }, [imageUsers])

    useEffect(() => {
        const dataFunc = () => {
            setCompleteUsers(
                dataUsers.map((item, index) => ({
                    name: item.username,
                    id: item.id,
                    phone: item.phone,
                    city: item.address.city,
                    phrase: item.company.catchPhrase,
                    imgUrl: imgDataUsers[index].download_url
                })) 
            )
        }

        dataFunc();
        
    }, [imgDataUsers])

    return (
        <> 
            <section 
                className={classes.mainLoad2}
                style={{
                    display: showPreload ? 'flex' : 'none'
                }}>
                <div className={classes.divLoad}>
                    <span className={classes.h3}>Cargando...</span>
                    <CircularProgress color="secondary" size={32}/>
                </div>
            </section>

            <main className={classes.main} onLoad={handleLoad}>
                {completeUsers.map(item => (
                    <div key={item.id} className={matches ? classes.card : classes.cardMini}>
                        <div className={classes.justBetween}>
                            <div className={classes.justAround}>
                                <img src={item.imgUrl} alt="" className={classes.imgUrl}/>
                                <span className={classes.margin1}><strong className={classes.white}>{item.name}</strong></span>
                            </div>
                            <AddCircle color="primary" fontSize="large" className={classes.iconAdd}/>
                        </div>
                        <div>
                            <p className={classes.span1}><small className={classes.margin1}><strong>{item.city}</strong></small><LocationCity color="secondary"/></p>
                            <p className={classes.span2}><small className={classes.margin1}>{item.phone}</small><PhoneEnabledOutlined/></p>
                            <p className={classes.span3}>{item.phrase}</p>
                        </div>
                        
                    </div>
                ))}
            </main>
        </>
    )
}
