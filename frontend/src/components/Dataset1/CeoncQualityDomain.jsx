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
import { host } from '../../utils';

const CeoncQualityDomain = ({graphWidth, data3, dataType3}) => {
  const [data, setData] = useState([])
  const [dataSort, setDataSort] = useState([])

  const requestOptions = {
      method: 'GET',
      headers: {
          "Content-Type": "application/json",
      },
      mode: 'cors'
  }

  let filterType = "default"

  if (data3 === "year") {
    filterType = "year"
  } else if (data3 === "province") {
    filterType = "province"
  } else if (data3 === "palika") {
    filterType = "palika"
  } else if (data3 === "all") {
    filterType = "all"
  } else if (data3 === "month") {
    filterType = "month"
  }


  useEffect(() => {
    let dismount = false

    const getRequest = async () => {
      let res = await fetch(`${host}/ceonc/qualitydomain`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setData(data)
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
              "startDate": dataType3["startDate"],
              "endDate": dataType3["endDate"],
              "province": dataType3["province"] === "All" ? "" : dataType3["province"],
              "district": dataType3["district"] === "All" ? "" : dataType3["district"],
              "palika": dataType3["palika"] === "All" ? "" : dataType3["palika"],
              "facility": dataType3["facility"] === "All" ? "" : dataType3["facility"]
            }), 
            mode: 'cors'
        }

        let res = await fetch(`${host}/ceonc/qualitydomain/filter`, requestOptionsBody)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      }
      // if (filterType === "year") {
      //   let res = await fetch('/ceonc/qualitydomain/year', requestOptions)
      //   let data = await res.json()

      //   if (!dismount) {
      //     if (res.ok) {
      //       setDataSort(data)
      //     }
      //   }
      // } else if (filterType === "province") {
      //     let res = await fetch('/ceonc/qualitydomain/province', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "palika") {
      //     let res = await fetch('/ceonc/qualitydomain/palika', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "all") {
      //     let res = await fetch('/ceonc/qualitydomain/all', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "month") {
      //     let res = await fetch('/ceonc/qualitydomain/month', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // }
    }

    getRequest()
    getRequestYear()
    return () => {
      dismount = true
    }
  }, [dataType3])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
                <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              <div>
                <p className="text-center header-color">No of CEONC hospitals status in 8 Quality Domains</p>
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
          <p className="text-center header-color">No of CEONC hospitals status in 8 Quality Domains</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={500}
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
}

export default CeoncQualityDomain