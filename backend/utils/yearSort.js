const moment = require('moment')

const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')

const yearSort = (data, type) => {
    console.log(type)
    let data1 = []
    let data2 = []
    data.map((items) => {
        if (moment(items["_MARKED_AS_COMPLETE_DATE"]).format("YYYY") == "2021") {
            data1.push(items)
        } else if (moment(items["_MARKED_AS_COMPLETE_DATE"]).format("YYYY") == "2022") {
            data2.push(items)
        }
    })
    if (type === "bebeoncqualitydomain") {
        data1 = sort1.goodMediumPoorSort(data1)
        data2 = sort1.goodMediumPoorSort(data2)
    } else if( type === "bebeoncsignalfunction") {
        data1 = sort2.goodMediumPoorSort(data1)
        data2 = sort2.goodMediumPoorSort(data2)
    } else if( type === "ceoncqualitydomain") {
        data1 = sort3.goodMediumPoorSort(data1)
        data2 = sort3.goodMediumPoorSort(data2)
    } else if( type === "ceoncsignalfunction") {
        data1 = sort4.goodMediumPoorSort(data1)
        data2 = sort4.goodMediumPoorSort(data2)
    }

    const redict = [ 
        {
            year: 2021,
            data: data1 
        },
        {
            year: 2022,
            data: data2
        }
    ]
    return redict
}

module.exports = {
    yearSort
}