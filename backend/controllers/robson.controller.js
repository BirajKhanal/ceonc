require('dotenv').config()
const pool = require("../config/database")
const { deliverySort } = require('../utils/deliverySort')
const { filter } = require('../utils/filter')
const sort1 = require("../utils/overallCsRate")

const OverallCSRate = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_C_SECTION_RATE_1", "GROUP_2_GROUP_C_SECTION_RATE_2","GROUP_3_GROUP_C_SECTION_RATE_3","GROUP_4_GROUP_C_SECTION_RATE_4","GROUP_5_GROUP_C_SECTION_RATE_5","GROUP_6_GROUP_C_SECTION_RATE_6","GROUP_7_GROUP_C_SECTION_RATE_7","GROUP_8_GROUP_C_SECTION_RATE_8","GROUP_9_GROUP_C_SECTION_RATE_9","GROUP_10_GROUP_C_SECTION_RATE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(sort1.overallCsRate(results.rows, "overall"))
    })
}

const GrpSize = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_SIZE_1", "GROUP_2_GROUP_SIZE_2","GROUP_3_GROUP_SIZE_3","GROUP_4_GROUP_SIZE_4","GROUP_5_GROUP_SIZE_5","GROUP_6_GROUP_SIZE_6","GROUP_7_GROUP_SIZE_7","GROUP_8_GROUP_SIZE_8","GROUP_9_GROUP_SIZE_9","GROUP_10_GROUP_SIZE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(sort1.overallCsRate(results.rows, "grpsize"))
    })
}

const GrpCSRate = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_C_SECTION_RATE_1", "GROUP_2_GROUP_C_SECTION_RATE_2","GROUP_3_GROUP_C_SECTION_RATE_3","GROUP_4_GROUP_C_SECTION_RATE_4","GROUP_5_GROUP_C_SECTION_RATE_5","GROUP_6_GROUP_C_SECTION_RATE_6","GROUP_7_GROUP_C_SECTION_RATE_7","GROUP_8_GROUP_C_SECTION_RATE_8","GROUP_9_GROUP_C_SECTION_RATE_9","GROUP_10_GROUP_C_SECTION_RATE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(sort1.overallCsRate(results.rows, "grpcssize"))
    })
}

const AbsltCS = (request, response) => {
    pool.query(`SELECT "GROUP_1_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_1","GROUP_2_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_2","GROUP_3_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_3","GROUP_4_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_4","GROUP_5_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_5","GROUP_6_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_6","GROUP_7_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_7","GROUP_8_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_8","GROUP_9_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_9","GROUP_10_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_10", "GROUP_FACILITY__4_NAME_OF_FACILITY" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(sort1.overallCsRate(results.rows, "grpabsltcs"))
    })
}

const Delivery = (request, response) => {
    pool.query(`SELECT "OVERALL_C_SECTION_GROUP_TOTAL_NUMBER_OF_WOMEN_DELIVERED", "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_TOTAL_DELIVERIES", "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_C_SECTIONS", "OVERALL_C_SECTION_GROUP_OVERALL_C_SECTION_SECTION_RATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(deliverySort(results.rows))
    })
}

const OverallCSRateFilter = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_C_SECTION_RATE_1", "GROUP_2_GROUP_C_SECTION_RATE_2","GROUP_3_GROUP_C_SECTION_RATE_3","GROUP_4_GROUP_C_SECTION_RATE_4","GROUP_5_GROUP_C_SECTION_RATE_5","GROUP_6_GROUP_C_SECTION_RATE_6","GROUP_7_GROUP_C_SECTION_RATE_7","GROUP_8_GROUP_C_SECTION_RATE_8","GROUP_9_GROUP_C_SECTION_RATE_9","GROUP_10_GROUP_C_SECTION_RATE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA", "_LAST_UPDATE_DATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(filter(results.rows, request.body, "overallcs"))
    })
}

const GrpSizeFilter = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_SIZE_1", "GROUP_2_GROUP_SIZE_2","GROUP_3_GROUP_SIZE_3","GROUP_4_GROUP_SIZE_4","GROUP_5_GROUP_SIZE_5","GROUP_6_GROUP_SIZE_6","GROUP_7_GROUP_SIZE_7","GROUP_8_GROUP_SIZE_8","GROUP_9_GROUP_SIZE_9","GROUP_10_GROUP_SIZE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA", "_LAST_UPDATE_DATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(filter(results.rows, request.body, "grpsize"))
    })
}

const GrpCSRateFilter = (request, response) => {
    pool.query(`SELECT "GROUP_1_GROUP_C_SECTION_RATE_1", "GROUP_2_GROUP_C_SECTION_RATE_2","GROUP_3_GROUP_C_SECTION_RATE_3","GROUP_4_GROUP_C_SECTION_RATE_4","GROUP_5_GROUP_C_SECTION_RATE_5","GROUP_6_GROUP_C_SECTION_RATE_6","GROUP_7_GROUP_C_SECTION_RATE_7","GROUP_8_GROUP_C_SECTION_RATE_8","GROUP_9_GROUP_C_SECTION_RATE_9","GROUP_10_GROUP_C_SECTION_RATE_10", "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA", "_LAST_UPDATE_DATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(filter(results.rows, request.body, "grpcsrate"))
    })
}

const AbsltCSFilter = (request, response) => {
    pool.query(`SELECT "GROUP_1_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_1","GROUP_2_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_2","GROUP_3_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_3","GROUP_4_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_4","GROUP_5_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_5","GROUP_6_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_6","GROUP_7_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_7","GROUP_8_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_8","GROUP_9_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_9","GROUP_10_ABSOLUTE_GROUP_CONTRIBUTION_TO_OVERALL_C_SECTION_10", "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA", "_LAST_UPDATE_DATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(filter(results.rows, request.body, "grpabsltcs"))
    })
}

const DeliveryFilter = (request, response) => {
    pool.query(`SELECT "OVERALL_C_SECTION_GROUP_TOTAL_NUMBER_OF_WOMEN_DELIVERED", "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_TOTAL_DELIVERIES", "UNCLASSIFIED_CASES_GROUP_UNCLASSIFIED_C_SECTIONS", "OVERALL_C_SECTION_GROUP_OVERALL_C_SECTION_SECTION_RATE", "GROUP_FACILITY__4_NAME_OF_FACILITY", "DISTRICT", "PROVINCE", "PALIKA", "_LAST_UPDATE_DATE" FROM odk_prod."ROBSON_TOOL_CORE"`, (error, results) => {
        if (error) {
            throw "database retrive error in robson controller in overallcsrate"
        }
        response.status(200).json(filter(results.rows, request.body, "delivery"))
    })
}

module.exports = {
    OverallCSRate,
    GrpSize,
    GrpCSRate,
    AbsltCS,
    Delivery,
    OverallCSRateFilter,
    GrpSizeFilter,
    GrpCSRateFilter,
    AbsltCSFilter,
    DeliveryFilter
}