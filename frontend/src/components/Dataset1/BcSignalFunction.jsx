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

import { color } from '../color';
import { dynamicGraph } from '../../utils/dynamicGraph';

const BcSignalFunction = ({graphWidth, data2, dataType2}) => {
  const [data, setdata] = useState([])
  const [dataSort, setDataSort] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let filterType = "default"

  if (data2 === "year") {
    filterType = "year"
  } else if (data2 === "province") {
    filterType = "province"
  } else if (data2 === "palika") {
    filterType = "palika"
  } else if (data2 === "all") {
    filterType = "all"
  } else if (data2 === "month") {
    filterType = "month"
  }

  useEffect(() => {
    let dismount = false

    const getRequest = async () => {
      let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction', requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setdata(data)
        }
      }
    }

    const getRequestYear = async () => {
      if (filterType === "year") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction/year', requestOptions)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      } else if (filterType === "province") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction/province', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "palika") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction/palika', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "all") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction/all', requestOptions)
          let data = await res.json()

          if (!dismount) {
            if (res.ok) {
              setDataSort(data)
            }
          }
      } else if (filterType === "month") {
          let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/signalfunction/month', requestOptions)
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
          if (items["name"] === dataType2) {
            return (
              <div key={index} className='graphItem'>
                <p className="text-center header-color">{items["name"]}</p>
                <div>
                  <p className="text-center header-color">No of BC/BEONC status in 7 Signal Function</p>
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
          <p className="text-center header-color">No of BC/BEONC status in 7 Signal Function</p>
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

export default BcSignalFunction