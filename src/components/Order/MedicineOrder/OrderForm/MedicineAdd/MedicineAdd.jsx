import { faTrashAlt, faTrashArrowUp, faTrashRestore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useContext } from 'react'
import { Auth } from '../../../../../allContext'
import classes from './MedicineAdd.module.css'

export default function MedicineAdd({ lines, setLines, index }) {
    const [searchMedicine, setSearchMedicine] = useState('')
    const [allMedicines, setAllMedicines] = useState([])
    const [info, setInfo] = useState({})
    const [hide, setHide] = useState(false)

    const { stateAuth } = useContext(Auth)
    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiV1}/medicines/?search_medicine=${searchMedicine}&skip=0&limit=10`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setAllMedicines(data)
            } catch {
                setAllMedicines([])
            }
        }
        return fetchData()
    }, [token, apiV1, searchMedicine])

    const medicineHandle = (searchMedicine) => {
        if (searchMedicine.length > 0) {
            setHide(true)
        }
        if (searchMedicine.length < 1) {
            setHide(false)
        }
        setSearchMedicine(searchMedicine)
    }

    const changeQuantity = (value) => {
        let mainData = lines
        mainData[index].quantity = value
        mainData[index].unit_price_tp = 0
        mainData[index].unit_price_mrp = info?.unit_price
        mainData[index].total_mrp = Math.ceil(mainData[index].quantity * info?.unit_price)
        mainData[index].unit_discount_percent = 0
        mainData[index].total = Math.ceil(mainData[index].quantity * info?.unit_price)

        mainData[index].name = info?.name
        mainData[index].generic = info?.generic
        mainData[index].strength = info?.strength
        mainData[index].form = info?.form
        mainData[index].pharmaceuticals = info?.pharmaceuticals

        setLines([...mainData])
    }

    const removeItem = (index) => {
        setLines([...lines.slice(0, index), ...lines.slice(index + 1, lines.length)])
    }

    return (
        <div className={classes.medWrapper}>
            <div className={`${classes.formGrid} ${classes.formMargin}`}>
                <label>
                    <span>
                        Medicine <span style={{ color: 'red' }}>*</span>
                    </span>
                    <input
                        type="text"
                        value={searchMedicine}
                        onChange={(e) => medicineHandle(e.target.value)}
                        placeholder="search medicine"
                    />
                </label>
                {hide && (
                    <div className={classes.optAll}>
                        {info.name !== searchMedicine
                            ? allMedicines &&
                              allMedicines.map((info, i) => (
                                  <div className={classes.optSelect} key={i}>
                                      <div
                                          onClick={() => {
                                              setInfo(info)
                                              setSearchMedicine(info.name)
                                              setAllMedicines([])
                                          }}>
                                          <option value={info.id}>
                                              {info.name} | {info.form} | {info.strength}
                                          </option>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                )}
                <label>
                    <span>Unit Price</span>
                    <span className={classes.fetchLabel}>
                        {info?.unit_price} <p>.</p>
                    </span>
                </label>
                <label>
                    <span>
                        Quantity <span style={{ color: 'red' }}>*</span>
                    </span>
                    <input
                        type="number"
                        value={lines[index].quantity}
                        onChange={(e) => changeQuantity(parseInt(e.target.value))}
                        min={1}
                        required
                    />
                </label>
                <label>
                    <span>Strength</span>
                    <span className={classes.fetchLabel}>
                        {info?.strength} <p>.</p>
                    </span>
                </label>
                <label>
                    <span>Form</span>
                    <span className={classes.fetchLabel}>
                        {info?.form} <p>.</p>
                    </span>
                </label>

                <label>
                    <span>MRP</span>
                    <span className={classes.fetchLabel}>
                        {isNaN(lines[index].total_mrp) !== true ? lines[index].total_mrp : ''} <p>.</p>
                    </span>
                </label>

                <button className={classes.cross} onClick={() => removeItem(index)}>
                    <FontAwesomeIcon icon={faTrashRestore} />
                </button>
            </div>
        </div>
    )
}
