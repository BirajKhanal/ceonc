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

const HFImplement = ({graphWidth}) => {
  const [hfImplement, setHfImplement] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('https://ceonc.herokuapp.com/hfimplement', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setHfImplement(data)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])


  // console.log(beQuality)

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

export default HFImplement