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

const CeoncSignalFunction = ({graphWidth, data4, dataType4}) => {
  const [data, setData] = useState([])
  const [dataSort, setDataSort] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let filterType = "default"

  if (data4 === "year") {
    filterType = "year"
  } else if (data4 === "province") {
    filterType = "province"
  } else if (data4 === "palika") {
    filterType = "palika"
  } else if (data4 === "all") {
    filterType = "all"
  } else if (data4 === "month") {
    filterType = "month"
  }

  useEffect(() => {
    let dismount = false

    const getRequest = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData(data)
        }
      }
    }

    const getRequestYear = async () => {
      if (filterType === "year") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction/year', requestOptions)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      } else if (filterType === "province") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction/province', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "palika") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction/palika', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "all") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction/all', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "month") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/ceonc/signalfunction/month', requestOptions)
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
          if (items["name"] === dataType4) {
            return (
              <div key={index} className="graphItem">
                <p className="text-center header-color">{items["name"]}</p>
                <div>
                  <p className="text-center header-color">No of CEONC hospitals status in 9 Signal Function</p>
                </div>
                <BarChart
                  width={dynamicGraph(graphWidth)}
                  height={300}
                  data={items["data"]}
                >
                  <CartesianGrid strokeDasharray="9 9" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="good" stackId="a" fill={color.color_1} />
                  <Bar dataKey="medium" stackId="a" fill={color.color_2} />
                  <Bar dataKey="poor" stackId="a" fill={color.color_3} />
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
          <p className="text-center header-color">No of CEONC hospitals status in 9 Signal Function</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="good" stackId="a" fill={color.color_1} />
          <Bar dataKey="medium" stackId="a" fill={color.color_2} />
          <Bar dataKey="poor" stackId="a" fill={color.color_3} />
        </BarChart>
      </div>
    )
  }
}

export default CeoncSignalFunction