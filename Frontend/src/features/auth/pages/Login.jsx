import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await handleLogin({email,password})
        if (success) {
            navigate('/')
        }
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }


    return (
        <main className="auth-page">
            <div className="auth-images">
                 <img src="/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg" alt="working" className="img-left" />
                 <img src="/denis-a9r1RGul7X0-unsplash.jpg" alt="buildings" className="img-right" />
            </div>

            <div className="form-container">
                <p className="subtitle">GenAI for Job Preparation</p>
                <h1>Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" id="email" name='email' placeholder='Email' />
                    </div>
                    <div className="input-group">
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type="password" id="password" name='password' placeholder='Password' />
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <button className='button primary-button' >Log In</button>
                </form>
                <p className="register-text">Don't have an account? <Link to={"/register"} >Register</Link> </p>
            </div>
        </main>
    )
}

export default Login