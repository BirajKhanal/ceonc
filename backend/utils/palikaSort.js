const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')

const palikaSort = (data, type) => {
    let palikaName = []
    let sortData = []

    data.map((items) => {
        if (!palikaName.includes(items["_3_PALIKA"])) {
            palikaName.push(items['_3_PALIKA'])
            let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== "_3_PALIKA"));
            sortData.push(
                {
                    name: items['_3_PALIKA'],
                    data : [filtered]
                }
            )
        } else {
            sortData.map((dataItems) => {
                if (dataItems["name"] == items["_3_PALIKA"]) {
                    let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== "_3_PALIKA"));
                    let len = dataItems["data"].length
                    dataItems["data"][len] = filtered
                }
            })
        }
    })

    sortData.map((items) => {
        items["name"] = items["name"].slice(7)
        items["name"] = items["name"].slice(0, -1)
        items["name"] = items["name"].replace(/_/g, " ")
        if (type == "bcqd") {
            items["data"] = sort1.goodMediumPoorSort(items["data"])
        } else if (type == "bcsf") {
            items["data"] = sort2.goodMediumPoorSort(items["data"])
        } else if (type == "cqd") {
            items["data"] = sort3.goodMediumPoorSort(items["data"])
        } else if (type == "csf") {
            items["data"] = sort4.goodMediumPoorSort(items["data"])
        }
    })

    return sortData
}

module.exports = {
    palikaSort
}