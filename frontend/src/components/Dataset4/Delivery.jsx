import React, { useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ComposedChart,
} from "recharts";
import { dynamicGraph } from '../../utils/dynamicGraph';
import { host } from '../../utils';

import { color } from '../color';

const Delivery = ({graphWidth, data, dataType}) => {
  const [dataReq, setDataReq] = useState([])
  const [dataSort, setDataSort] = useState([])

  let filterType = "default"

  if (data === "year") {
    filterType = "default"
  } else if (data === "province") {
    filterType = "province"
  } else if (data === "palika") {
    filterType = "palika"
  } else if (data === "all") {
    filterType = "all"
  } else if (data === "month") {
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
      let res = await fetch(`${host}/robson/delivery`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataReq(data)
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
              "startDate": dataType["startDate"],
              "endDate": dataType["endDate"],
              "province": dataType["province"],
              "district": dataType["district"],
              "palika": dataType["palika"],
              "facility": dataType["facility"]
            }), 
            mode: 'cors'
        }

        let res = await fetch(`${host}/hf/filter`, requestOptionsBody)
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
  }, [dataType])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              <div>
                <p className="text-center header-color">Group Size</p>
              </div>
              <BarChart
                width={dynamicGraph(graphWidth)}
                height={500}
                data={items["data"]}
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
        })}
      </div>
    )
  } else {
    return (
      <div className='graphItem'>
        <div>
          <p className="text-center header-color">Group Size</p>
        </div>
        <ComposedChart
          width={dynamicGraph(graphWidth)}
          height={500}
          data={dataReq}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="Total no of woman delivered" fill={color.color_1} />
            <Bar dataKey="Total no of CS" fill={color.color_2} />
            <Bar dataKey="UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_C_SECTIONS" fill={color.color_3} />
            <Bar dataKey="UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_TOTAL_DELIVERIES" fill={color.color_4} />
        </ComposedChart>
      </div>
    )
  }
}

export default Delivery