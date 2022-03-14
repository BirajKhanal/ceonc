import React, {useState, useEffect} from 'react'
import Select from 'react-select';

import CeoncQualityDomain from './CeoncQualityDomain'
import CeoncSignalFunction from './CeoncSignalFunction'
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