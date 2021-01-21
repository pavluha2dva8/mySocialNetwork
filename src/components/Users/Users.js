import * as axios from 'axios'
import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/anonymous.jpg'

const Users = (props) => {
let getUsers = () => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
        // [
        //     { id: 1, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavl K.', status: 'HelloNewComponent', location: { country: 'Ukraine', city: 'BC' } },
        //     { id: 2, followed: true, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Valeria S.', status: 'Hi 2 all', location: { country: 'USA', city: 'New York' } },
        //     { id: 3, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Dimich K.', status: 'I\'m ok', location: { country: 'Belarus', city: 'Minsk' } },
        //     { id: 4, followed: false, photo: 'https://99px.ru/sstorage/1/2018/09/image_12609180803112950164.jpg', fullName: 'Pavel K.', status: 'lf a job Front end', location: { country: 'Ukraine', city: 'Kyiv' } }
        // ]
    }
}
    

    return (
        
        <div>
            <h2>Users</h2>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id} className={style.container}>
                    <div>
                        <img className={style.img}
                            src={u.photos.small || userPhoto} alt="" />
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }} className={style.button}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} className={style.button}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.userName}>{u.name}</div>
                        <div className={style.location}>{'u.location.country'}</div>
                        <div className={style.location}>{'u.location.city'}</div>
                        <div className={style.status}>{'u.status'}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users