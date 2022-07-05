import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { toMonthNameLong } from '../../../../utils/date'
import classes from './OrderList.module.css'
import { OrderPdfPrint } from './OrderPdf/OrderPdfPrint'

export default function OrderList({ services, medicines, setServiceId }) {
    console.log('s', medicines)
    const [pdfOpen, setPdfOpen] = useState(false)
    return (
        <div className={classes.wrapper}>
            <p>Medicine Order List</p>
            {services[1] &&
                services[1].map((service, index) => (
                    <div className={classes.flexWrapper} key={index}>
                        <p>
                            <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
                            <span>{service.service_name.replace(/_/g, ' ')}</span>
                        </p>
                        <p>
                            {`${service.order_placement.slice(8, 10)}-${toMonthNameLong(
                                service.order_placement.slice(6, 7)
                            )}-${service.order_placement.slice(0, 4)}`}
                        </p>
                        <p>{service.order_value} TK</p>
                        <p className={classes.status}>
                            <span
                                className={
                                    service.order_status === 'done'
                                        ? classes.active
                                        : service.order_status === 'processing'
                                        ? classes.progress
                                        : service.order_status === 'emergency'
                                        ? classes.delete
                                        : service.order_status === 'cancel'
                                        ? classes.cancel
                                        : classes.waiting
                                }>
                                {service.order_status}
                            </span>
                        </p>
                        <button
                            onClick={() => {
                                setServiceId(service?.id)
                                setPdfOpen(index)
                            }}>
                            Download
                        </button>
                        {pdfOpen === index && (
                            <OrderPdfPrint props={[service, medicines]} setPdfOpen={setPdfOpen} index={index} />
                        )}
                    </div>
                ))}
        </div>
    )
}