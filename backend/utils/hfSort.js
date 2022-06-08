const moment = require("moment")

const countSort = (data) => {
    let ret = []
    let year = []

    data.map((items) => {
        if (!year.includes(moment(items["DATE_OF_ASSESSMENT"]).format("YYYY"))) {
            year.push(moment(items["DATE_OF_ASSESSMENT"]).format("YYYY"))
            if (items["TYPES_OF_HF"] === "ceonc") {
                ret.push({
                    year: moment(items["DATE_OF_ASSESSMENT"]).format("YYYY"),
                    "No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)": 0,
                    "No of Onsite Clinical Coaching Mentoring Conducted(CEONC)": 1
                })
            } else {
                ret.push({
                    year: moment(items["DATE_OF_ASSESSMENT"]).format("YYYY"),
                    "No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)": 1,
                    "No of Onsite Clinical Coaching Mentoring Conducted(CEONC)": 0
                })
            }
        } else {
            ret.map((item) => {
                if (items["TYPES_OF_HF"] === "ceonc") {
                    if (item["year"] === moment(items["DATE_OF_ASSESSMENT"]).format("YYYY")) {
                        item["No of Onsite Clinical Coaching Mentoring Conducted(CEONC)"] += 1
                    }
                } else {
                    if (item["year"] === moment(items["DATE_OF_ASSESSMENT"]).format("YYYY")) {
                        item["No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)"] += 1
                    }
                }
            })
        }
    })

    return ret
}

module.exports = {
    countSort
}