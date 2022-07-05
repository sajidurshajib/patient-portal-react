import { faFlask, faLaptopMedical, faTruck, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserInfo } from '../../../../../allContext'
import Logo from '../../../../../assets/img/logo.png'
import { numToWords } from '../../../../../utils/numToWord'
import classes from './OrderPdf.module.css'

export const Pdf = React.forwardRef((props, ref) => {
    const medicines = props.props[1][1]
    const details = props.props[0]
    let sl = 0

    const { stateUser } = useContext(UserInfo)
    const userDetail = stateUser.info

    return (
        <div ref={ref} className={classes.bodyPdf}>
            <div className={classes.page}>
                <div className={classes.arrow}>
                    <p>Medicine Order</p>
                </div>
                <header className={classes.clear}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={classes.company}>
                        {/* <div className={classes.name}>HEALTHx Pharmacy</div> */}
                        <div>House 26, Road 2, Banani</div>
                        <div>+88 01322658481</div>
                        <div>
                            <Link to="#">contact@healthx.com.bd</Link>
                        </div>
                    </div>
                </header>

                <div>
                    <div className={`${classes.details} ${classes.clear}`}>
                        <div className={classes.client}>
                            <div className={classes.to}>INVOICE TO:</div>
                            <div className={classes.name}>{userDetail?.name}</div>
                            <div className={classes.mobile}>{userDetail?.phone}</div>
                            <div className={classes.address}>{details?.current_address}</div>
                        </div>
                        <div className={classes.invoice}>
                            <div className={classes.name}>INVOICE: HX-M{details?.id + 10000000}</div>
                            <div className={classes.date}>
                                Order Date:{' '}
                                {details?.order_placement !== null ? (
                                    <>{details?.order_placement.split('T')[0]}</>
                                ) : (
                                    '--'
                                )}
                            </div>
                            <div className={classes.date}>
                                Delivery Date:{' '}
                                {details?.order_completion !== null ? (
                                    <>{details?.order_completion.split('T')[0]}</>
                                ) : (
                                    '--'
                                )}
                            </div>
                        </div>
                    </div>
                    <table className={classes.tablePdf}>
                        <tr>
                            <th className={classes.no}>Sl.</th>
                            <th className={classes.desc}>Medicine Description</th>
                            <th className={classes.unit}>Unit Price (TK)</th>
                            <th className={classes.qty}>Quantity</th>
                            <th className={classes.desc}>MRP (TK)</th>
                            <th className={classes.desc}>Discount</th>
                            <th className={classes.total}>Total (TK)</th>
                        </tr>
                        {medicines &&
                            medicines.map((med) => (
                                <tr key={med.id}>
                                    <td className={classes.desc}> {(sl = sl + 1)} </td>
                                    <td className={classes.desc}>
                                        {med.form.slice(0, 3)}. {med.name} - {med.strength}
                                    </td>
                                    <td className={classes.desc}> {med.unit_price_mrp} </td>
                                    <td className={classes.desc}> {med.quantity} </td>
                                    <td className={classes.desc}> {med.total_mrp} </td>
                                    <td className={classes.desc}>
                                        {med.unit_discount_percent} <span>%</span>
                                    </td>
                                    <td className={classes.desc}> {med.total} </td>
                                </tr>
                            ))}
                    </table>
                    <div className={classes.amountFlex}>
                        <div>
                            <div className={classes.notices}>
                                <div>Payment:</div>
                                <div className={classes.notice}>Cash On Delivery</div>
                            </div>
                        </div>
                        <table className={classes.amount}>
                            <tr>
                                <td> Subtotal: </td>
                                <td>
                                    <span>{details?.order_value} TK</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Discount:</td>
                                <td>
                                    <span>{details?.discount_percent} %</span>
                                </td>
                            </tr>
                            <div className={classes.border}></div>

                            <tr>
                                <th>Total Payable Amount: </th>
                                <th>
                                    <span>{details?.payable_amount} TK</span>
                                </th>
                            </tr>
                        </table>
                    </div>

                    <div className={classes.note}>Remarks : {details?.remarks}</div>
                    <div className={classes.amountWord}>
                        <div>
                            In Words: <span>{numToWords(details?.payable_amount)} </span>
                        </div>
                        <div>
                            Payment Method: <span>COD or Bkash 01533478338 (Personal) </span>
                        </div>
                    </div>

                    <div className={classes.bgLogo}>
                        <img src={Logo} alt="" />
                    </div>

                    <div className={classes.boxAll}>
                        <div className={classes.text}>
                            <p>For Any Queries, Refund or Support: Please Contact at 01322658481</p>
                            <span>Thanks for choosing us! Stay healthy!</span>
                        </div>
                        <div className={classes.service}>
                            <div style={{ fontWeight: '600' }}>Our Services:</div>
                            <div>
                                <FontAwesomeIcon icon={faLaptopMedical} className={classes.icon} />
                                Tele Health
                            </div>
                            <div>|</div>
                            <div>
                                <FontAwesomeIcon icon={faTruck} className={classes.icon} />
                                Medicine Delivery
                            </div>
                            <div>|</div>
                            <div>
                                <FontAwesomeIcon icon={faFlask} className={classes.icon} />
                                Sample Collection (Blood/Urine)
                            </div>
                            <div>|</div>
                            <div>
                                <FontAwesomeIcon icon={faUserNurse} className={classes.icon} />
                                Nursing/Attendant
                            </div>
                        </div>
                    </div>
                    <div className={classes.devlop}>Developed by Healthx BD</div>
                </div>
            </div>
        </div>
    )
})
