require('dotenv').config()
const pool = require("../config/database")

const sort1 = require("../utils/nameSort")

const PalikaProvince = (request, response) => {
    pool.query(`SELECT "_1_PROVINCE", "_3_PALIKA", "_2_DISTRICT", "_4_NAME_OF_FACILITY" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in palikaprovince controller function"
        }
        response.status(200).json(sort1.sortName(results.rows, "general"))
    })
}

const PalikaProvinceRobson = (request, response) => {
    pool.query(`SELECT "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in palikaprovincerobson controller function"
        }
        response.status(200).json(sort1.sortName(results.rows, "robson"))
    })
}

module.exports = {
    PalikaProvince,
    PalikaProvinceRobson
}