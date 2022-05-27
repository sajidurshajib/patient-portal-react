import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useCallback, useContext, useRef } from 'react'
import Cropper from 'react-easy-crop'
import { Auth } from '../../../../allContext'
import getCroppedImg from './CropImage'
import classes from './ProfileImgUpload.module.css'

const ProfileImgUpload = () => {
    const { stateAuth } = useContext(Auth)
    const inputRef = useRef()
    const triggerFileSelectPopup = () => {
        inputRef.current.click()
    }

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [changeForm, setChangeForm] = useState(false)

    const [selectedImg, setSelectedImg] = useState()
    const [preview, setPreview] = useState()

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

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

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(preview, croppedAreaPixels)
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
            console.log('error Printed!!!')
        }
    }, [croppedAreaPixels])

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, [])

    // API Fetch
    const upload = async (e) => {
        e.preventDefault()

        let pic = await fetch(`${apiV1}/profile-pic`, {
            headers: {
                // Accept: 'appllication/json',
                // 'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            mode: 'no-cors',
            method: 'POST',
            body: 'multipart/form-data',
        })
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
                    <h2>Update Image</h2>
                    <div className={classes.uploadForm}>
                        <div className={classes.Content}>
                            {selectedImg && (
                                <div>
                                    <div className={classes.cropContainer}>
                                        <Cropper
                                            className={classes.crop}
                                            image={preview}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={1 / 1}
                                            onCropChange={setCrop}
                                            onCropComplete={onCropComplete}
                                            onZoomChange={setZoom}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* {croppedImage && (
                                <div>
                                    <div
                                        className={classes.previewImg}
                                        style={{
                                            background: `url(${croppedImage})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            borderRadius: '10px',
                                        }}></div>
                                </div>
                            )} */}
                        </div>
                        <div className={classes.controlBtn}>
                            <div>
                                <input
                                    type="file"
                                    onChange={onSelectImg}
                                    style={{ display: 'none' }}
                                    ref={inputRef}
                                    accept="image/*"
                                />
                            </div>
                            <button onClick={triggerFileSelectPopup}>Browse Photo</button>
                            <button onClick={showCroppedImage}>Set</button>
                            <button onClick={popup}>Close</button>
                            <button onClick={upload}>Upload</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ProfileImgUpload
