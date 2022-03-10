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

const BcSignalFunction = ({graphWidth}) => {
  const [data, setdata] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('https://backend-ceonc.herokuapp.com/api/v1/bebeoncsignalfunction', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setdata(data)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])


  return (
    <div>
      <div>
        <p className="text-center header-color">No of BC/BEONC status in 7 Signal Functions</p>
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

export default BcSignalFunction