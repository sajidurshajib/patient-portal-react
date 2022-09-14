import React from 'react'
import ReportFetch from '../ReportFetch/ReportFetch'

export default function Medication() {
    return (
        <div>
            <ReportFetch title={'Medicine/Medication Reports'} address={'patient_medication'} />
        </div>
    )
}
