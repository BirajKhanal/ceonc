import React, {useEffect, useState} from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import HFImplement from './HFImplement'
import { nameSort } from '../../utils';

const moment = require('moment')

const Dataset1 = ({graphWidth, data, dataType, location}) => {
  const [dataNew, setDataNew] = useState()
  const [dataTypeNew, setDataTypeNew] = useState()
  const [dataSortProvince, setDataSortProvince] = useState()
  const [dataSortPalika, setDataSortPalika] = useState()
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  useEffect(() => {
    let dismount = false

    const getRequestProvince = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/hf/province', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataSortProvince(nameSort(data))
        }
      }
    }

    const getRequestPalika = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/hf/palika', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataSortPalika(nameSort(data))
        }
      }
    }

    getRequestProvince()
    getRequestPalika()
    return () => {
      dismount = true
    }
  }, [])


  return (
    <div>
      {location === "nav"
      ? (
        <div className='topContainer'>
            <div className="box">
                Month
                <DatePicker
                  className="select-date"
                  selected={startDate}
                  maxDate={new Date()}
                  onChange={(date) => {
                    setStartDate(date)
                    setDataNew("month")
                    setDataTypeNew(moment(date).format("YYYY MMMM"))
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
            </div>
            <div className="box">
                Date
                <DatePicker
                  className="select-date"
                  selected={startDate1}
                  maxDate={new Date()}
                  onChange={(date) => {
                    setStartDate1(date)
                    setDataNew("all")
                    setDataTypeNew(moment(date).format("YYYY MMMM DD"))
                  }}
                />
            </div>
            <div className="box">
                Province
                <Select 
                  className="select-dropdown" 
                  options={ dataSortProvince }
                  value={value1}
                  onChange={(option) => {
                    setDataNew("province")
                    setDataTypeNew(option["label"])
                    setValue1(option)
                    setValue2("")
                  }}
                />
            </div>
            <div className="box">
                Palika
                <Select 
                  className="select-dropdown" 
                  options={ dataSortPalika }
                  value={value2}
                  onChange={(option) => {
                    setDataNew("palika")
                    setDataTypeNew(option["label"])
                    setValue2(option)
                    setValue1("")
                  }}
                />
            </div>
        </div>
      ): null
      }
        <h1 className="text-center header-color">Onsite Clinical Coaching Mentoring</h1>
        <div className="graphItems">
          <div className="graphItem">
              <HFImplement graphWidth={graphWidth} data={data || dataNew} dataType={dataType || dataTypeNew}/>
          </div>
        </div>
    </div>
  )
}

export default Dataset1