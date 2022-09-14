import ReportFetch from '../ReportFetch/ReportFetch'

export default function Vaccination() {
    return (
        <div>
            <ReportFetch title={'Vaccination History'} address={'patient_vaccination'} />
        </div>
    )
}
