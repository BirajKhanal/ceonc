const { GrpSize } = require("./grpSize")

const averageCalc = (data) => {
    let sum = 0

    data.map((items) => {
        Object.entries(items).map(([k,v]) => {
            sum = sum + parseFloat(v)
        })
    })

    sum = sum/10

    return sum
}

const overallCsRate = (data, type) => {
    let list = []
    let sortData = []

    let fltData = "GROUP_FACILITY__4_NAME_OF_FACILITY"

    if (type === "overall") {
        data.map((items) => {
            if (!list.includes(items[fltData])) {
                list.push(items[fltData])
                let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
                sortData.push(
                    {
                        name: items[fltData],
                        data : [filtered]
                    }
                )
            } else {
                sortData.map((dataItems) => {
                    if (dataItems["name"] == items[fltData]) {
                        let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
                        let len = dataItems["data"].length
                        dataItems["data"][len] = filtered
                    }
                })
            }
        })

        sortData.map((items) => {
            items["name"] = items["name"].replace(/_/g, " ")
            if (type === "overall") {
                items["data"] = averageCalc(items["data"])
            } 
        })
    } else {
        return GrpSize(data, type)
    }

    return sortData
}

module.exports = {
    overallCsRate,
}