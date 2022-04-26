const deliverySort = (data) => {
    let sortData = []
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    let sum4 = 0

    data.map((items) => {
        Object.entries(items).map(([k,v]) => {
            if (k === "OVERALL_C_SECTION_GROUP_TOTAL_NUMBER_OF_WOMEN_DELIVERED") {
                sum1 = sum1 + v
            }
            if (k === "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_TOTAL_DELIVERIES") {
                sum2 = sum2 + v
            }
            if (k === "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_C_SECTIONS") {
                sum3 = sum3 + v
            }
            if (k === "OVERALL_C_SECTION_GROUP_OVERALL_C_SECTION_SECTION_RATE") {
                sum4 = sum4 + parseFloat(v)
            }
        })
    })

    sortData.push({
        "Total no of woman delivered": sum1,
        "Total no of CS": sum4,
        "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_C_SECTIONS": sum3,
        "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_TOTAL_DELIVERIES": sum2
    })

    return sortData
}

module.exports = {
    deliverySort,
}