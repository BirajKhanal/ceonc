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

const CeoncQualityDomain = () => {
  const [data, setData] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('http://localhost:4000/ceoncqualitydomain', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setData(data)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <div>
      <div>
        <p class="text-center">No of CEONC hospitals status in 8 Quality Domains</p>
      </div>
      <BarChart
        width={600}
        height={300}
        data={data}
      >
        <CartesianGrid strokeDasharray="9 9" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="good" stackId="a" fill="#00b150" />
        <Bar dataKey="medium" stackId="a" fill="#ffc100" />
        <Bar dataKey="poor" stackId="a" fill="#ff0000" />
      </BarChart>
    </div>
  )
}

export default CeoncQualityDomain