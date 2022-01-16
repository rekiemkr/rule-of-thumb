import React, { useEffect, useState } from 'react'
import { calculatePercentage } from '../../utils/functions';
import Action from '../action/action';
import './card.css';
import ThumbUp from '../../assets/img/thumbs-up.svg'
import ThumbDown from '../../assets/img/thumbs-down.svg'

const MAX_NUMBER_CARACTERS_DESC = 80;
const MAX_NUMBER_CARACTERS_TITLE = 25;

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
                    <h1 className='card__header--title'>{personaje.name.length > MAX_NUMBER_CARACTERS_TITLE && view === 'card' ? `${personaje.name.substring(0, 15)}...` : personaje.name}</h1>
                </section>
                <section className='card-main'>
                    <section className='card__info'>
                        <p className='card__info--description'>{(personaje.description.length > MAX_NUMBER_CARACTERS_DESC) ? `${personaje.description.substring(0, MAX_NUMBER_CARACTERS_DESC)}...` : personaje.description}</p>
                        <small className='card__info--time'> { !voteComplete ? `1 month ago in ${personaje.category}` : `Thank you for your vote!` } </small>
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
                            <img src={ThumbUp} alt="Vote positive" />
                            <label>{percentages.positive}%</label>
                        </span>
                        <span>
                            <label>{percentages.negative}%</label>
                            <img src={ThumbDown} alt="Vote negative" />
                        </span>
                    </section>
                </section>
            </section>

        </section>
    )
}
