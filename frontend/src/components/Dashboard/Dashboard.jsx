import React, { useEffect, useState } from 'react'

import Dataset1 from '../Dataset1'
import Dataset2 from '../Dataset2'
import Dataset3 from '../Dataset3'
import { totalCount } from '../../utils/totalCount';

export const Dashboard = ({graphWidth}) => {
  const [data, setData] = useState()
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }


  useEffect(() => {
    let dismount = false

    const getRequestBeCount = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData(totalCount(data))
        }
      }
    }

    const getRequestCeCount = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData1(totalCount(data))
        }
      }
    }

    const getRequestPalikaCount = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/palika', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData2(data.length)
        }
      }
    }

    getRequestBeCount()
    getRequestCeCount()
    getRequestPalikaCount()
    return () => {
      dismount = true
    }
  }, [data])

  return (
    <div>
      <div className='topContainer'>
          <div className="box">
              BE/BEONC Highest Count
              <div className="dash-count">
                {data}
              </div>
          </div>
          <div className="box">
              CEONC Highest Count
              <div className="dash-count">
                {data1}
              </div>
          </div>
          <div className="box">
              Total No of Palika
              <div className="dash-count">
                {data2}
              </div>
          </div>
      </div>
      <Dataset1 graphWidth={graphWidth}/>
      <Dataset2 graphWidth={graphWidth}/>
      <Dataset3 graphWidth={graphWidth}/>
    </div>
  )
}