import { TransparentNav } from '../Nav'
import Detail from './Detail/Detail'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import classes from './Home.module.css'
import Services from './Services/Services'

const Home = () => {
    return (
        <div className={classes.Home}>
            <TransparentNav />

            <Hero />
            <Services />
            <Detail />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
