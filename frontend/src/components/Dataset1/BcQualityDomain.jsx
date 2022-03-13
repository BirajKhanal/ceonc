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

const BcQualityDomain = ({graphWidth, data1}) => {
  const [bcQualityDomain, setBcQualityDomain] = useState([])
  const [bcQualityDomainYear, setBcQualityDomainYear] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let year = "/"

  if (data1 === "year") {
    year = "/year"
  }

  let dataSort = year


  const getRequest = async () => {
    let res = await fetch('/bebeonc/qualitydomain', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setBcQualityDomain(data)
    }
  }

  const getRequestYear = async () => {
    if (dataSort === "/year") {
      let res = await fetch('/bebeonc/qualitydomain/year', requestOptions)
      let data = await res.json()

      if (res.ok) {
        setBcQualityDomainYear(data)
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
        {bcQualityDomainYear.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className='text-center header-color'>{items["year"]}</p>
              <div>
                <p className="text-center header-color">No of BC/BEONC status in 13 Quality Domains</p>
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
}


export default BcQualityDomain