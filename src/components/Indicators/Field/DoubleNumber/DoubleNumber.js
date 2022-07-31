import classes from './DoubleNumber.module.css'

const DoubleNumber = (props) => {
    return (
        <div className={classes.DoubleNumber}>
            <div className={classes.header}>
                <p>{props.title}</p>
            </div>
            <div className={classes.body}>
                <div>{props.children}</div>
                <div className={classes.field}>
                    <form>
                        <div>
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
                        </div>
                        <div>
                            <button onClick={props.smbt}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DoubleNumber
