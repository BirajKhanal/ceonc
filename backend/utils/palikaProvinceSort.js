const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')
const sort5 = require('./hfSort')

const sortLogic = (data, fltData) => {
    let names = []
    let sortData = []

    data.map((items) => {
        if (!names.includes(items[fltData])) {
            names.push(items[fltData])
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

    return sortData
}

const palikaProvinceSort = (data, type, flt) => {
    let fltData = ""

    if (flt == "palika") {
        if (type == "hf") {
            fltData = "PALIKA"
        } else {
            fltData = "_3_PALIKA"
        }
    } else if (flt == "province") {
        if (type == "hf") {
            fltData = "PROVINCE"
        } else {
            fltData = "_1_PROVINCE"
        }
    } else if (flt == "palikaprovince") {
        if (type == "hf") {
            fltData = "PROVINCE"
        } else {
            fltData = "_1_PROVINCE"
        }
    } else if (flt == "district") {
        if (type == "hf") {
            fltData = "DISTRICT"
        } else {
            fltData = "_2_DISTRICT"
        }
    } else if (flt == "facility") {
        if (type == "hf") {
            fltData = "NAME_OF_FACILITY"
        } else {
            fltData = "_4_NAME_OF_FACILITY"
        }
    }

    sortData = sortLogic(data, fltData)

    sortData.map((items) => {
        if (flt == "palika") {
            items["name"] = items["name"].slice(7)
            items["name"] = items["name"].slice(0, -1)
            items["name"] = items["name"].replace(/_/g, " ")
        } else if (flt == "province") {
            items["name"] = items["name"].slice(3)
            items["name"] = items["name"].slice(0, -1)
            items["name"] = items["name"].replace(/_/g, " ")
        } else if (flt === "district") {
            items["name"] = items["name"].slice(3)
            items["name"] = items["name"].slice(0, -1)
            items["name"] = items["name"].replace(/_/g, " ")
        } else if (flt === "facility") {
            items["name"] = items["name"].slice(1)
            items["name"] = items["name"].replace(/_/g, " ")
        } else if (flt == "palikaprovince") {
            items["name"] = items["name"].slice(3)
            items["name"] = items["name"].slice(0, -1)
            items["name"] = items["name"].replace(/_/g, " ")

            items["data"].map((item) => {
                item["_3_PALIKA"] = item["_3_PALIKA"].slice(7)
                item["_3_PALIKA"] = item["_3_PALIKA"].slice(0, -1)
                item["_3_PALIKA"] = item["_3_PALIKA"].replace(/_/g, " ")
            })
        }
        if (type == "bcqd") {
            items["data"] = sort1.goodMediumPoorSort(items["data"])
        } else if (type == "bcsf") {
            items["data"] = sort2.goodMediumPoorSort(items["data"])
        } else if (type == "cqd") {
            items["data"] = sort3.goodMediumPoorSort(items["data"])
        } else if (type == "csf") {
            items["data"] = sort4.goodMediumPoorSort(items["data"])
        } else if (type == "hf") {
            items["data"] = sort5.countSort(items["data"])
        }
    })

    return sortData
}

module.exports = {
    palikaProvinceSort
}