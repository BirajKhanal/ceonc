const moment = require("moment")

const countSort = (data) => {
    let bc_2021 = 0
    let ceonc_2021 = 0
    let bc_2022 = 0
    let ceonc_2022 = 0


    Object.keys(data).map((key) => {
        if (moment(data[key].DATE_OF_ASSESSMENT).format("YYYY") == "2021") {
            if (data[key].TYPES_OF_HF === "ceonc") {
                ceonc_2021 += 1
            } else if (data[key].TYPES_OF_HF == "bc" || data[key].TYPES_OF_HF == "beonc") {
                bc_2021 += 1
            }
        } else if (moment(data[key].DATE_OF_ASSESSMENT).format("YYYY") == "2022") {
            if (data[key].TYPES_OF_HF === "ceonc") {
                ceonc_2022 += 1
            } else if (data[key].TYPES_OF_HF == "bc" || data[key].TYPES_OF_HF == "beonc") {
                bc_2022 += 1
            }
        }
    })

    return [
        {
            year: '2021',
            "No of HFs(BC/BEONC) implemented": bc_2021,
            "No of CEONC implemented": ceonc_2021
        },
        {
            year: '2022',
            "No of HFs(BC/BEONC) implemented": bc_2022,
            "No of CEONC implemented": ceonc_2022
        }
    ]
}

module.exports = {
    countSort
}