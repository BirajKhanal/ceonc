import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { dynamicGraph } from '../../utils/dynamicGraph';

import { color } from '../color';

const HFImplement = ({graphWidth, data, dataType}) => {
  const [hfImplement, setHfImplement] = useState([])
  const [dataSort, setDataSort] = useState([])

  let filterType = "default"

  if (data === "year") {
    filterType = "default"
  } else if (data === "province") {
    filterType = "province"
  } else if (data === "palika") {
    filterType = "palika"
  } else if (data === "all") {
    filterType = "all"
  } else if (data === "month") {
    filterType = "month"
  }

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  useEffect(() => {
    let dismount = false
    const getRequest = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/hf', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setHfImplement(data)
        }
      }
    }

    const getRequestYear = async () => {
      if (filterType === "province") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/hf/province', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "palika") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/hf/palika', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "all") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/hf/all', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "month") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/hf/month', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      }
    }

    getRequest()
    getRequestYear()
    return () => {
      dismount = true
    }
  }, [filterType])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          if (items["name"] === dataType) {
            return (
              <div key={index} className='graphItem'>
                <p className='text-center header-color'>{items["name"]}</p>
                <div>
                  <p className="text-center header-color">No. of HFs implemented SBA clinical coaching</p>
                </div>
                <BarChart
                  width={dynamicGraph(graphWidth)}
                  height={300}
                  data={items["data"]}
                >
                  <CartesianGrid strokeDasharray="9 9" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="No of HFs(BC/BEONC) implemented" fill={color.color_1} />
                  <Bar dataKey="No of CEONC implemented" fill={color.color_3} />
                </BarChart>
              </div>
            )
          }
          return null
        })}
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <p className="text-center header-color">No. of HFs implemented SBA clinical coaching</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={300}
          data={hfImplement}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="No of HFs(BC/BEONC) implemented" fill={color.color_1} />
          <Bar dataKey="No of CEONC implemented" fill={color.color_3} />
        </BarChart>
      </div>
    )
  }
}

export default HFImplement