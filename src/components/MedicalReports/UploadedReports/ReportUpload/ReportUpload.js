import { faFileUpload, faUpload, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext, useRef } from 'react'
import { Auth } from '../../../../allContext'
import classes from './ReportUpload.module.css'

const ReportUpload = ({ msg, setMsg }) => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const inputRef = useRef()
    const triggerFileSelectPopup = () => {
        inputRef.current.click()
    }

    const [formPopup, setFormPopup] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [option, setOption] = useState()

    const popup = () => {
        setFormPopup(!formPopup)
    }

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    // API Fetch
    const uploadImg = async (e) => {
        e.preventDefault()
        const imgData = new FormData()
        imgData.append('file', selectedFile)

        let picUpload = await fetch(`${apiV1}/patient/reports/img`, {
            headers: {
                Accept: 'appllication/json',
                type: 'image/jpeg',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: imgData,
        })

        const pp = await picUpload.json()

        if (picUpload.ok) {
            setMsg([...msg, 'Report Uploaded'])
            setFormPopup(false)
        }
    }

    const uploadPdf = async (e) => {
        e.preventDefault()
        const pdfData = new FormData()
        pdfData.append('file', selectedFile)

        let pdfUpload = await fetch(`${apiV1}/patient/reports/pdf`, {
            headers: {
                Accept: 'appllication/json',
                type: 'file/pdf',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: pdfData,
        })

        const pdf = await pdfUpload.json()

        if (pdfUpload.ok) {
            setMsg([...msg, 'Report Uploaded'])
            setFormPopup(false)
        }
    }
    return (
        <div>
            <div className={classes.uploadButton}>
                <button onClick={popup}>Upload</button>
            </div>

            {formPopup && (
                <div className={classes.uploadContainer}>
                    <div className={classes.overlay} onClick={() => setFormPopup(false)}></div>
                    <div className={classes.uploader}>
                        <p className={classes.upText}>Upload Your Report</p>
                        <button className={classes.Close} onClick={popup}>
                            x
                        </button>
                        <div className={classes.Input}>
                            <div className={classes.selectedImg}>
                                {selectedFile && (
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
                                        onChange={onSelectFile}
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        required
                                    />
                                </div>
                                <button
                                    onClick={(e) => {
                                        triggerFileSelectPopup()
                                        setOption(1)
                                    }}
                                    className={classes.Select}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span>Select PDF</span>
                                </button>
                                <button
                                    onClick={(e) => {
                                        triggerFileSelectPopup()
                                        setOption(2)
                                    }}
                                    className={classes.Select}>
                                    <FontAwesomeIcon icon={faImage} />
                                    <span>Select Image</span>
                                </button>
                            </div>
                        </div>
                        <button className={classes.Upload} onClick={option === 2 ? uploadImg : uploadPdf}>
                            <FontAwesomeIcon icon={faUpload} />
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ReportUpload
