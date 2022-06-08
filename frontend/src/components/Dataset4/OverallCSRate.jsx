import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { dynamicGraph } from '../../utils/dynamicGraph';
import { host } from '../../utils';

import { color } from '../color';

const OverallCSRate = ({graphWidth, data1, dataType1}) => {
  const [overallCSRate, setOverallCSRate] = useState([])
  const [dataSort, setDataSort] = useState([])

  let filterType = "default"

  if (data1 === "year") {
    filterType = "default"
  } else if (data1 === "province") {
    filterType = "province"
  } else if (data1 === "palika") {
    filterType = "palika"
  } else if (data1 === "all") {
    filterType = "all"
  } else if (data1 === "month") {
    filterType = "month"
  }

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  useEffect(() => {
    let dismount = false
    const getRequest = async () => {
      let res = await fetch(`${host}/robson/csrate`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setOverallCSRate(data)
        }
      }
    }

    const getRequestYear = async () => {
      if (filterType === "all") {
        let requestOptionsBody = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "startDate": dataType1["startDate"],
              "endDate": dataType1["endDate"],
              "province": dataType1["province"] === "All" ? "" : dataType1["province"],
              "district": dataType1["district"] === "All" ? "" : dataType1["district"],
              "palika": dataType1["palika"] === "All" ? "" : dataType1["palika"],
              "facility": dataType1["facility"] === "All" ? "" : dataType1["facility"]
            }), 
            mode: 'cors'
        }

        let res = await fetch(`${host}/robson/csrate/filter`, requestOptionsBody)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      }
    }

    getRequest()
    getRequestYear()
    return () => {
      dismount = true
    }
  }, [dataType1])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              <div>
                <p className="text-center header-color">Health Facilities with the Highest CS Rate</p>
              </div>
              <BarChart
                width={dynamicGraph(graphWidth)}
                height={500}
                data={items["data"]}
              >
                <CartesianGrid strokeDasharray="9 9" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="data" fill={color.color_4} />
              </BarChart>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='graphItem'>
        <div>
          <p className="text-center header-color">Health Facilities with the Highest CS Rate</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={500}
          data={overallCSRate}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="data" fill={color.color_4} />
        </BarChart>
      </div>
    )
  }
}

export default OverallCSRate