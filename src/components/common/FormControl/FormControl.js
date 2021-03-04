import React from 'react'
import style from './FormControl.module.css'

const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            {React.createElement(props.element, { ...input, ...props })}
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    // Щоб не дублювати код, в якому відрізняються лише елементи, ми створили FormControl
    // і в нього передаємо параметр element, а він вже всередині отрісовує його за допомогою
    // React.createElement(props.element, { ...input, ...props })
    return <FormControl {...props} element={'textarea'} />
}

export const Input = (props) => {
    
    return <FormControl {...props} element={'input'} />
}