export const totalCount = (data) => {
    let high = 0
    let low = 0
    data.map((items) => {
        low = items["good"] + items["medium"] + items["poor"] + items["N/A"]
        if (low > high) {
            high = low
        }
        return null
    })
    return high
}