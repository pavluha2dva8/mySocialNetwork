import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.profile}>
            <div className={style.profile_bg}>
                <img className={style.profile_avatar} src={props.profile.photos.large} />
            </div>
            <div className={style.profile_info}>
                <div className={style.info}>
                    <div className={style.name}>{props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>LF a job: {String(props.profile.lookingForAJob)}</div>
                    <div>Job desc: {props.profile.lookingForAJobDescription}</div>
                </div>
                <div className={style.contacts}>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo