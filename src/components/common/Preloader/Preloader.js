import style from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={style.lds_dual_ring}></div>
    )
}

export default Preloader