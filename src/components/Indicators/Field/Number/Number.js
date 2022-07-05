import classes from './Number.module.css'

const Number = (props) => {
    return (
        <div className={classes.Number}>
            <div className={classes.header}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes.body}>
                <div className={classes.field}>
                    <form>
                        <input
                            type="number"
                            value={props.st}
                            placeholder={props.place}
                            onChange={(e) => props.setSt(e.target.value)}
                            min={props.min}
                            max={props.max}
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

export default Number
