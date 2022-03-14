import React, { useEffect, useState } from 'react'
import Select from 'react-select';

import Dataset1 from '../Dataset1'
import Dataset2 from '../Dataset2'
import Dataset3 from '../Dataset3'
import { nameSort } from '../../utils/nameSort';

export const Dashboard = ({graphWidth}) => {
  const [data, setdata] = useState()
  const [dataType, setDataType] = useState()
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
        <div className='topContainer'>
            <div className="box" onClick={() => {
              setdata("year")
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
                    setdata("province")
                    setDataType(option["label"])
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
                    setdata("palika")
                    setDataType(option["label"])
                    setValue2(option)
                    setValue1("")
                  }}
                />
            </div>
        </div>
        <Dataset1 graphWidth={graphWidth} data={data} dataType={dataType} location="dashboard"/>
        <Dataset2 graphWidth={graphWidth} data={data} dataType={dataType}  location="dashboard"/>
        <Dataset3 graphWidth={graphWidth} data={data} dataType={dataType}  location="dashboard"/>
      </div>
  )
}