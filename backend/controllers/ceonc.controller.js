require('dotenv').config()
const pool = require("../config/database")

const sort1 = require('../utils/ceoncqualitydomain')
const sort2 = require('../utils/ceoncsignalfunction')
const year = require('../utils/yearSort')
const palika = require("../utils/palikaSort")

const CeoncQualityDomain = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14"  FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomain function"
        }
        response.status(200).json(sort1.goodMediumPoorSort(results.rows))
    })
}
const CeoncSignalFunction = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunction function"
        }
        response.status(200).json(sort2.goodMediumPoorSort(results.rows))
    })
}

const CeoncQualityDomainYear = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_MARKED_AS_COMPLETE_DATE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "ceoncqualitydomain"))
    })
}
const CeoncSignalFunctionYear = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY","_MARKED_AS_COMPLETE_DATE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "ceoncsignalfunction"))
    })
}
const CeoncQualityDomainProvince = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14",  "_1_PROVINCE"  FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainprovince function"
        }
        response.status(200).json(results.rows)
    })
}
const CeoncSignalFunctionProvince = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY", "_1_PROVINCE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionprovince function"
        }
        response.status(200).json(results.rows)
    })
}
const CeoncQualityDomainPalika = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainpalika function"
        }
        response.status(200).json(palika.palikaSort(results.rows, "cqd"))
    })
}
const CeoncSignalFunctionPalika = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionpalika function"
        }
        response.status(200).json(palika.palikaSort(results.rows, "csf"))
    })
}

module.exports = {
    CeoncSignalFunction,
    CeoncQualityDomain,
    CeoncSignalFunctionYear,
    CeoncQualityDomainYear,
    CeoncSignalFunctionProvince,
    CeoncQualityDomainProvince,
    CeoncSignalFunctionPalika,
    CeoncQualityDomainPalika,
}
