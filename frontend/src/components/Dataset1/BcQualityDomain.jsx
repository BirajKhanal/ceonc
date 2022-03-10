import React, { useEffect, useState, useRef } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { color } from '../color';
import { dynamicGraph } from '../../utils/dynamicGraph';

const BcQualityDomain = ({graphWidth}) => {
  const [bcQualityDomain, setBcQualityDomain] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('https://ceonc.herokuapp.com/bebeoncqualitydomain', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setBcQualityDomain(data)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div>
      <div>
        <p className="text-center header-color">No of BC/BEONC status in 13 Quality Domains</p>
      </div>
      <BarChart
        width={dynamicGraph(graphWidth)}
        height={300}
        data={bcQualityDomain}
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

export default BcQualityDomain