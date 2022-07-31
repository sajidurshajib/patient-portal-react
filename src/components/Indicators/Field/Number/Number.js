import classes from './Number.module.css'

const Number = (props) => {
    return (
        <div className={classes.Number}>
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
                                value={props.st}
                                placeholder={props.place}
                                onChange={(e) => props.setSt(e.target.value)}
                                min={props.min}
                                max={props.max}
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

export default Number
