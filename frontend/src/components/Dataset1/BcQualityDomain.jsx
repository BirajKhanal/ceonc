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

const BcQualityDomain = () => {
  const [bcQualityDomain, setBcQualityDomain] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('http://localhost:4000/bebeoncqualitydomain', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setBcQualityDomain(data)
    }
  }

  useEffect(() => {
    getRequest()
  }, [])


  console.log(bcQualityDomain)

  return (
    <div>
      <div>
        <p class="text-center">No of BC/BEONC status in 13 Quality Domains</p>
      </div>
      <BarChart
        width={600}
        height={300}
        data={bcQualityDomain}
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

export default BcQualityDomain