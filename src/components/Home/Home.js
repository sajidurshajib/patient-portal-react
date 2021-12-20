import Hero from './Hero/Hero'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.Home}>
            <Hero />
            <h2>Service</h2>
            <h2>Footer</h2>
        </div>
    )
}

export default Home
