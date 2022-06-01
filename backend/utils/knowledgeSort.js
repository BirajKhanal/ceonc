const sortFormula = require('./knowledgeFormula')

const sort = (data) => {
    const be = []
    const ceonc = []
    const nameCountCeonc = []
    const nameCountBe = []

    data.map((items) => {
        if (items["TYPES_OF_HF"] === "ceonc") {
            ceonc.push(items)
            if (!nameCountCeonc.includes(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])) {
                nameCountCeonc.push(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])
            }
        } else {
            be.push(items)
            if (!nameCountBe.includes(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])) {
                nameCountBe.push(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])
            }
        }
    })

    const reDataBe = sortFormula.formula(be, nameCountBe.length)
    const reDataCeonc = sortFormula.formula(ceonc, nameCountCeonc.length)

    return [
        {
            "name": "BC/BEONC",
            "data": reDataBe
        },
        {
            "name": "CEONC",
            "data": reDataCeonc
        },
    ]
}

module.exports = {
    sort
}