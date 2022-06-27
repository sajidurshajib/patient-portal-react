import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { FilePreviewerThumbnail } from 'react-file-previewer'
import { Auth } from '../../../allContext'
import ReportUpload from '../ReportUpload/ReportUpload'
import classes from './UploadedReports.module.css'

const UploadedReports = () => {
    const { stateAuth } = useContext(Auth)
    const [msg, setMsg] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [reportImg, setReportImg] = useState({})
    const [reportPdf, setReportPdf] = useState({})
    const [imageViewer, setImageViewer] = useState(false)
    const [number, setNumber] = useState()
    const popup = () => {
        setImageViewer(!imageViewer)
    }

    useEffect(() => {
        let reportImgFunc = async () => {
            let reportImgFetch = await fetch(`${apiV1}/patient/reports/img`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await reportImgFetch.json()

            if (reportImgFetch.ok) {
                setReportImg(infoJson)
            }
        }
        try {
            reportImgFunc()
        } catch (e) {}
    }, [apiV1, token, msg])

    useEffect(() => {
        let reportPdfFunc = async () => {
            let reportPdfFetch = await fetch(`${apiV1}/patient/reports/pdf`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await reportPdfFetch.json()

            if (reportPdfFetch.ok) {
                setReportPdf(infoJson)
            }
        }
        try {
            reportPdfFunc()
        } catch (e) {}
    }, [apiV1, token, msg])

    let imgReport = Array.from(reportImg)
    let pdfReport = Array.from(reportPdf)

    const reportImgUrl = 'http://127.0.0.1:8000/images/patient_reports/'
    const reportPdfUrl = 'http://127.0.0.1:8000/pdf/patient_reports/'

    return (
        <div className={classes.UploadedReports}>
            <div className={classes.Header}>
                <h2>Medical Reports</h2>
                <ReportUpload msg={msg} setMsg={setMsg} />
            </div>

            <div className={classes.files}>
                {imgReport.map((report, index) => {
                    return (
                        <div>
                            <div
                                onClick={(e) => {
                                    popup()
                                    setNumber(index)
                                }}>
                                <img src={reportImgUrl + report.image_string} alt="file" />
                                <p>
                                    {report.service_name}-{index + 1}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {imageViewer && (
                <div className={classes.previewContainer}>
                    <button onClick={popup} className={classes.Close}>
                        X
                    </button>
                    <div className={classes.Preview}>
                        <img src={reportImgUrl + imgReport[number].image_string} alt="viewer" />
                    </div>
                </div>
            )}

            <div className={classes.files}>
                {pdfReport.map((report, index) => {
                    return (
                        <a href={reportPdfUrl + report.pdf_string} target="blank">
                            <FontAwesomeIcon icon={faFileAlt} />
                            <p>
                                {report.service_name} -{index + 1}
                            </p>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default UploadedReports
