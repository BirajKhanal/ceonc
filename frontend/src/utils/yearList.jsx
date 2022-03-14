const moment = require('moment')

export const yearList = (data) => {
    const list = []
    const listRe = []
    let count
    data.map((items) => {
        if(!list.includes(moment(items["name"]).format("YYYY"))) {
            list.push(moment(items["name"]).format("YYYY"))
        }
        return null
    })
    list.map((items) => {
        listRe.push(
            {
                label: items,
                value: ++count
            }
        )
        return null
    }) 
    return listRe
}