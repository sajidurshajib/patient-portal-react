import Detail from './Detail/Detail'
import Hero from './Hero/Hero'
import classes from './Home.module.css'
import Services from './Services/Services'

const Home = () => {
    return (
        <div className={classes.Home}>
            <Hero />
            <Services />
            <Detail />
        </div>
    )
}

export default Home
