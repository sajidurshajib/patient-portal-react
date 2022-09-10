import { useState, useContext, useEffect } from 'react'
import { Auth } from '../../../allContext'
import PDF from '../../../assets/img/social/pdf.png'
import { toMonthNameLong } from '../../../utils/date'
import ReportUpload from './ReportUpload/ReportUpload'
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

    const reportImgUrl = `${apiV1}/images/patient_reports/`
    const reportPdfUrl = `${apiV1}/pdf/patient_reports/`

    return (
        <div className={classes.UploadedReports}>
            <p>Medical Reports</p>
            <div className={classes.container}>
                <div className={classes.Header}>
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
                                        <span>{report.image_string.split('_')[1].split('-')[0]}</span>_
                                        {report.image_string.split('_')[1].split('-')[1]}.
                                        {report.image_string.split('.')[1]}
                                    </p>
                                    <p>{`${report.created_at.slice(8, 10)}-${toMonthNameLong(
                                        report.created_at.slice(6, 7)
                                    )}-${report.created_at.slice(0, 4)}`}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {imageViewer && (
                    <div className={classes.previewContainer}>
                        <div className={classes.overlay} onClick={() => setImageViewer(false)}></div>
                        <div className={classes.Preview}>
                            <img src={reportImgUrl + imgReport[number].image_string} alt="viewer" />
                            <button onClick={popup} className={classes.closeBtn}>
                                x
                            </button>
                        </div>
                    </div>
                )}

                <div className={classes.files}>
                    {pdfReport.map((report, index) => {
                        return (
                            <div className={classes.pdf}>
                                <a href={reportPdfUrl + report.pdf_string} target="blank">
                                    <img src={PDF} alt="file" />
                                    <p>
                                        <span>{report.pdf_string.split('_')[1].split('-')[0]}</span>_
                                        {report.pdf_string.split('_')[1].split('-')[1]}.
                                        {report.pdf_string.split('.')[1]}
                                    </p>
                                    <p>{`${report.created_at.slice(8, 10)}-${toMonthNameLong(
                                        report.created_at.slice(6, 7)
                                    )}-${report.created_at.slice(0, 4)}`}</p>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UploadedReports
