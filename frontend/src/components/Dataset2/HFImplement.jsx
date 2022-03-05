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

const HFImplement = () => {
  const [hfImplement, setHfImplement] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  const getRequest = async () => {
    let res = await fetch('http://localhost:4000/hfimplement', requestOptions)
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
        <p class="text-center">No. of HFs implemented SBA clinical coaching</p>
      </div>
      <BarChart
        width={600}
        height={300}
        data={hfImplement}
      >
        <CartesianGrid strokeDasharray="9 9" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="No of HFs(BC/BEONC) implemented" fill="#4472c4" />
        <Bar dataKey="No of CEONC implemented" fill="#ed7d31" />
      </BarChart>
    </div>
  )
}

export default HFImplement