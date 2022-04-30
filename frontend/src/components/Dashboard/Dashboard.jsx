import React, { useEffect, useState } from 'react'

import Dataset1 from '../Dataset1'
import Dataset3 from '../Dataset3'
import { totalCount } from '../../utils/totalCount';
import { host } from '../../utils';
import Dataset4 from '../Dataset4/Dataset4';

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
      let res = await fetch(`${host}/bebeonc/qualitydomain`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData(totalCount(data))
        }
      }
    }

    const getRequestCeCount = async () => {
      let res = await fetch(`${host}/bebeonc/qualitydomain`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData1(totalCount(data))
        }
      }
    }

    const getRequestPalikaCount = async () => {
      let res = await fetch(`${host}/robson/csrate`, requestOptions)
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
              BC/BEONC Sites Implemented
              <div className="dash-count">
                {data}
              </div>
          </div>
          <div className="box">
              CEONC Sites Implemented
              <div className="dash-count">
                {data1}
              </div>
          </div>
          <div className="box">
              Robson CS Rate Count
              <div className="dash-count">
                {data2}
              </div>
          </div>
      </div>
      <Dataset1 graphWidth={graphWidth} location="dashboard"/>
      <Dataset3 graphWidth={graphWidth}/>
      <Dataset4 graphWidth={graphWidth} location="dashboard"/>
    </div>
  )
}