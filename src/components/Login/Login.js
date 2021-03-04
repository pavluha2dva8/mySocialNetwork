import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../common/FormControl/FormControl"
import { login } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"

const LoginForm = (props) => {

    return (
        // e.prevendDefault
        // get all form data and put them  to object
        // props.onSubmit(formData)
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} 
                component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Passwork'} name={'password'} type={'password'}
                component={Input} validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    // Сюда прийдуть всі значення із форми
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)