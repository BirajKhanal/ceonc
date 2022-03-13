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

const BcSignalFunction = ({graphWidth, data2}) => {
  const [data, setdata] = useState([])
  const [dataYear, setDataYear] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let year = "/"

  if (data2 === "year") {
    year = "/year"
  }

  let dataSort = year

  const getRequest = async () => {
    let res = await fetch('/bebeonc/signalfunction', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setdata(data)
    }
  }

  const getRequestYear = async () => {
    console.log(dataSort)
    if (dataSort === "/year") {
      let res = await fetch('/bebeonc/signalfunction/year', requestOptions)
      let data = await res.json()

      if (res.ok) {
        setDataYear(data)
      }
    }
  }

  useEffect(() => {
    getRequest()
    getRequestYear()
  }, [dataSort])

  if (dataSort === "/year") {
    return (
      <div className='graphItems'>
        {dataYear.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className="text-center header-color">{items["year"]}</p>
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