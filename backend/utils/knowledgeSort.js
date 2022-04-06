const sortFormula = require('./knowledgeFormula')

const sort = (data) => {
    const be = []
    const ceonc = []
    const nameCount = []

    data.map((items) => {
        if (items["TYPES_OF_HF"] === "ceonc") {
            ceonc.push(items)
        } else {
            be.push(items)
        }
        if (!nameCount.includes(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])) {
            nameCount.push(items["GROUP_SSAE22_NAME_OF_PARTICIPANT"])
        }
    })

    const reDataBe = sortFormula.formula(be, nameCount.length)
    const reDataCeonc = sortFormula.formula(ceonc, nameCount.length)

    return [
        {
            "name": "BE/BEONC",
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