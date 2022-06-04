import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bg from '../../assets/img/background-doc.jpg'
import { Sidebar } from '../Nav'
import DoctorList from './DoctorList/DoctorList'
import classes from './FindDoctors.module.css'

const FindDoctors = () => {
    const c = (e) => {
        e.preventDefault()
    }
    return (
        <div className={classes.FindDoctors}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.listContainer}>
                <div
                    className={classes.searchBar}
                    style={{
                        background: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'none',
                    }}>
                    <div>
                        <form>
                            <input type="text" placeholder="Medicine specialist" />
                            <FontAwesomeIcon icon={faSearch} onClick={(e) => c(e)} />
                        </form>
                    </div>
                </div>
                <DoctorList />
            </div>
        </div>
    )
}

export default FindDoctors
