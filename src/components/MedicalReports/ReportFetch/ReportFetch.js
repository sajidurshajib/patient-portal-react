import { useState, useContext, useEffect } from 'react'
import { Auth } from '../../../allContext'
import PDF from '../../../assets/img/social/pdf.png'
import { toMonthNameLong } from '../../../utils/date'
import ReportUpload from '../ReportUpload/ReportUpload'
import classes from './ReportFetch.module.css'

const ReportFetch = ({ title, address }) => {
    const { stateAuth } = useContext(Auth)
    const [msg, setMsg] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    const [img, setImg] = useState([])
    const [pdf, setPdf] = useState([])
    const [imageViewer, setImageViewer] = useState(false)
    const [number, setNumber] = useState()

    const popup = () => {
        setImageViewer(!imageViewer)
    }

    useEffect(() => {
        let reportImgFunc = async () => {
            let reportImgFetch = await fetch(`${apiV1}/patient/reports/img/${address}?skip=0&limit=6`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await reportImgFetch.json()

            if (reportImgFetch.ok) {
                setImg(infoJson)
            }
        }
        try {
            reportImgFunc()
        } catch (e) {
            setImg([])
        }
    }, [apiV1, token, msg, address])

    useEffect(() => {
        let reportPdfFunc = async () => {
            let reportPdfFetch = await fetch(`${apiV1}/patient/reports/pdf/${address}?skip=0&limit=6`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })
            let infoJson = await reportPdfFetch.json()

            if (reportPdfFetch.ok) {
                setPdf(infoJson)
            }
        }
        try {
            reportPdfFunc()
        } catch (e) {
            setPdf([])
        }
    }, [apiV1, token, msg, address])

    // let imgReport = Array.from(reportImg)
    // let pdfReport = Array.from(reportPdf)

    const reportImgUrl = `${apiV1}/images/${address}/`
    const reportPdfUrl = `${apiV1}/pdf/${address}/`

    return (
        <div className={classes.UploadedReports}>
            <p>{title}</p>
            <div className={classes.container}>
                <div className={classes.Header}>
                    <ReportUpload msg={msg} setMsg={setMsg} address={address} />
                </div>

                <div className={classes.files}>
                    {img[1]?.map((report, index) => {
                        return (
                            <div key={index}>
                                <div
                                    onClick={() => {
                                        setNumber(index)
                                        popup()
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
                            <img src={reportImgUrl + img[1][number]?.image_string} alt="viewer" />
                            <button onClick={popup} className={classes.closeBtn}>
                                x
                            </button>
                        </div>
                    </div>
                )}

                <div className={classes.files}>
                    {pdf[1]?.map((report, index) => {
                        return (
                            <div className={classes.pdf} key={index}>
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

export default ReportFetch
