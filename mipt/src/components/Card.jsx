import {useState} from 'react';
import style from './Card.module.css';

export function Card({title, text, currentLikes}) {

    const [like, setLike] = useState({
        currentLikes: currentLikes,
        isLike: 1
    })


    const likeDislike = () => {
        setLike(oldLike => ({
            currentLikes: oldLike.currentLikes + oldLike.isLike,
            isLike: oldLike.isLike * (-1)
        }))
    }

    return (
        <>
            <div className={style.card}>
                <h2>{title}</h2>
                <h3>{text}</h3>
                <div className= {style.heart}>
                    <div className={style.likesCounter}>{like.currentLikes}</div>
                    <div className={like.isLike < 0 ? style.like : style.whiteLike} onClick={likeDislike}></div>
                </div>

            </div>
        </>
    )

}