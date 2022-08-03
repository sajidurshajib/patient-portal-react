import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Pdf } from './OrderPdf'
import classes from './OrderPdfPrint.module.css'

export const OrderPdfPrint = ({ props, index, setPdfOpen }) => {
    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div key={() => index} className={classes.containerPdf}>
            <div className={classes.formPdf}>
                <div className={classes.close} onClick={() => setPdfOpen(false)}>
                    &times;
                </div>

                <div className={classes.bodyPdf}>
                    <button onClick={handlePrint} className={classes.buttonPdf}>
                        Print this out!
                    </button>
                    <Pdf props={props} ref={componentRef} />
                </div>
            </div>
        </div>
    )
}
