import React, { useEffect, useState } from 'react'
import Card from '../components/card/card';
import Dropdown from '../components/dropdown/dropdown';
import sizes from '../constants/sizes';
import './cards.css'
function Cards({ info, modifyStorage }) {

    const [view, setView] = useState('card');
    useEffect(() => {
        if (window.innerWidth < sizes.MAX_MOBILE) setView('card');
    }, [])
    const selectOption = (viewChange) => {
        if (viewChange === 1) setView('list')
        if (viewChange === 2) setView('card')
    }
    return (
        <div className='cards'>
            <section className='cards-header'>
                <h1 className='cards-header__title'>
                    Previous Rulings
                </h1>
                {
                    <section className='cards-header__menu'>
                        <Dropdown selectOption={(option) => selectOption(option)} />
                        {/* <buttos onClick={() => changeViewType('list')}>List</buttos */}
                    </section>
                }
            </section>
            <section style={{ flexDirection: view === 'list' ? 'column' : 'row' }} className='cards__content'>
                {
                    info.map((personaje, key) => (
                        <Card modifyStorage={modifyStorage} personaje={personaje} key={key} view={view} />
                    ))
                }
            </section>
        </div>
    )
}

export default Cards
