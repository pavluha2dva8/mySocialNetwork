import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {

    return (
        // e.prevendDefault
        // get all form data and put them  to object
        // props.onSubmit(formData)
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Passwork'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
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
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login