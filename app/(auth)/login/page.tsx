'use client'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { FaFacebookF, FaGithub, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import "./styles.css"
import { useState } from 'react'
const montserrat1 = Montserrat({
    weight: '300',
    subsets: ['latin']
})

const montserrat2 = localFont({
    src: '../../fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
    weight: '100 900'
})
export default function Login() {
    const [active, setActive] = useState(true)
   

    const toggleActive = () => {
        console.log("Active login you see", active)

        setActive(prev => !prev)
    }

   /*  const toggleDeaActive = () => {
        console.log("Activee Register you see")
        setActive(prev => !prev)


    } */



    return <>
        <div className={`container ${active ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlusG />

                        </a>
                        <a href="#" className="icon">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlusG />
                        </a>
                        <a href="#" className="icon">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className={`hidden`} id="login" onClick={() => toggleActive()}>
                            Sign In
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className={`hidden`} id="register" onClick={() => toggleActive()}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}