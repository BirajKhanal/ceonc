import React, { useState, useEffect } from 'react'
import Select from 'react-select';

import BcQualityDomain from './BcQualityDomain'
import BcSignalFunction from './BcSignalFunction'
import { nameSort } from '../../utils/nameSort';

const Dataset2 = ({graphWidth, data, dataType, location}) => {
  const [dataNew, setDataNew] = useState()
  const [dataTypeNew, setDataTypeNew] = useState()
  const [dataSortProvince, setDataSortProvince] = useState()
  const [dataSortPalika, setDataSortPalika] = useState()
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()


  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequestProvince = async () => {
    let res = await fetch('http://localhost:4000/bebeonc/qualitydomain/province', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setDataSortProvince(nameSort(data))
    }
  }

  const getRequestPalika = async () => {
    let res = await fetch('http://localhost:4000/bebeonc/qualitydomain/palika', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setDataSortPalika(nameSort(data))
    }
  }

  useEffect(() => {
    getRequestProvince()
    getRequestPalika()
  }, [])

  return (
    <div>
      {location === "nav"
      ? (
        <div className='topContainer'>
            <div className="box" onClick={() => {
              setDataNew("year")
            }}>
                Date
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
        <h1 className="text-center header-color">Quality Improvement Process Reporting BC/BEONC</h1>
        <div className="graphItemsContainer">
          <div className="graphItemContainer">
              <BcQualityDomain graphWidth={graphWidth} data1={data || dataNew} dataType1={dataType || dataTypeNew}/>
          </div>
          <div className="graphItemContainer">
              <BcSignalFunction graphWidth={graphWidth} data2={data || dataNew} dataType2={dataType || dataTypeNew}/>
          </div>
        </div>
    </div>
  )
}

export default Dataset2