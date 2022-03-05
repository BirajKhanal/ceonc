require('dotenv').config()
const Pool = require('pg').Pool

const sort1 = require('./bcqualitydomain')
const sort2 = require('./bcsignalfunction')
const sort3 = require('./ceoncqualitydomain')
const sort4 = require('./ceoncsignalfunction')

const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
})

const BcBeoncQualityDomain = (request, response) => {
    pool.query(`SELECT "GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK", "GROUP_JF7YD07_PARTOGRAPH", "GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2", "GROUP_JF7YD07_STAFFING_001", "GROUP_JF7YD07_REFERRAL_FULL_MARKS_3", "GROUP_JF7YD07_MANAGEMENT", "GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK", "GROUP_JF7YD07_DRUGS_001", "GROUP_JF7YD07_MANAGEMENT_DEMAND", "GROUP_JF7YD07_PATIENT_DIGNITY_001", "GROUP_JF7YD07_EQUIPMENT", "GROUP_JF7YD07_POSTNATAL_CARE", "GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(sort1.goodMediumPoorSort(results.rows))
    })
}

const BcBeoncSignalFunction = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(sort2.goodMediumPoorSort(results.rows))
        // console.log(results.rows)
    })
}

const CeoncQualityDomain = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(sort3.goodMediumPoorSort(results.rows))
        // console.log(results.rows)
    })
}
const CeoncSignalFunction = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(sort4.goodMediumPoorSort(results.rows))
        // console.log(results.rows)
    })
}

module.exports = {
    BcBeoncQualityDomain,
    BcBeoncSignalFunction,
    CeoncSignalFunction,
    CeoncQualityDomain,
}