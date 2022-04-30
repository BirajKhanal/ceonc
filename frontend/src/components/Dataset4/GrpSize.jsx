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
    Scatter,
} from "recharts";
import { dynamicGraph } from '../../utils/dynamicGraph';
import { host } from '../../utils';
import Select from 'react-select';

import { color } from '../color';

const GrpSize = ({graphWidth, data, dataType}) => {
  const [dataReq, setDataReq] = useState([])
  const [dataPlot, setDataPlot] = useState()
  const [dataSort, setDataSort] = useState([])
  const [options, setOptions] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [scatterData, setScatterData] = useState(["NOBEL_MEDICAL_COLLEGE_MORANG"])

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
      let res = await fetch(`${host}/robson/grpsize`, requestOptions)
      let data = await res.json()

      if (!dismount) {
        if (res.ok) {
          setDataReq(data)
          setDataPlot(data)
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

  useEffect(() => {
    const optionSetter = () => {
      let optionIndiArr = []
      let optionArr = []

      dataReq.map((items) => {
        let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== "who" && k !== "name"));
        Object.entries(filtered).map(([k,v]) => {
          if (!optionIndiArr.includes(k)) {
            optionIndiArr.push(k)
            optionArr.push({
              value: k,
              label: k
            })
          }
        })
      })
      setOptions(optionArr)
    }
    setIsLoading(true)
    optionSetter()
  },[dataPlot])

  const scatterReturn = (data) => {
    let sctr = []
    let scrtDict = {}
    let fltData = []

    data.map((items) => {
      fltData.push(items["value"])
    })

    dataReq.map((items) => {
      let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== "who" && k !== "name"));
      Object.entries(filtered).map(([k, v]) => {
        fltData.map((itm) => {
          if (k === itm) {
            scrtDict[k] = v
          }
        })
      })
      sctr.push({
        name: items["name"],
        who: items["who"],
        ...scrtDict
      })
    })

    setScatterData(fltData)
    setDataPlot(sctr)
  }

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
                height={300}
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
          <p className="text-center header-color">Group CS Rate</p>
        </div>
      <div className='multi-dropdown'>
        {isLoading ? (
          <Select 
            defaultValue={options[0]}
            isMulti
            isSearchable
            options={options}
            onChange={(value) => {
              scatterReturn(value)
            }}
          />
        ):null}
      </div>
        <ComposedChart
          width={dynamicGraph(graphWidth)}
          height={300}
          data={dataPlot}
        >
          <CartesianGrid strokeDasharray="9 9" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="who" fill={color.color_4} />
          {scatterData.map((items, i) => {
            return (
              <Scatter dataKey={items} fill={color.color_1} key={i}/>
            )
          })}
        </ComposedChart>
      </div>
    )
  }
}

export default GrpSize