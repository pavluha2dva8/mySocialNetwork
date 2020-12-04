import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://i.pinimg.com/originals/5a/f1/dd/5af1ddcde07255e8a999abcc061dd201.png" alt="" />
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post