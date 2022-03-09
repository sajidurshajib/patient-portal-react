import { useState } from 'react'
import classes from './Text.module.css'

const Text = ({ title }) => {
    const [text, setText] = useState('')
    const [textList, setTextList] = useState([])

    const submit = (e) => {
        e.preventDefault()
        if (text.length === 0) return

        setTextList([...textList, text])
        setText('')
    }

    const del = (e, index) => {
        e.preventDefault()
        let arr = textList

        if (index > -1) {
            arr.splice(index, 1) // 2nd parameter means remove one item only
        }
        setTextList([...arr])
    }
    return (
        <div className={classes.Text}>
            <h3>{title}</h3>
            <form onSubmit={submit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <div className={classes.tlist}>
                {textList.map((item, index) => {
                    return (
                        <>
                            <p key={index}>
                                {index + 1}. {item}
                                <span onClick={(e) => del(e, index)}>x</span>
                            </p>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Text
