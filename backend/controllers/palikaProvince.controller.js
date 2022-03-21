require('dotenv').config()
const pool = require("../config/database")

const sort1 = require("../utils/palikaProvinceSort")

const PalikaProvince = (request, response) => {
    pool.query(`SELECT "_1_PROVINCE", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in palikaprovince controller function"
        }
        response.status(200).json(sort1.palikaProvinceSort(results.rows, "palikaprovince", "palikaprovince"))
    })
}

module.exports = {
    PalikaProvince
}