import React, { useEffect, useState } from 'react'
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

const BcQualityDomain = ({graphWidth, data1, dataType1}) => {
  const [bcQualityDomain, setBcQualityDomain] = useState([])
  const [dataSort, setDataSort] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let filterType = "default"

  if (data1 === "year") {
    filterType = "year"
  } else if (data1 === "province") {
    filterType = "province"
  } else if (data1 === "palika") {
    filterType = "palika"
  } else if (data1 === "all") {
    filterType = "all"
  } else if (data1 === "month") {
    filterType = "month"
  }

  const getRequest = async () => {
    let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain', requestOptions)
    let data = await res.json()

    if (res.ok) {
      setBcQualityDomain(data)
    }
  }

  const getRequestYear = async () => {
    if (filterType === "year") {
      let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/year', requestOptions)
      let data = await res.json()

      if (res.ok) {
        setDataSort(data)
      }
    } else if (filterType === "province") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/province', requestOptions)
        let data = await res.json()

        if (res.ok) {
          setDataSort(data)
        }
    } else if (filterType === "palika") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/palika', requestOptions)
        let data = await res.json()

        if (res.ok) {
          setDataSort(data)
        }
    } else if (filterType === "all") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/all', requestOptions)
        let data = await res.json()

        if (res.ok) {
          setDataSort(data)
        }
    } else if (filterType === "month") {
        let res = await fetch('https://backend-ceonc.herokuapp.com/bebeonc/qualitydomain/month', requestOptions)
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
          if (items["name"] === dataType1) {
            return (
              <div key={index} className='graphItem'>
                <p className='text-center header-color'>{items["name"]}</p>
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
          }
          return null
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