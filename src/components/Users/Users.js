import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/anonymous.jpg'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log(pagesCount)
    let pages = []
    for (let i = 1; i <= /*pagesCount*/10; i++) {
        pages.push(i)
    }
    console.log(pages)

    return (
        <div>
            <h2>Users</h2>
            {pages.map(p => {
                return <span className={`${style.pageSelector} ${props.currentPage === p && style.selectedPage}`}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
            {
                props.users.map(u => <div key={u.id} className={style.container}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={style.img}
                                src={u.photos.small || userPhoto} alt="" />
                        </NavLink>
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