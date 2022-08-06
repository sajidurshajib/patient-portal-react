import { TransparentNav } from '../Nav'
import Detail from './Detail/Detail'
import Faq from './Faq/Faq'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import classes from './Landing.module.css'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'

const Home = () => {
    return (
        <div className={classes.wrapper}>
            <TransparentNav />

            <Hero />
            <Services />
            <Detail />
            <WhyUs />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
