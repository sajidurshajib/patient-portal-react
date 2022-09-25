import ReportFetch from '../ReportFetch/ReportFetch'

export default function Surgery() {
    return (
        <div>
            <ReportFetch title={'Surgery Reports'} address={'patient_surgery'} />
        </div>
    )
}
