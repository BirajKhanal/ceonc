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
  }

  const getRequest = async () => {
    let res = await fetch('http://localhost:4000/ceonc/signalfunction', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setData(data)
    }
  }

  const getRequestYear = async () => {
    if (filterType === "year") {
      let res = await fetch('http://localhost:4000/ceonc/signalfunction/year', requestOptions)
      let data = await res.json()

      if (res.ok) {
        setDataSort(data)
      }
    } else if (filterType === "province") {
        let res = await fetch('http://localhost:4000/ceonc/signalfunction/province', requestOptions)
        let data = await res.json()

        if (res.ok) {
          setDataSort(data)
        }
    } else if (filterType === "palika") {
        let res = await fetch('http://localhost:4000/ceonc/signalfunction/palika', requestOptions)
        let data = await res.json()

        if (res.ok) {
          setDataSort(data)
        }
    }
  }

  useEffect(() => {
    getRequest()
    getRequestYear()
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