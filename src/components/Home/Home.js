import { useState } from 'react'
import Login from '../Login/Login'
import TransparentNav from '../Nav/TransparentNav/TransparentNav'
import Register from '../Register/Register'
import Detail from './Detail/Detail'
import Hero from './Hero/Hero'
import classes from './Home.module.css'
import Services from './Services/Services'

const Home = () => {
    const [loginModal, setLoginModal] = useState(false)
    const [registerModal, setRegisterModal] = useState(false)

    return (
        <div className={classes.Home}>
            <TransparentNav />

            {loginModal ? <Login loginModal={setLoginModal} /> : null}
            {registerModal ? <Register registerModal={setRegisterModal} /> : null}

            <Hero loginModal={setLoginModal} registerModal={setRegisterModal} />
            <Services />
            <Detail />
        </div>
    )
}

export default Home
