const moment = require('moment')

const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')
const sort5 = require('./hfSort')
const sort6 = require('./knowledgeSort')
const { overallCsRate } = require('./overallCsRate')

const yearSort = (data, type, fltType) => {
    let dateArr = []
    let sortData = []
    let dateFormat = ""

    let fltData = "_6_DATE_OF_SELF_ASSESSMENT"

    if (type === "hf" || type === "knowledge") {
        fltData = "DATE_OF_ASSESSMENT"
    }

    if (type === "overallcs" || type === "grpsize" || type === "grpcsrate" || type === "grpabsltcs" || type === "delivery") {
        fltData = "_LAST_UPDATE_DATE"
    }

    if (fltType === "all") {
        dateFormat = "YYYY MMMM DD"
    } else if (fltType === "year") {
        dateFormat = "YYYY"
    } else if (fltType === "month") {
        dateFormat = "YYYY MMMM"
    }


    data.map((items) => {
        // if (!dateArr.includes(moment(items[fltData]).format(dateFormat))) {
        if (!dateArr.includes(20)) {
            // dateArr.push(moment(items[fltData]).format(dateFormat))
            dateArr.push(20)
            let filtered = items
            if (type !== "hf") {
                filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
            }
            sortData.push(
                {
                    // name: moment(items[fltData]).format(dateFormat),
                    name: 20,
                    data : [filtered]
                }
            )
        } else {
            sortData.map((dataItems) => {
                // if (dataItems["name"] == moment(items[fltData]).format(dateFormat)) {
                if (dataItems["name"] == 20) {
                    let filtered = items
                    if (type !== "hf") {
                        filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
                    }
                    let len = dataItems["data"].length
                    dataItems["data"][len] = filtered
                }
            })
        }
    })

    sortData.map((items) => {
        if (type === "bcqd") {
            items["data"] = sort1.goodMediumPoorSort(items["data"])
        } else if (type === "bcsf") {
            items["data"] = sort2.goodMediumPoorSort(items["data"])
        } else if (type === "cqd") {
            items["data"] = sort3.goodMediumPoorSort(items["data"])
        } else if (type === "csf") {
            items["data"] = sort4.goodMediumPoorSort(items["data"])
        } else if (type === "hf") {
            items["data"] = sort5.countSort(items["data"])
        } else if(type === "knowledge") {
            items["data"] = sort6.sort(items["data"])
        } else if (type === "overallcs") {
            items["data"] = overallCsRate(items["data"], "overall")
        } else if (type === "grpsize" || type === "grpcsrate" || type === "grpabsltcs") {
            items["data"] = GrpSize(items["data"], type)
        } else if (type === "delivery") {
            items["data"] = deliverySort(items["data"])
        }
    })

    return sortData
}

module.exports = {
    yearSort
}