import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.content__wallpaper}>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="" />
            </div>
            <div className={style.content__avatar}>
                <img src="https://cdn.the-scientist.com/assets/articleNo/67431/aImg/37291/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-t.png" alt="" />
            </div>
        </div>
    )
}

export default ProfileInfo