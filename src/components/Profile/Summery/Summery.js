import { faHeartbeat, faRandom, faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Summery.module.css'

const Summery = () => {
    return (
        <div className={classes.Summery}>
            <div>
                <FontAwesomeIcon icon={faHeartbeat} />
                <p>Blood Pressure</p>
                <p>120/80</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faRandom} />
                <p>Random Blood Sugar</p>
                <p>100</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faStroopwafel} />
                <p>Lipid Cholesterol</p>
                <p>120</p>
            </div>
        </div>
    )
}

export default Summery
