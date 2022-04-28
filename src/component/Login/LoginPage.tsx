import { createUseStyles } from 'react-jss'
import LoginForm from './LoginForm'

const useStyles = createUseStyles({
    container: {
        height: '100vh',
        background: 'linear-gradient(45deg, #f3f3f3, #f3f3f3, #b7b6e1, transparent)'
    },
    logo : {
        top : '40px',
        left : '50px'
    }
})

const LoginPage = () => {
    const classes = useStyles()
    return (<div className={`container-fluid ${classes.container}`}  >
        <div className='row h-100 d-flex align-items-center justify-content-center position-relative'>
            <div className='col-sm-6 col-md-4'>
                <LoginForm />
            </div>
        </div>
    </div>)
}
export default LoginPage