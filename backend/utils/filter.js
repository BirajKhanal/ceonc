const moment = require("moment")

const yearSort = require("./yearSort")
const palikaProvinceSort = require("./palikaProvinceSort")

const filter = (data, req, kind) => {
    const resBody = [
        {
            date: req["date"],
            province: req["province"] === "" ? "" : req["province"],
            palika: req["palika"] === "" ? "" : req["palika"],
            data: {}
        },
        {
            date: moment(req["date"]).format("YYYY MMMM"),
            province: req["province"] === "" ? "" : req["province"],
            palika: req["palika"] === "" ? "" : req["palika"],
            data: {}
        },
        {
            date: moment(req["date"]).format("YYYY"),
            province: req["province"] === "" ? "" : req["province"],
            palika: req["palika"] === "" ? "" : req["palika"],
            data: {}
        }
    ]

    let fnl = filterDate(data, req, kind)


    return fnl
}

const filterPalika = (data, req) => {
    let reData = []

    if (req !== "") {
        data.map((items) => {
            if (items["name"] === req) {
                items["data"].map((item) => {
                    reData.push(item)
                })
            }
        })
    } else {
        return ""
    }

    return reData

}

const filterProvince = (data, req) => {
    let reData = []


    if (req !== "") {
        data.map((items) => {
            if (items["name"] === req) {
                items["data"].map((item) => {
                    reData.push(item)
                })
            }
        }) 
    } else {
        return ""
    }

    return reData
}

const filterDate = (data, req, kind) => {
    let dateAll = []
    let dateMonth = []
    let dateYear = []
    let province = []
    let palika = []

    let kindProvince = "_1_PROVINCE"
    let kindPalika = "_3_PALIKA"
    let kindDate = "_6_DATE_OF_SELF_ASSESSMENT"

    if (kind === "hf") {
        kindProvince = "PROVINCE"
        kindPalika = "PALIKA"
        kindDate = "DATE_OF_ASSESSMENT"
    }

    data.map((items) => {
        if (moment(items[kindDate]).format("YYYY-MM-DD") === moment(req["date"]).format("YYYY-MM-DD")) {
            if (req["province"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindPalika));

                province.push(filtered2)
            }
            if (req["palika"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));

                palika.push(filtered2)
            }
            if (req["palika"] === "" && req["province"] === "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindPalika));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));

                dateAll.push(filtered2)
            }
        }
    })
    province = filterProvince(palikaProvinceSort.palikaProvinceSort(province, kind, "province"), req["province"])
    palika = filterPalika(palikaProvinceSort.palikaProvinceSort(palika, kind, "palika"), req["palika"])
    dateAll = yearSort.yearSort(dateAll, kind, "all")

    let reData = []

    if (palika) {
        reData = palika
    } else if (province) {
        reData = province
    } else {
        dateAll.map((items) => {
            items["data"].map((item) => {
                reData.push(item)
            })
        })
    }
    
    
    let reBody = [
        {
            "date": req["date"],
            "province": req["province"],
            "palika": req["palika"],
            "data" : reData
        }
    ]

    return reBody
}

module.exports = {
    filter
}