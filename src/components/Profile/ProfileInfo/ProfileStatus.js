import React from 'react'
import style from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
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

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus