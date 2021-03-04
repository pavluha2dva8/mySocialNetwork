import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { Input } from "../common/FormControl/FormControl"

const LoginForm = (props) => {

    return (
        // e.prevendDefault
        // get all form data and put them  to object
        // props.onSubmit(formData)
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} 
                component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Passwork'} name={'password'} 
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