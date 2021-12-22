import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import desktop from '../../../assets/img/desktop-telemedicine.jpg'
import classes from './Detail.module.css'

const Detail = () => {
    return (
        <div className={classes.Detail}>
            <div className={classes.imgDiv}>
                <div
                    style={{
                        background: `url(${desktop})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '100%',
                        height: '300px',
                    }}></div>
            </div>
            <div>
                <h2>Your patient portal</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem repellat aliquam aut facere ullam
                    quia mollitia iste dicta, velit doloribus? Labore rem id a obcaecati. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Non facere nulla. Lorem ipsum dolor sit amet.
                </p>
                <h3>Your services</h3>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Save your health data.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Get your e-prescription.
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckCircle} /> Buy medicine from online.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Detail
