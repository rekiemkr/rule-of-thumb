import React, { useEffect, useState } from 'react'
import { calculatePercentage } from '../../utils/functions';
import Action from '../action/action';
import './card.css';
import ThumbUp from '../../assets/img/thumbs-up.svg'
import ThumbDown from '../../assets/img/thumbs-down.svg'

const NUMBER_CARACTERS = 50;

export default function Card({ personaje, view, modifyStorage }) {
    const [percentages, setPercentages] = useState(0)
    const [selectVote, setSelectVote] = useState('')
    const [voteComplete, setVoteComplete] = useState(false)
    useEffect(() => {
        setPercentages(calculatePercentage(personaje.votes));
    }, [personaje, modifyStorage])

    const getVote = (type) => {
        setSelectVote(type);
    }
    const confirmVote = (again) => {
        setVoteComplete(!voteComplete);
        setSelectVote('');
        if (!again) modifyStorage(personaje.name, selectVote === 'up');
    }
    return (
        <section className={view === 'list' ? 'card-list' : 'card'}>
            <img className='card__background' src={require(`../../assets/people/${personaje.picture}`)} alt="example" />
            <section className='card-body'>
                <section className='card__header'>
                    <span className={personaje.votes.positive === personaje.votes.negative ? 'card__header--hidden' : 'card__header--show'}>
                        <Action type={personaje.votes.positive > personaje.votes.negative ? 'up' : 'down'} />
                    </span>
                    <h1 className='card__header--title'>{personaje.name.length > 15 ? `${personaje.name.substring(0, 15)}` : personaje.name}</h1>
                </section>
                <section className='card-main'>
                    <section className='card__info'>
                        <p className='card__info--description'>{personaje.description.length > NUMBER_CARACTERS ? `${personaje.description.substring(0, NUMBER_CARACTERS)}...` : personaje.description}</p>
                        <small className='card__info--time'>1 month ago in {personaje.category}</small>
                    </section>
                    {
                        !voteComplete &&
                        <section className='card__action'>
                            <Action clickable={true} type='up' getVote={getVote} selectVote={selectVote} />
                            <Action clickable={true} type='down' getVote={getVote} selectVote={selectVote} />
                            <section>
                                <button className='card__action--vote' onClick={() => confirmVote(false)}>
                                    Vote Now
                                </button>
                            </section>
                        </section>
                    }
                    {
                        voteComplete &&
                        <section className='card__action--confirmation'>
                            <small >
                                Thank you for voting!
                            </small>
                            <button className='card__action--vote' onClick={() => confirmVote(true)}>
                                Vote Again
                            </button>
                        </section>
                    }
                </section>
                <section className='card__bar'>
                    <section className='card__bard--positive' style={{ width: `${percentages.positive}%` }}></section>
                    <section className='card__bar--numbers'>
                        <span>
                            <img src={ThumbUp} />
                            <label>{percentages.positive}%</label>
                        </span>
                        <span>
                            <label>{percentages.negative}%</label>
                            <img src={ThumbDown} />
                        </span>
                    </section>
                </section>
            </section>

        </section>
    )
}
