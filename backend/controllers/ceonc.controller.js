require('dotenv').config()
const pool = require("../config/database")

const sort1 = require('../utils/ceoncqualitydomain')
const sort2 = require('../utils/ceoncsignalfunction')
const year = require('../utils/yearSort')
const palikaProvince = require("../utils/palikaProvinceSort")
const filter = require("../utils/filter")

const CeoncQualityDomain = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14"  FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomain function"
        }
        response.status(200).json(sort1.goodMediumPoorSort(results.rows))
    })
}

const CeoncSignalFunction = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunction function"
        }
        response.status(200).json(sort2.goodMediumPoorSort(results.rows))
    })
}

const CeoncQualityDomainAll = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "cqd", "all"))
    })
}

const CeoncSignalFunctionAll = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY","_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "csf", "all"))
    })
}

const CeoncQualityDomainYear = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "cqd", "year"))
    })
}

const CeoncSignalFunctionYear = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY","_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "csf", "year"))
    })
}
const CeoncQualityDomainMonth = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "cqd", "month"))
    })
}

const CeoncSignalFunctionMonth = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY","_6_DATE_OF_SELF_ASSESSMENT" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionyear function"
        }
        response.status(200).json(year.yearSort(results.rows, "csf", "month"))
    })
}
const CeoncQualityDomainProvince = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14",  "_1_PROVINCE"  FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainprovince function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "cqd", "province"))
    })
}

const CeoncSignalFunctionProvince = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY", "_1_PROVINCE" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionprovince function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "csf", "province"))
    })
}

const CeoncQualityDomainPalika = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomainpalika function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "cqd", "palika"))
    })
}

const CeoncSignalFunctionPalika = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunctionpalika function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "csf", "palika"))
    })
}

const CeoncQualityDomainFilter = (request, response) => {
    pool.query(`SELECT "GROUP_FZ43E09_INFECTION_PREVENTION", "GROUP_FZ43E09_CLINICAL_PRACTICE", "GROUP_FZ43E09_STAFFING", "GROUP_FZ43E09_INFRASTRUCTURE", "GROUP_FZ43E09_PATIENT_DIGNITY", "GROUP_FZ43E09_DRUGS", "GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT", "GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14", "_3_PALIKA", "_1_PROVINCE", "_6_DATE_OF_SELF_ASSESSMENT", "_2_DISTRICT", "_4_NAME_OF_FACILITY"  FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncqualitydomain function"
        }
        response.status(200).json(filter.filter(results.rows, request.body, "cqd"))
    })
}

const CeoncSignalFunctionFilter = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION", "GROUP_FT6ZY60_PERFORM_SURGERY", "_3_PALIKA", "_1_PROVINCE", "_6_DATE_OF_SELF_ASSESSMENT", "_2_DISTRICT", "_4_NAME_OF_FACILITY" FROM odk_prod."TOOL_2_NEW_CORE" WHERE "TYPES_OF_HF"='ceonc'`, (error, results) => {
        if (error) {
            throw "database retrive error in ceonc controller at ceoncsignalfunction function"
        }
        response.status(200).json(filter.filter(results.rows, request.body, "csf"))
    })
}

module.exports = {
    CeoncSignalFunction,
    CeoncQualityDomain,
    CeoncSignalFunctionAll,
    CeoncQualityDomainAll,
    CeoncSignalFunctionYear,
    CeoncQualityDomainYear,
    CeoncSignalFunctionMonth,
    CeoncQualityDomainMonth,
    CeoncSignalFunctionProvince,
    CeoncQualityDomainProvince,
    CeoncSignalFunctionPalika,
    CeoncQualityDomainPalika,
    CeoncQualityDomainFilter,
    CeoncSignalFunctionFilter,
}
