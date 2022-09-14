import ReportFetch from '../ReportFetch/ReportFetch'

export default function Prescription() {
    return (
        <div>
            <ReportFetch title={'Prescriptions'} address={'patient_prescription'} />
        </div>
    )
}
