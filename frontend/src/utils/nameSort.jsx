export const nameSort = (data, selected, type) => {
    let names = []
    let namesRe = []
    let count = 0

    if (type === "province") {
        data.map((items) => {
            if(!names.includes(items["name"])){
                names.push(items["name"])
            }
            return null
        })
    }

    if (type === "district") {
        data.map((items) => {
            if (items["name"] === selected["label"]) {
                items["data"].map((item) => {
                    if(!names.includes(item["name"])){
                        names.push(item["name"])
                    }
                })
            }
        })
    }
    if (type === "palika") {
        data.map((items) => {
            items["data"].map((item) => {
                if (item["name"] === selected["label"]) {
                    item["data"].map((itm) => {
                        if(!names.includes(itm["name"])){
                            names.push(itm["name"])
                        }
                    })
                }
            })
        })
    }
    if (type === "facility") {
        data.map((items) => {
            items["data"].map((item) => {
                item["data"].map((itm) => {
                    if (itm["name"] === selected["label"]) {
                        itm["data"].map((it) => {
                            if(!names.includes(it["name"])){
                                names.push(it["name"])
                            }
                        })
                    }
                })
            })
        })
    }

    names.map((items) => {
        namesRe.push(
            {
                label: items,
                value: ++count
            }
        )
        return null
    })

    return namesRe
}