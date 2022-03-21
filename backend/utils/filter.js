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

const filterDistrict = (data, req) => {
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

const filterFacility = (data, req) => {
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
    let district = []
    let palika = []
    let facility = []

    let kindProvince = "_1_PROVINCE"
    let kindDistrict = "_2_DISTRICT"
    let kindPalika = "_3_PALIKA"
    let kindFacility = "_4_NAME_OF_FACILITY"
    let kindDate = "_6_DATE_OF_SELF_ASSESSMENT"

    if (kind === "hf") {
        kindProvince = "PROVINCE"
        kindDistrict = "DISTRICT"
        kindPalika = "PALIKA"
        kindFacility = "_4_NAME_OF_FACILITY"
        kindDate = "DATE_OF_ASSESSMENT"
    }

    data.map((items) => {
        if (moment(items[kindDate]).format("YYYY-MM-DD") === moment(req["date"]).format("YYYY-MM-DD")) {
            if (req["province"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindPalika));
                let filtered3 = Object.fromEntries(Object.entries(filtered2).filter(([k,v]) => k !== kindDistrict));
                let filtered4 = Object.fromEntries(Object.entries(filtered3).filter(([k,v]) => k !== kindFacility));

                province.push(filtered4)
            }
            if (req["district"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));
                let filtered3 = Object.fromEntries(Object.entries(filtered2).filter(([k,v]) => k !== kindPalika));
                let filtered4 = Object.fromEntries(Object.entries(filtered3).filter(([k,v]) => k !== kindFacility));

                district.push(filtered4)
            }
            if (req["palika"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));
                let filtered3 = Object.fromEntries(Object.entries(filtered2).filter(([k,v]) => k !== kindDistrict));
                let filtered4 = Object.fromEntries(Object.entries(filtered3).filter(([k,v]) => k !== kindFacility));

                palika.push(filtered4)
            }
            if (req["facility"] !== "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindDate));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));
                let filtered3 = Object.fromEntries(Object.entries(filtered2).filter(([k,v]) => k !== kindDistrict));
                let filtered4 = Object.fromEntries(Object.entries(filtered3).filter(([k,v]) => k !== kindPalika));

                facility.push(filtered4)
            }
            if (req["palika"] === "" && req["province"] === "" && req["district"] === "" && req["facility"] === "") {
                let filtered1 = Object.fromEntries(Object.entries(items).filter(([k,v]) => k !== kindPalika));
                let filtered2 = Object.fromEntries(Object.entries(filtered1).filter(([k,v]) => k !== kindProvince));
                let filtered3 = Object.fromEntries(Object.entries(filtered2).filter(([k,v]) => k !== kindDistrict));
                let filtered4 = Object.fromEntries(Object.entries(filtered3).filter(([k,v]) => k !== kindFacility));

                dateAll.push(filtered4)
            }
        }
    })
    province = filterProvince(palikaProvinceSort.palikaProvinceSort(province, kind, "province"), req["province"])
    district = filterDistrict(palikaProvinceSort.palikaProvinceSort(district, kind, "district"), req["district"])
    palika = filterPalika(palikaProvinceSort.palikaProvinceSort(palika, kind, "palika"), req["palika"])
    facility = filterPalika(palikaProvinceSort.palikaProvinceSort(facility, kind, "facility"), req["facility"])
    dateAll = yearSort.yearSort(dateAll, kind, "all")

    let reData = []

    if (palika) {
        reData = palika
    } else if (province) {
        reData = province
    } else if (district) {
        reData = district
    } else if (facility) {
        reData = facility
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
            "district": req["district"],
            "palika": req["palika"],
            "facility": req["facility"],
            "data" : reData
        }
    ]

    return reBody
}

module.exports = {
    filter
}