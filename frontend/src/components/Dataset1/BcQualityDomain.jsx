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
import { host } from '../../utils';

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


  useEffect(() => {
    let dismount = false

    const getRequest = async () => {
      let res = await fetch(`${host}/bebeonc/qualitydomain`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setBcQualityDomain(data)
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

        let res = await fetch(`${host}/bebeonc/qualitydomain/filter`, requestOptionsBody)
        let data = await res.json()

        if (!dismount) {
          if (res.ok) {
            setDataSort(data)
          }
        }
      }
    //   if (filterType === "year") {
    //     let res = await fetch('/bebeonc/qualitydomain/year', requestOptions)
    //     let data = await res.json()

    //     if (!dismount) {
    //       if (res.ok) {
    //         setDataSort(data)
    //       }
    //     }
    //   } else if (filterType === "province") {
    //       let res = await fetch('/bebeonc/qualitydomain/province', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "palika") {
    //       let res = await fetch('/bebeonc/qualitydomain/palika', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "all") {
    //       let res = await fetch('/bebeonc/qualitydomain/all', requestOptions)
    //       let data = await res.json()

    //       if (!dismount) {
    //         if (res.ok) {
    //           setDataSort(data)
    //         }
    //       }
    //   } else if (filterType === "month") {
    //       let res = await fetch('/bebeonc/qualitydomain/month', requestOptions)
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
  }, [dataType1])

  if (filterType !== "default") {
    return (
      <div className='graphItems'>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              <div>
                <p className="text-center header-color">No of BC/BEONC status in 13 Quality Domains</p>
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
                <Bar dataKey="good" stackId="a" fill={color.color_1}/>
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
          height={500}
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