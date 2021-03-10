import React, { useEffect, useState } from 'react'
import style from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    // Як виглядає хук по простому - useState(false) повертає нам
    // масив, в якому першим значенням [0] буде початковий стейт,
    // який ми назвали editMode і йому присвоїться false, а другим
    // значенням буде ф-я, яка дозволяє змінювати стейт
    // --- let stateWithSetState = useState(false)
    // --- let editMode = stateWithSetState[0]
    // --- let setEditMode = stateWithSetState[1]
    // Але так ніхто не пише!

    // Якщо це 2 стани, які змінюються незалежно друг від друга,
    // то потрібно їх розділяти
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        // callback, який ми визвемо, коли захочемо оновити статус
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Edit Status'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true}
                        onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks