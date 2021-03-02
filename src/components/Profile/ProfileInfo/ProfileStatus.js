import React from 'react'
import style from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        // callback, який ми визвемо, коли захочемо оновити статус
        this.props.updateStatus(this.state.status)
    }

    activateEditMode = () => {
        // Щоб робити все це без костилів, викликаємо метод setState(), який є в
        // React.Component і передаємо йому обєкт з значеннями які хочемо замінити

        this.setState({ // ЦЕЙ МЕТОД А-СИНХРОННИЙ, ЯКЩО ВИЗВЕМО console.log(this.state.editMode)
            editMode: true // ПЕРЕД setState І ПІСЛЯ, ОБИДВА РАЗИ БУДЕ FALSE!!!
        })

        /*
        this.state.editMode = true
        // React не вміє слідити за такими змінами в локальному стейті
        // тому ми використаємо метод forceUpdate(), щоб компонент перерісувать
        // але цей метод бажанно уникати
        this.forceUpdate()
        */

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Edit Status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                            value={this.state.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus