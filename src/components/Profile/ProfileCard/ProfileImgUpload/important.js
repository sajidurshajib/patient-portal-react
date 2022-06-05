import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import classes from './ProfileImgUpload.module.css'

const ProfileImgUpload = () => {
    const [changeForm, setChangeForm] = useState(false)

    const [selectedImg, setSelectedImg] = useState()
    const [preview, setPreview] = useState()

    const popup = () => {
        setChangeForm(!changeForm)
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
            <div className={classes.changePP}>
                <button onClick={popup}>
                    <FontAwesomeIcon icon={faCamera} />
                </button>
            </div>

            {changeForm && (
                <div className={classes.imgUploader}>
                    <div className={classes.uploadForm}>
                        <h2>Update Image</h2>
                        <div className={classes.Content}>
                            <input type="file" onChange={onSelectImg} />
                            {selectedImg && (
                                <div
                                    className={classes.previewImg}
                                    style={{
                                        background: `url(${preview})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderRadius: '10px',
                                    }}></div>
                            )}
                        </div>
                        <button onClick={popup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProfileImgUpload
