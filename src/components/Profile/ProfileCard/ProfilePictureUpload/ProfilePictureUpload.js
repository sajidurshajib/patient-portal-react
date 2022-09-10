import { faCamera, faFileUpload, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useContext, useRef } from 'react'
import { Auth } from '../../../../allContext'
import classes from './ProfilePictureUpload.module.css'

const ProfilePictureUpload = ({ msg, setMsg }) => {
    const { stateAuth } = useContext(Auth)

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [selectedImg, setSelectedImg] = useState()
    const [uploadForm, setUploadForm] = useState(false)
    const [preview, setPreview] = useState()

    const inputRef = useRef()

    const triggerFileSelectPopup = () => {
        inputRef.current.click()
    }

    const popup = () => {
        setUploadForm(!uploadForm)
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

    // API Fetch
    const upload = async (e) => {
        e.preventDefault()
        const imgData = new FormData()
        imgData.append('file', selectedImg)

        let picUpload = await fetch(`${apiV1}/profile-pic`, {
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
            setMsg([...msg, 'Profile Pic Updated'])
            setUploadForm(false)
        }
    }

    return (
        <div>
            <div className={classes.changePP}>
                <button onClick={popup} className={classes.button}>
                    <FontAwesomeIcon icon={faCamera} />
                </button>
            </div>

            {uploadForm && (
                <div className={classes.container}>
                    <div className={classes.overlay} onClick={() => setUploadForm(false)}></div>
                    <div className={classes.imgUploader}>
                        <h2>Upload Profile Picture</h2>
                        <button className={classes.Close} onClick={popup}>
                            x
                        </button>
                        <div className={classes.uploadForm}>
                            <div className={classes.SelectedImg}>
                                {selectedImg && (
                                    <div>
                                        <div className={classes.PreviewContainer}>
                                            <img src={preview} className={classes.ImgPreview} alt="" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={classes.controlBtn}>
                                <div>
                                    <input
                                        type="file"
                                        onChange={onSelectImg}
                                        style={{ display: 'none' }}
                                        ref={inputRef}
                                        accept="image/pdf"
                                    />
                                </div>
                                <button onClick={triggerFileSelectPopup} className={classes.Select}>
                                    <FontAwesomeIcon icon={faFileUpload} />
                                    <span>Select</span>
                                </button>
                            </div>
                        </div>
                        <button className={classes.Upload} onClick={upload}>
                            <FontAwesomeIcon icon={faUpload} />
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProfilePictureUpload
