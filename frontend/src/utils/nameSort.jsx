export const nameSort = (data, type) => {
    let names = []
    let namesRe = []
    let count = 0

    data.map((items) => {
        if (type == "palika") {
            if(!names.includes(items["_3_PALIKA"])){
                names.push(items["_3_PALIKA"])
            }
        } else if (type == "province") {
            if(!names.includes(items["names"])){
                names.push(items["name"])
            }
        }
        return null
    })

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