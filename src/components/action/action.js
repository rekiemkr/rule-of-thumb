import React, { useEffect, useState } from 'react'
import ThumbUp from '../../assets/img/thumbs-up.svg'
import ThumbDown from '../../assets/img/thumbs-down.svg'
import './action.css'

export default function Action({ type, getVote, selectVote, clickable }) {
    const [styles, setStyles] = useState('action');
    useEffect(() => {
        let changeStyle = 'action'
        type === 'up' ? changeStyle += ' action-up' : changeStyle += ' action-down'
        if (clickable) changeStyle += ' action-click'
        setStyles(changeStyle)
    }, [type])
    return (
        <button className={selectVote === type ? `${styles} action-select` : styles} onClick={() => getVote(type)}>
            <img src={type === 'up' ? ThumbUp : ThumbDown} alt='Action' />
        </button>
    )
}
