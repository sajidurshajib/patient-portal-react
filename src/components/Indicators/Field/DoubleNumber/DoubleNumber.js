import classes from './DoubleNumber.module.css'

const DoubleNumber = (props) => {
    return (
        <div className={classes.DoubleNumber}>
            <div className={classes.header}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.body}>
                <div className={classes.field}>
                    <form>
                        <input
                            type="number"
                            placeholder={props.place1}
                            value={props.st1}
                            onChange={(e) => props.setSt1(e.target.value)}
                            min={props.min1}
                            max={props.max1}
                        />
                        <input
                            type="number"
                            placeholder={props.place2}
                            value={props.st2}
                            onChange={(e) => props.setSt2(e.target.value)}
                            min={props.min2}
                            max={props.max2}
                        />
                        <span>{props.unit}</span>
                        <button onClick={props.smbt}>Submit</button>
                    </form>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default DoubleNumber
