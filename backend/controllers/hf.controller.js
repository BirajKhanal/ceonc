require('dotenv').config()

const pool = require('../config/database')
const sort = require('../utils/hfSort')
const sort1 = require('../utils/knowledgeSort')
const year = require('../utils/yearSort')
const palikaProvince = require("../utils/palikaProvinceSort")
const filter = require("../utils/filter")

const hfImplement = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplement function"
        }
        response.status(200).json(sort.countSort(results.rows))
    })
}

const hfImplementMonth = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplement function"
        }
        response.status(200).json(year.yearSort(results.rows, "hf", "month"))
    })
}

const hfImplementAll = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplement function"
        }
        response.status(200).json(year.yearSort(results.rows, "hf", "all"))
    })
}

const hfImplementProvince = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT", "PROVINCE" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplementprovince function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "hf", "province"))
    })
}

const hfImplementPalika = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT", "PALIKA" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplementpalika function"
        }
        response.status(200).json(palikaProvince.palikaProvinceSort(results.rows, "hf", "palika"))
    })
}

const hfImplementFilter = (request, response) => {
    pool.query(`SELECT "TYPES_OF_HF", "DATE_OF_ASSESSMENT", "PALIKA", "PROVINCE", "DISTRICT", "_4_NAME_OF_FACILITY" FROM odk_prod."TOOL_1_NEW_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in hf controller at hfimplementpalika function"
        }
        response.status(200).json(filter.filter(results.rows, request.body, "hf"))
    })
}

const knowledgeSkill = (request, response) => {
    pool.query(`SELECT "GROUP_GE4VE00_KNOWLEDGE_ASSESSMENT_SCORE", "GROUP_JY6HV93_PANTOGRAPH_PLOTTING_SCORE", "GROUP_JY6HV93_MANAGEMENT_OF_SHOCK_DUE_TO_PPH", "GROUP_JY6HV93_MANAGEMENT_OF_SEVERE_PRE_ECLAM", "GROUP_JY6HV93_REFERRAL_PROCEDURE_SCORE", "GROUP_CG7GG78__9_2_5_CONDUCT_NORMAL_DELIVERY", "GROUP_CG7GG78_CONDUCT_VACUUM_DELIVERY_AT_CE", "GROUP_CG7GG78_NEW_BORN_RESUSCITATION_SCPRES", "GROUP_CG7GG78_CONDOM_TAMPONADE_SCORE", "GROUP_CG7GG78_KANGAROO_MOTHER_CARE_SCORE", "GROUP_SSAE22_NAME_OF_PARTICIPANT", "TYPES_OF_HF" FROM odk_prod."TOOL_1_NEW_GROUP_SV5UJ09" INNER JOIN odk_prod."TOOL_1_NEW_CORE" ON odk_prod."TOOL_1_NEW_GROUP_SV5UJ09"."_PARENT_AURI" = odk_prod."TOOL_1_NEW_CORE"."_URI"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(sort1.sort(results.rows))
    })
}

const knowledgeSkillFilter = (request, response) => {
    pool.query(`SELECT "GROUP_GE4VE00_KNOWLEDGE_ASSESSMENT_SCORE", "GROUP_JY6HV93_PANTOGRAPH_PLOTTING_SCORE", "GROUP_JY6HV93_MANAGEMENT_OF_SHOCK_DUE_TO_PPH", "GROUP_JY6HV93_MANAGEMENT_OF_SEVERE_PRE_ECLAM", "GROUP_JY6HV93_REFERRAL_PROCEDURE_SCORE", "GROUP_CG7GG78__9_2_5_CONDUCT_NORMAL_DELIVERY", "GROUP_CG7GG78_CONDUCT_VACUUM_DELIVERY_AT_CE", "GROUP_CG7GG78_NEW_BORN_RESUSCITATION_SCPRES", "GROUP_CG7GG78_CONDOM_TAMPONADE_SCORE", "GROUP_CG7GG78_KANGAROO_MOTHER_CARE_SCORE", "GROUP_SSAE22_NAME_OF_PARTICIPANT", "TYPES_OF_HF", "DATE_OF_ASSESSMENT", "PALIKA", "PROVINCE", "DISTRICT", "_4_NAME_OF_FACILITY" FROM odk_prod."TOOL_1_NEW_GROUP_SV5UJ09" INNER JOIN odk_prod."TOOL_1_NEW_CORE" ON odk_prod."TOOL_1_NEW_GROUP_SV5UJ09"."_PARENT_AURI" = odk_prod."TOOL_1_NEW_CORE"."_URI"`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(filter.filter(results.rows, request.body, "knowledge"))
    })
}

module.exports = {
    hfImplement,
    knowledgeSkill,
    hfImplementMonth,
    hfImplementAll,
    hfImplementProvince,
    hfImplementPalika,
    hfImplementFilter,
    knowledgeSkillFilter
}