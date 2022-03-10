const moment = require("moment")

require('dotenv').config()
const Pool = require('pg').Pool

// const pool = new Pool({
//     user: process.env.USER_NAME,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: process.env.PORT,
// })

const pool = new Pool({
    user: "nhssp",
    host: "202.45.146.72",
    database: "odk_prod",
    password: "nhssp123@#",
    port: "8899",
})

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

const hfImplement = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        // countSort(results.rows)
        response.status(200).json(countSort(results.rows))
    })
}

const knowledgeSkill = (request, response) => {
    pool.query(`SELECT "GROUP_GE4VE00_KNOWLEDGE_ASSESSMENT_SCORE", "GROUP_JY6HV93_PANTOGRAPH_PLOTTING_SCORE", "GROUP_JY6HV93_MANAGEMENT_OF_SHOCK_DUE_TO_PPH", "GROUP_JY6HV93_MANAGEMENT_OF_SEVERE_PRE_ECLAM", "GROUP_JY6HV93_REFERRAL_PROCEDURE_SCORE", "GROUP_CG7GG78__9_2_5_CONDUCT_NORMAL_DELIVERY", "GROUP_CG7GG78_CONDUCT_VACUUM_DELIVERY_AT_CE", "GROUP_CG7GG78_NEW_BORN_RESUSCITATION_SCPRES", "GROUP_CG7GG78_CONDOM_TAMPONADE_SCORE", "GROUP_CG7GG78_KANGAROO_MOTHER_CARE_SCORE", "GROUP_CG7GG78_MANUAL_VACUUM_ASPIRATION_SORE" FROM odk_prod."TOOL_1_NEW_GROUP_SV5UJ09"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        // console.log(results.rows)
    })
}

module.exports = {
    hfImplement,
    knowledgeSkill
}

