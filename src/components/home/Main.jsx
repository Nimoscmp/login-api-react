import React from 'react'
import useStyles from '../../styles/Styles';

export default function Main({dataUsers}) {

    const classes = useStyles();

    return (
        <> 
            <main className={classes.main}>
                {dataUsers.map(item => (
                    <div key={item.id} className={classes.card}>
                        <h3>{item.username}</h3>
                        <h5>{item.phone}</h5>
                        <span className={classes.span1}>{item.address.city}</span>
                        <span className={classes.span2}>{item.company.catchPhrase}</span>
                        
                    </div>
                ))}
            </main>
        </>
    )
}

