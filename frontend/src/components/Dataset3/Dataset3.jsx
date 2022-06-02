import React, {useEffect, useState} from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import HFImplement from './HFImplement'
import KnowledgeSkill from './KnowledgeSkill';
import { nameSort } from '../../utils';
import { host } from '../../utils';

const moment = require('moment')

const Dataset1 = ({graphWidth, data, dataType, location}) => {
  const [dataNew, setDataNew] = useState()
  const [dataTypeNew, setDataTypeNew] = useState()
  const [dataSortProvince, setDataSortProvince] = useState()
  const [dataSortDistrict, setDataSortDistrict] = useState()
  const [dataSortPalika, setDataSortPalika] = useState()
  const [dataSortFacility, setDataSortFacility] = useState()
  const [dataSortPalikaProvince, setDataSortPalikaProvince] = useState()
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  useEffect(() => {
    let dismount = false

    // const getRequestProvince = async () => {
    //   let res = await fetch('/hf/province', requestOptions)
    //   let data = await res.json()

    //   if (!dismount) {
    //     if (res.ok) {
    //       setDataSortProvince(nameSort(data))
    //     }
    //   }
    // }

    // const getRequestPalika = async () => {
    //   let res = await fetch('/hf/palika', requestOptions)
    //   let data = await res.json()

    //   if (!dismount) {
    //     if (res.ok) {
    //       setDataSortPalika(nameSort(data))
    //     }
    //   }
    // }
    const getRequestPalikaProvince = async () => {
      let res = await fetch(`${host}/palikaprovince`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataSortPalikaProvince(data)
          setDataSortProvince(nameSort(data,"", "province"))
        }
      }
    }

    // getRequestProvince()
    // getRequestPalika()
    getRequestPalikaProvince()
    return () => {
      dismount = true
    }
  }, [])

  const palikaSelector = (selected, type) => {
    if (type === "province") {
      setDataSortDistrict(nameSort(dataSortPalikaProvince, selected, "district"))
    }
    if (type === "district") {
      setDataSortPalika(nameSort(dataSortPalikaProvince, selected, "palika"))
    }
    if (type === "palika") {
      setDataSortFacility(nameSort(dataSortPalikaProvince, selected, "facility"))
    }
  }

  return (
    <div>
      {location === "nav"
      ? (
        <div className='topContainer'>
            {/* <div className="box">
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
            </div> */}
            <div className="box">
                Date
                <DatePicker
                  className="select-date"
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange={true}
                  isClearable={true}
                  onChange={(dates) => {
                    setDateRange(dates)
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
                    setValue2("")
                    setValue3("")
                    setValue4("")
                    palikaSelector(option, "province")
                    setValue1(option)
                  }}
                />
            </div>
            <div className="box">
                District
                <Select 
                  className="select-dropdown" 
                  options={ dataSortDistrict }
                  value={value2}
                  onChange={(option) => {
                    setValue3("")
                    setValue4("")
                    setValue2(option)
                    palikaSelector(option, "district")
                  }}
                />
            </div>
            <div className="box">
                Municipality
                <Select 
                  className="select-dropdown" 
                  options={ dataSortPalika }
                  value={value3}
                  onChange={(option) => {
                    setValue4("")
                    setValue3(option)
                    palikaSelector(option, "palika")
                  }}
                />
            </div>
            <div className="box">
                Name of Health Facility
                <Select 
                  className="select-dropdown" 
                  options={ dataSortFacility }
                  value={value4}
                  onChange={(option) => {
                    setValue4(option)
                    palikaSelector(option, "facility")
                  }}
                />
            </div>
            <div className="box search-button" onClick={() => {
              setDataNew("all")
              setDataTypeNew({
                "startDate": startDate ? moment(startDate).format("YYYY-MM-DD") : "",
                "endDate": endDate ? moment(endDate).format("YYYY-MM-DD") : "",
                "province": value1["label"] ? value1["label"] : "",
                "district": value2["label"] ? value2["label"] : "",
                "palika": value3["label"] ? value3["label"] : "",
                "facility": value4["label"] ? value4["label"] : ""
              })
            }}
            >
              Search
            </div>
        </div>
      ): null
      }
        <h1 className="text-center header-color">Onsite Clinical Coaching Mentoring</h1>
        <div className="graphItems">
          <div className="graphItem">
              <HFImplement graphWidth={graphWidth} data={data || dataNew} dataType={dataType || dataTypeNew}/>
          </div>
          {location === "nav"
          ? (
            <div className="graphItem">
                <KnowledgeSkill graphWidth={graphWidth} data1={data || dataNew} dataType1={dataType || dataTypeNew}/>
            </div>
          ): null
          }
        </div>
    </div>
  )
}

export default Dataset1