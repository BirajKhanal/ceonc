import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import BcQualityDomain from './BcQualityDomain'
import BcSignalFunction from './BcSignalFunction'
import CeoncSignalFunction from './CeoncSignalFunction';
import CeoncQualityDomain from './CeoncQualityDomain';
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

  useEffect(() => {
    let dismount = false
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        mode: 'cors'
    }

    const getRequestPalikaProvince = async () => {
      let res = await fetch(`${host}/palikaprovince`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataSortPalikaProvince(data)
          setDataSortProvince(nameSort(data, "", "province")) 
        }
      }
    }


    // getRequestYear()
    // getRequestProvince()
    getRequestPalikaProvince()
    // getRequestPalika()
    return () => {
      dismount = true
    }
  }, [data])

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
                Year
                <Select 
                  className="select-dropdown" 
                  options={ dataSortYear }
                  value={value1}
                  onChange={(option) => {
                    setDataNew("year")
                    setDataTypeNew(option["label"])
                    setValue1(option)
                  }}
                />
            </div>
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
                    setValue1(option)
                    palikaSelector(option, "province")
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
        <h1 className="text-center header-color">Quality Improvement Process Reporting</h1>
        <div className="graphItemsContainer">
          {location === "nav"
            ? (
                <div className="graphItemContainer">
                    <BcQualityDomain graphWidth={graphWidth} data1={data || dataNew} dataType1={dataType || dataTypeNew}/>
                </div>
            ):null
          }
          <div className="graphItemContainer">
              <BcSignalFunction graphWidth={graphWidth} data2={data || dataNew} dataType2={dataType || dataTypeNew}/>
          </div>
          {location === "nav"
            ? (
                <div className="graphItemContainer">
                    <CeoncQualityDomain graphWidth={graphWidth} data3={data || dataNew} dataType3={dataType || dataTypeNew}/>
                </div>
            ):null
          }
          <div className="graphItemContainer">
              <CeoncSignalFunction graphWidth={graphWidth} data4={data || dataNew} dataType4={dataType || dataTypeNew}/>
          </div>
        </div>
    </div>
  )
}

export default Dataset1