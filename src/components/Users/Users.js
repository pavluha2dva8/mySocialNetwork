import * as axios from 'axios'
import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/anonymous.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <h2>Users</h2>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p && style.selectedPage}>{p}</span>
                })}

                {
                    this.props.users.map(u => <div key={u.id} className={style.container}>
                        <div>
                            <img className={style.img}
                                src={u.photos.small || userPhoto} alt="" />
                            <div>
                                {
                                    u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }} className={style.button}>Unfollow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }} className={style.button}>Follow</button>
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
}

export default Users