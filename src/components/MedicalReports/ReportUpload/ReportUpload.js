import { faFileUpload, faUpload, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext, useRef } from 'react'
import { Auth } from '../../../allContext'
import classes from './ReportUpload.module.css'

const ReportUpload = () => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const inputRef = useRef()
    const triggerFileSelectPopup = () => {
        inputRef.current.click()
    }

    const [formPopup, setFormPopup] = useState(false)
    const [selectedImg, setSelectedImg] = useState()
    const [preview, setPreview] = useState()

    const popup = () => {
        setFormPopup(!formPopup)
    }

    useEffect(() => {
        if (!selectedImg) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedImg)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImg])

    const onSelectImg = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImg(undefined)
            return
        }
        setSelectedImg(e.target.files[0])
    }
    return (
        <div>
            <div className={classes.uploadButton}>
                <button onClick={popup}>Upload Report</button>
            </div>

            {formPopup && (
                <div className={classes.uploadContainer}>
                    <div className={classes.uploader}>
                        <h2>Upload Your Report</h2>
                        <button className={classes.Close} onClick={popup}>
                            X
                        </button>
                        <div className={classes.Input}>
                            <div className={classes.selectedImg}>
                                {selectedImg && (
                                    <div>
                                        <div className={classes.PreviewContainer}>
                                            <img src={preview} className={classes.ImgPreview} alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={classes.Control}>
                                <div>
                                    <input
                                        type="file"
                                        onChange={onSelectImg}
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                    />
                                </div>
                                <button onClick={triggerFileSelectPopup} className={classes.Select}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span> Select File</span>
                                </button>
                                <button onClick={triggerFileSelectPopup} className={classes.Select}>
                                    <FontAwesomeIcon icon={faImage} />
                                    <span> Select Photo</span>
                                </button>
                                <button className={classes.Upload}>
                                    <FontAwesomeIcon icon={faUpload} />
                                    <span> Upload</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ReportUpload
