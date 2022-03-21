import React, {useState, useEffect} from 'react'
import Select from 'react-select';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import CeoncQualityDomain from './CeoncQualityDomain'
import CeoncSignalFunction from './CeoncSignalFunction'
import { nameSort } from '../../utils';
import { yearList } from '../../utils';

const moment = require('moment')

const Dataset2 = ({graphWidth, data, dataType, location}) => {
  const [dataNew, setDataNew] = useState()
  const [dataTypeNew, setDataTypeNew] = useState()
  const [dataSortProvince, setDataSortProvince] = useState()
  const [dataSortPalika, setDataSortPalika] = useState()
  const [dataSortPalikaProvince, setDataSortPalikaProvince] = useState()
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [startDate, setStartDate] = useState(new Date());


  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  useEffect(() => {
    let dismount = false

    // const getRequestYear = async () => {
    //   let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/qualitydomain/year', requestOptions)
    //   let data = await res.json()

    //   if (!dismount) {
    //     if (res.ok) {
    //       setDataSortYear(yearList(data))
    //     }
    //   }
    // }

    // const getRequestProvince = async () => {
    //   let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/qualitydomain/province', requestOptions)
    //   let data = await res.json()

    //   if (!dismount) {
    //     if (res.ok) {
    //       setDataSortProvince(nameSort(data))
    //     }
    //   }
    // }

    // const getRequestPalika = async () => {
    //   let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/qualitydomain/palika', requestOptions)
    //   let data = await res.json()

    //   if (!dismount) {
    //     if (res.ok) {
    //       setDataSortPalika(nameSort(data))
    //     }
    //   }
    // }

    const getRequestPalikaProvince = async () => {
      let res = await fetch('/palikaprovince', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataSortPalikaProvince(data)
          setDataSortProvince(nameSort(data, "province"))
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

  const palikaSelector = (selected) => {
    let select = {}
    dataSortPalikaProvince.map((items) => {
      if (items["name"] === selected["label"]) {
        select = items["data"]
      }
    })
    setDataSortPalika(nameSort(select, "palika"))
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
                    setValue2("")
                    setValue3("")
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
                  selected={startDate}
                  maxDate={new Date()}
                  onChange={(date) => {
                    setStartDate(date)
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
                    palikaSelector(option)
                    setValue1(option)
                  }}
                />
            </div>
            <div className="box">
                Municipality
                <Select 
                  className="select-dropdown" 
                  options={ dataSortPalika }
                  value={value2}
                  onChange={(option) => {
                    setValue2(option)
                  }}
                />
            </div>
            <div className="box search-button" onClick={() => {
              setDataNew("all")
              setDataTypeNew({
                "date": moment(startDate).format("YYYY-MM-DD"),
                "province": value1,
                "palika": value2
              })
            }}
            >
              Search
            </div>
        </div>
      ): null
      }
        <h1 className="text-center header-color">Quality Improvement Process Reporting CEONC</h1>
        <div className="graphItemsContainer">
          <div className="graphItemContainer">
              <CeoncQualityDomain graphWidth={graphWidth} data3={data || dataNew} dataType3={dataType || dataTypeNew}/>
          </div>
          <div className="graphItemContainer">
              <CeoncSignalFunction graphWidth={graphWidth} data4={data || dataNew} dataType4={dataType || dataTypeNew}/>
          </div>
        </div>
    </div>
  )
}

export default Dataset2