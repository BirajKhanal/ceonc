require('dotenv').config()
const pool = require("../config/database")

const sort1 = require('../utils/bcqualitydomain')
const sort2 = require('../utils/bcsignalfunction')
const year = require('../utils/yearSort')

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
    })
}

const BcBeoncQualityDomainYear = (request, response) => {
    pool.query(`SELECT "GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK", "GROUP_JF7YD07_PARTOGRAPH", "GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2", "GROUP_JF7YD07_STAFFING_001", "GROUP_JF7YD07_REFERRAL_FULL_MARKS_3", "GROUP_JF7YD07_MANAGEMENT", "GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK", "GROUP_JF7YD07_DRUGS_001", "GROUP_JF7YD07_MANAGEMENT_DEMAND", "GROUP_JF7YD07_PATIENT_DIGNITY_001", "GROUP_JF7YD07_EQUIPMENT", "GROUP_JF7YD07_POSTNATAL_CARE", "GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2", "_MARKED_AS_COMPLETE_DATE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(year.yearSort(results.rows, "bebeoncqualitydomain"))
    })
}

const BcBeoncSignalFunctionYear = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "_MARKED_AS_COMPLETE_DATE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(year.yearSort(results.rows, "bebeoncsignalfunction"))
    })
}

const BcBeoncQualityDomainProvince = (request, response) => {
    pool.query(`SELECT "GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK", "GROUP_JF7YD07_PARTOGRAPH", "GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2", "GROUP_JF7YD07_STAFFING_001", "GROUP_JF7YD07_REFERRAL_FULL_MARKS_3", "GROUP_JF7YD07_MANAGEMENT", "GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK", "GROUP_JF7YD07_DRUGS_001", "GROUP_JF7YD07_MANAGEMENT_DEMAND", "GROUP_JF7YD07_PATIENT_DIGNITY_001", "GROUP_JF7YD07_EQUIPMENT", "GROUP_JF7YD07_POSTNATAL_CARE", "GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2", "_1_PROVINCE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const BcBeoncSignalFunctionProvince = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "_1_PROVINCE" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const BcBeoncQualityDomainPalika = (request, response) => {
    pool.query(`SELECT "GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK", "GROUP_JF7YD07_PARTOGRAPH", "GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2", "GROUP_JF7YD07_STAFFING_001", "GROUP_JF7YD07_REFERRAL_FULL_MARKS_3", "GROUP_JF7YD07_MANAGEMENT", "GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK", "GROUP_JF7YD07_DRUGS_001", "GROUP_JF7YD07_MANAGEMENT_DEMAND", "GROUP_JF7YD07_PATIENT_DIGNITY_001", "GROUP_JF7YD07_EQUIPMENT", "GROUP_JF7YD07_POSTNATAL_CARE", "GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const BcBeoncSignalFunctionPalika = (request, response) => {
    pool.query(`SELECT "GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA", "GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA", "GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC", "GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS", "GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER", "GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT", "GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O", "_3_PALIKA" FROM odk_prod."TOOL_2_NEW_CORE"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    BcBeoncQualityDomain,
    BcBeoncSignalFunction,
    BcBeoncQualityDomainYear,
    BcBeoncSignalFunctionYear,
    BcBeoncQualityDomainProvince,
    BcBeoncSignalFunctionProvince,
    BcBeoncQualityDomainPalika,
    BcBeoncSignalFunctionPalika,
}