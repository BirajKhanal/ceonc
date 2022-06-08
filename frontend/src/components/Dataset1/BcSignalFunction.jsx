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

import { color } from '../color';
import { dynamicGraph } from '../../utils/dynamicGraph';
import { host } from '../../utils';

const BcSignalFunction = ({graphWidth, data2, dataType2}) => {
  const [data, setdata] = useState([])
  const [dataSort, setDataSort] = useState([])

  const requestOptions = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    },
    mode: 'cors'
  }

  let filterType = "default"

  if (data2 === "year") {
    filterType = "year"
  } else if (data2 === "province") {
    filterType = "province"
  } else if (data2 === "palika") {
    filterType = "palika"
  } else if (data2 === "all") {
    filterType = "all"
  } else if (data2 === "month") {
    filterType = "month"
  }

  useEffect(() => {
    let dismount = false

    const getRequest = async () => {
      let res = await fetch(`${host}/bebeonc/signalfunction`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setdata(data)
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
              "startDate": dataType2["startDate"],
              "endDate": dataType2["endDate"],
              "province": dataType2["province"] === "All" ? "" : dataType2["province"],
              "district": dataType2["district"] === "All" ? "" : dataType2["district"],
              "palika": dataType2["palika"] === "All" ? "" : dataType2["palika"],
              "facility": dataType2["facility"] === "All" ? "" : dataType2["facility"]
            }), 
            mode: 'cors'
        }

        let res = await fetch(`${host}/bebeonc/signalfunction/filter`, requestOptionsBody)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      }
      // if (filterType === "year") {
      //   let res = await fetch('/bebeonc/signalfunction/year', requestOptions)
      //   let data = await res.json()

      //   if (!dismount) {
      //     if (res.ok) {
      //       setDataSort(data)
      //     }
      //   }
      // } else if (filterType === "province") {
      //     let res = await fetch('/bebeonc/signalfunction/province', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "palika") {
      //     let res = await fetch('/bebeonc/signalfunction/palika', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "all") {
      //     let res = await fetch('/bebeonc/signalfunction/all', requestOptions)
      //     let data = await res.json()

      //     if (!dismount) {
      //       if (res.ok) {
      //         setDataSort(data)
      //       }
      //     }
      // } else if (filterType === "month") {
      //     let res = await fetch('/bebeonc/signalfunction/month', requestOptions)
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
  }, [dataType2])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
                <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              <div>
                <p className="text-center header-color">Readiness of BC/BEONC for delivering 7 Signal Function</p>
              </div>
              <BarChart
                width={dynamicGraph(graphWidth)}
                height={500}
                data={items["data"]}
              >
                <CartesianGrid strokeDasharray="9 9" />
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Standards Met" stackId="a" fill={color.color_1}/>
                <Bar dataKey="Standards Not Met" stackId="a" fill={color.color_3}/>
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
          <p className="text-center header-color">Readiness of BC/BEONC for delivering 7 Signal Function</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={500}
          data={data}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Standards Met" stackId="a" fill={color.color_1}/>
          <Bar dataKey="Standards Not Met" stackId="a" fill={color.color_3}/>
        </BarChart>
      </div>
    )
  }
}

export default BcSignalFunction