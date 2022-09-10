import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { toMonthNameShort } from '../../../../utils/date'
import classes from './OrderList.module.css'
import { OrderPdfPrint } from './OrderPdf/OrderPdfPrint'

export default function OrderList({ services, medicines, setServiceId }) {
    const [pdfOpen, setPdfOpen] = useState(false)
    return (
        <div className={classes.wrapper}>
            <p>Order List</p>
            <div className={classes.container}>
                {services[1] &&
                    services[1].map((service, index) =>
                        service.service_name === 'medicine_order' || service.service_name === 'health_plan' ? (
                            <div className={classes.gridWrapper} key={index}>
                                <p>
                                    <FontAwesomeIcon icon={faFileAlt} className={classes.icon} />
                                    <span>{service.service_name.replace(/_/g, ' ')}</span>
                                </p>
                                <p>{service.order_value}TK</p>
                                <p>
                                    {`${service.order_placement.slice(8, 10)}-${toMonthNameShort(
                                        service.order_placement.slice(6, 7)
                                    )}-${service.order_placement.slice(0, 4)}`}
                                </p>
                                <p className={classes.status}>
                                    <span
                                        className={
                                            service.order_status === 'done'
                                                ? classes.active
                                                : service.order_status === 'processing'
                                                ? classes.progress
                                                : service.order_status === 'running'
                                                ? classes.running
                                                : service.order_status === 'emergency'
                                                ? classes.delete
                                                : service.order_status === 'cancel'
                                                ? classes.cancel
                                                : classes.waiting
                                        }>
                                        {service.order_status}
                                    </span>
                                </p>
                                {service.service_name === 'medicine_order' ? (
                                    <div className={classes.btn}>
                                        <button
                                            onClick={() => {
                                                setServiceId(service?.id)
                                                setPdfOpen(index)
                                            }}>
                                            Download
                                        </button>
                                    </div>
                                ) : (
                                    <div className={classes.btn}>
                                        <button style={{ backgroundColor: 'var(--light-grey)', cursor: 'default' }}>
                                            Download
                                        </button>
                                    </div>
                                )}
                                {pdfOpen === index && (
                                    <OrderPdfPrint props={[service, medicines]} setPdfOpen={setPdfOpen} index={index} />
                                )}
                            </div>
                        ) : (
                            ''
                        )
                    )}
            </div>
        </div>
    )
}
