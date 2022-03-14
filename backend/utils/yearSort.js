const moment = require('moment')

const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')

const yearSort = (data, type) => {
    let dateArr = []
    let sortData = []
    let fltData = "_MARKED_AS_COMPLETE_DATE"
    let dateFormat = "YYYY MMMM DD"

    data.map((items) => {
        if (!dateArr.includes(moment(items[fltData]).format(dateFormat))) {
            dateArr.push(moment(items[fltData]).format(dateFormat))
            let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
            sortData.push(
                {
                    name: moment(items[fltData]).format(dateFormat),
                    data : [filtered]
                }
            )
        } else {
            sortData.map((dataItems) => {
                if (dataItems["name"] == moment(items[fltData]).format(dateFormat)) {
                    let filtered = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== fltData));
                    let len = dataItems["data"].length
                    dataItems["data"][len] = filtered
                }
            })
        }
    })

    sortData.map((items) => {
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

    console.log(dateArr)

    return sortData
}

module.exports = {
    yearSort
}