import React, { useState } from 'react'
import "./dropdown.css"
import Triangle from '../../assets/img/Triangle.svg'

export default function Dropdown({selectOption}) {
    const [option, setOption] = useState('Grid')
    const [deploy, setDeploy] = useState(false)

    const chooseOption = (option) => {
        if (option === 1) setOption('List')
        if (option === 2) setOption('Grid')
        selectOption(option)
    }

    return (
        <section className='dropdown' onClick={() => setDeploy(!deploy)}>
            <section className='dropdown__selection'>
                <p>

                    {option}
                </p>
                <img
                    style={{ transform: deploy ? `rotate(${180}deg)` : `rotate(${0}deg)` }}
                    className='dropdown__selection--icon'
                    src={Triangle} />
            </section>
            {
                deploy &&
                <section className='dropdown__options'>
                    <section className='dropdown__option' onClick={() => chooseOption(1)}>
                        List
                    </section>
                    <section className='dropdown__option' onClick={() => chooseOption(2)}>
                        Grid
                    </section>
                </section>
            }
        </section>
    )
}
