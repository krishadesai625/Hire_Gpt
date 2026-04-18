import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await handleRegister({username,email,password})
        if (success) {
            navigate("/")
        }
    }

    if(loading){
        return (<main><h1>Loading.......</h1></main>)
    }

    return (
        <main className="auth-page">
            <div className="register-card">
                <div className="register-image-section">
                    <img src="/microsoft-copilot-71ig274jGpw-unsplash.jpg" alt="working" />
                </div>

                <div className="register-form-section">
                    <h1>Registration</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text" id="username" name='username' placeholder='Username' />
                        </div>
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

                        <button className='button register-button' >REGISTER</button>
                    </form>

                    <p className="signin-text">Have an account? <Link to={"/login"} >Sign in</Link> </p>
                </div>
            </div>
        </main>
    )
}

export default Register