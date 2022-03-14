import React, {useEffect, useState} from 'react'
import Select from 'react-select';

import HFImplement from './HFImplement'
import { nameSort } from '../../utils/nameSort';

const Dataset1 = ({graphWidth, data, dataType, location}) => {
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
    let res = await fetch('http://localhost:4000/hf/province', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setDataSortProvince(nameSort(data))
    }
  }

  const getRequestPalika = async () => {
    let res = await fetch('http://localhost:4000/hf/palika', requestOptions)
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