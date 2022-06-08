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
import { host } from '../../utils';

import { color } from '../color';

const HFImplement = ({graphWidth, data, dataType}) => {
  const [hfImplement, setHfImplement] = useState([])
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
      let res = await fetch(`${host}/hf`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setHfImplement(data)
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
              "province": dataType["province"] === "All" ? "" : dataType["province"],
              "district": dataType["district"] === "All" ? "" : dataType["district"],
              "palika": dataType["palika"] === "All" ? "" : dataType["palika"],
              "facility": dataType["facility"] === "All" ? "" : dataType["facility"]
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
    //   if (filterType === "province") {
    //       let res = await fetch('/hf/province', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "palika") {
    //       let res = await fetch('/hf/palika', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "all") {
    //       let res = await fetch('/hf/all', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "month") {
    //       let res = await fetch('/hf/month', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   }
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
                <p className="text-center header-color">No. of Clinical Coaching Mentoring Conducted</p>
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
                <Bar dataKey="No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)" fill={color.color_4} />
                <Bar dataKey="No of Onsite Clinical Coaching Mentoring Conducted(CEONC)" fill={color.color_5} />
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
          <p className="text-center header-color">No. of Clinical Coaching Mentoring Conducted</p>
        </div>
        <BarChart
          width={dynamicGraph(graphWidth)}
          height={500}
          data={hfImplement}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)" fill={color.color_4} />
          <Bar dataKey="No of Onsite Clinical Coaching Mentoring Conducted(CEONC)" fill={color.color_5} />
        </BarChart>
      </div>
    )
  }
}

export default HFImplement