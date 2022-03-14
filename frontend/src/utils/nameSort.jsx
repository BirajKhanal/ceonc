export const nameSort = (data) => {
    let names = []
    let namesRe = []
    let count = 0
    data.map((items) => {
        if(!names.includes(items["names"])){
            names.push(items["name"])
        }
    })
    names.map((items) => {
        namesRe.push(
            {
                label: items,
                value: ++count
            }
        )
    })
    return namesRe
}