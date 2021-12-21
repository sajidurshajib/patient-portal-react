import desktop from '../../../assets/img/desktop.png'
import mobile from '../../../assets/img/mobile.jpg'
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
                        width: '500px',
                        height: '250px',
                    }}></div>
                <div
                    style={{
                        background: `url(${mobile})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}></div>
            </div>
            <div></div>
        </div>
    )
}

export default Detail
