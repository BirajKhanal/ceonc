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
        } 
        else {
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

const sortName = (data, type) => {
    // let names = []
    let sortData = []
    let province = "_1_PROVINCE"
    let district = "_2_DISTRICT"
    let palika = "_3_PALIKA"
    let facility = "_4_NAME_OF_FACILITY"

    if (type === "robson") {
        province = "PROVINCE"
        district = "DISTRICT"
        palika = "PALIKA"
        facility = "GROUP_FACILITY__4_NAME_OF_FACILITY"
    }

    sortData = sortLogic(data, province)

    sortData.map((items) => {
        items["data"] = sortLogic(items["data"], district)
        if (type !== "robson") {
            items["name"] = items["name"].slice(3)
            items["name"] = items["name"].slice(0, -1)
            items["name"] = items["name"].replace(/_/g, " ")
        }
    })
    sortData.map((items) => {
        items["data"].map((item) => {
            item["data"] = sortLogic(item["data"], palika)
            if (type !== "robson") {
                item["name"] = item["name"].slice(5)
                item["name"] = item["name"].slice(0, -1)
                item["name"] = item["name"].replace(/_/g, " ")
            }
        })
    })
    sortData.map((items) => {
        items["data"].map((item)=>{
            item["data"].map((itm) => {
                if (type !== "robson") {
                    itm["name"] = itm["name"].slice(7)
                    itm["name"] = itm["name"].slice(0, -1)
                    itm["name"] = itm["name"].replace(/_/g, " ")
                }
                itm["data"] = sortLogic(itm["data"], facility)
                itm["data"].map((it) => {
                    if (type !== "robson") {
                        it["name"] = it["name"].slice(1)
                        it["name"] = it["name"].replace(/_/g, " ")
                    }
                })
            })
        })
    })

    return sortData
    // return data
}

module.exports = {
    sortName
}