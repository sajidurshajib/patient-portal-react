import ReportFetch from '../ReportFetch/ReportFetch'

export default function Vaccination() {
    return (
        <div>
            <ReportFetch title={'Vaccination Records'} address={'patient_vaccination'} />
        </div>
    )
}
