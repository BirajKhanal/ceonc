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

const KnowledgeSkill = ({graphWidth, data1, dataType1}) => {
  const [hfImplement, setHfImplement] = useState([])
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
      let res = await fetch(`${host}/hf/knowledge`, requestOptions)
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
              "startDate": dataType1["startDate"],
              "endDate": dataType1["endDate"],
              "province": dataType1["province"] === "All" ? "" : dataType1["province"],
              "district": dataType1["district"] === "All" ? "" : dataType1["district"],
              "palika": dataType1["palika"] === "All" ? "" : dataType1["palika"],
              "facility": dataType1["facility"] === "All" ? "" : dataType1["facility"]
            }), 
            mode: 'cors'
        }

        let res = await fetch(`${host}/hf/filter/knowledge`, requestOptionsBody)
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
  }, [dataType1])

  if (filterType !== "default") {
    return (
      <div className=''>
        {dataSort.map((items, index) => {
          return (
            <div key={index} className='graphItem'>
              <p className='text-center header-color'>{items["date"]} {items["province"]} {items["district"]} {items["palika"]} {items["facility"]}</p>
              {items["data"].map((item, index) => {
                return (
                  <div key={index}>
                    <div>
                      <p className="text-center header-color text_width">% Score achieved by MNH service providers on Knowledge and Skill during clinical mentoring @ {item["name"]}</p>
                    </div>
                    <BarChart
                      width={dynamicGraph(graphWidth)}
                      height={500}
                      data={item["data"]}
                    >
                      <CartesianGrid strokeDasharray="9 9" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={({active, payload, label}) => {
                        if (active && payload && payload.length) (
                          <div className="custom-tooltip">
                            <p className="label">{`${label} : ${payload[0].value}`}</p>
                          </div>
                        )
                        return null
                      }}
                      />
                      <Bar dataKey="value" fill={color.color_4} />
                    </BarChart>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  } else {
      return (
        <div className=''>
          {hfImplement.map((items, index) => {
            return(
              <div key={index} className="graphItem">
                <div>
                  <p className="text-center header-color text_width">% Score achieved by MNH service providers on Knowledge and Skill during clinical mentoring @ {items["name"]}</p>
                </div>
                <BarChart
                  width={dynamicGraph(graphWidth)}
                  height={500}
                  data={items["data"]}
                >
                  <CartesianGrid strokeDasharray="9 9" />
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip content={({active, payload, label}) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="custom-tooltip">
                          <p className="label">{`${label}`}</p>
                          <p className="label" style={{color: color.color_4, marginTop: 10}}>value: {`${payload[0].value}`} %</p>
                        </div>
                      )
                    }
                    return null
                  }}/>
                  <Bar dataKey="value" fill={color.color_4} />
                </BarChart>
              </div>
            )
          })}
        </div>
      )
  }
}

export default KnowledgeSkill