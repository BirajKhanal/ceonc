const GrpSize = (data, type) => {
    let sortData = []

    let dict1 = {
        name: 1,
        WHO: type === "grpsize" ? 29.3 : type === "grpcssize" ? 9.8 : 2.9,
    }
    let dict2 = {
        name: 2,
        WHO: type === "grpsize" ? 8.8 : type === "grpcssize" ? 39.9 : 3.5,
    }
    let dict3 = {
        name: 3,
        WHO: type === "grpsize" ? 40.1 : type === "grpcssize" ? 3 : 1.2,
    }
    let dict4 = {
        name: 4,
        WHO: type === "grpsize" ? 6.4 : type === "grpcssize" ? 23.7 : 1.5,
    }
    let dict5 = {
        name: 5,
        WHO: type === "grpsize" ? 7.2 : type === "grpcssize" ? 74.4 : 5.3,
    }
    let dict6 = {
        name: 6,
        WHO: type === "grpsize" ? 1.2 : type === "grpcssize" ? 78.5 : 0.9,
    }
    let dict7 = {
        name: 7,
        WHO: type === "grpsize" ? 1.5 : type === "grpcssize" ? 73.8 : 1.1,
    }
    let dict8 = {
        name: 8,
        WHO: type === "grpsize" ? 0.9 : type === "grpcssize" ? 57.7 : 0.5,
    }
    let dict9 = {
        name: 9,
        WHO: type === "grpsize" ? 0.4 : type === "grpcssize" ? 88.6 : 0.3,
    }
    let dict10 = {
        name: 10,
        WHO: type === "grpsize" ? 4.2 : type === "grpcssize" ? 25.1 : 1,
    }

    if (type === "grpsize") {
        var flt1 = "GROUP_1_GROUP_SIZE_1"
        var flt2 = "GROUP_2_GROUP_SIZE_2"
        var flt3 = "GROUP_3_GROUP_SIZE_3"
        var flt4 = "GROUP_4_GROUP_SIZE_4"
        var flt5 = "GROUP_5_GROUP_SIZE_5"
        var flt6 = "GROUP_6_GROUP_SIZE_6"
        var flt7 = "GROUP_7_GROUP_SIZE_7"
        var flt8 = "GROUP_8_GROUP_SIZE_8"
        var flt9 = "GROUP_9_GROUP_SIZE_9"
        var flt10 = "GROUP_10_GROUP_SIZE_10"
    }
    if (type === "grpcssize") {
        var flt1 = "GROUP_1_GROUP_C_SECTION_RATE_1"
        var flt2 = "GROUP_2_GROUP_C_SECTION_RATE_2"
        var flt3 = "GROUP_3_GROUP_C_SECTION_RATE_3"
        var flt4 = "GROUP_4_GROUP_C_SECTION_RATE_4"
        var flt5 = "GROUP_5_GROUP_C_SECTION_RATE_5"
        var flt6 = "GROUP_6_GROUP_C_SECTION_RATE_6"
        var flt7 = "GROUP_7_GROUP_C_SECTION_RATE_7"
        var flt8 = "GROUP_8_GROUP_C_SECTION_RATE_8"
        var flt9 = "GROUP_9_GROUP_C_SECTION_RATE_9"
        var flt10 = "GROUP_10_GROUP_C_SECTION_RATE_10"
    }
    if (type === "grpabsltcs") {
        var flt1 = "GROUP_1_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_1"
        var flt2 = "GROUP_2_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_2"
        var flt3 = "GROUP_3_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_3"
        var flt4 = "GROUP_4_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_4"
        var flt5 = "GROUP_5_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_5"
        var flt6 = "GROUP_6_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_6"
        var flt7 = "GROUP_7_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_7"
        var flt8 = "GROUP_8_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_8"
        var flt9 = "GROUP_9_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_9"
        var flt10 = "GROUP_10_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_10"
    }

    data.map((items) => {
        Object.entries(items).map(([k,v]) => {
            if (k === flt1) {
                if (dict1.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict1["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict1["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt1]
                } else {
                    dict1[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt1]
                }
            }
            if (k === flt2) {
                if (dict2.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict2["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict2["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt2]
                } else {
                    dict2[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt2]
                }
            }
            if (k === flt3) {
                if (dict3.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict3["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict3["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt3]
                } else {
                    dict3[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt3]
                }
            }
            if (k === flt4) {
                if (dict4.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict4["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict4["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt4]
                } else {
                    dict4[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt4]
                }
            }
            if (k === flt5) {
                if (dict5.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict5["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict5["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt5]
                } else {
                    dict5[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt5]
                }
            }
            if (k === flt6) {
                if (dict6.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict6["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict6["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt6]
                } else {
                    dict6[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt6]
                }
            }
            if (k === flt7) {
                if (dict7.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict7["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict7["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt7]
                } else {
                    dict7[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt7]
                }
            }
            if (k === flt8) {
                if (dict8.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict8["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict8["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt8]
                } else {
                    dict8[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt8]
                }
            }
            if (k === flt9) {
                if (dict9.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict9["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict9["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt9]
                } else {
                    dict9[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt9]
                }
            }
            if (k === flt10) {
                if (dict10.hasOwnProperty(items["GROUP_FACILITY__4_NAME_OF_FACILITY"])) {
                    dict10["GROUP_FACILITY__4_NAME_OF_FACILITY"] = dict10["GROUP_FACILITY__4_NAME_OF_FACILITY"] + items[flt10]
                } else {
                    dict10[items["GROUP_FACILITY__4_NAME_OF_FACILITY"]] = items[flt10]
                }
            }
        })
    })


    sortData.push(dict1)
    sortData.push(dict2)
    sortData.push(dict3)
    sortData.push(dict4)
    sortData.push(dict5)
    sortData.push(dict6)
    sortData.push(dict7)
    sortData.push(dict8)
    sortData.push(dict9)
    sortData.push(dict10)

    return sortData
}

module.exports = {
    GrpSize
}