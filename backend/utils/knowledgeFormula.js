const formula = (data, count) => {
    let knowledge = 0
    let plotting = 0
    let pph = 0
    let eclam = 0
    let referral = 0
    let normal = 0
    let vacuum = 0
    let newborn = 0
    let condom = 0
    let kmc = 0

    data.map((items) => {
        if (items["GROUP_GE4VE00_KNOWLEDGE_ASSESSMENT_SCORE"]) {
            knowledge = knowledge + items["GROUP_GE4VE00_KNOWLEDGE_ASSESSMENT_SCORE"]
        }
        if (items["GROUP_JY6HV93_PANTOGRAPH_PLOTTING_SCORE"]) {
            plotting = plotting + items["GROUP_JY6HV93_PANTOGRAPH_PLOTTING_SCORE"]
        }
        if (items["GROUP_JY6HV93_MANAGEMENT_OF_SHOCK_DUE_TO_PPH"]) {
            pph = pph + items["GROUP_JY6HV93_MANAGEMENT_OF_SHOCK_DUE_TO_PPH"]
        }
        if (items["GROUP_JY6HV93_MANAGEMENT_OF_SEVERE_PRE_ECLAM"]) {
            eclam = eclam + items["GROUP_JY6HV93_MANAGEMENT_OF_SEVERE_PRE_ECLAM"]
        }
        if (items["GROUP_JY6HV93_REFERRAL_PROCEDURE_SCORE"]) {
            referral = referral + items["GROUP_JY6HV93_REFERRAL_PROCEDURE_SCORE"]
        }
        if (items["GROUP_CG7GG78__9_2_5_CONDUCT_NORMAL_DELIVERY"]) {
            normal = normal + items["GROUP_CG7GG78__9_2_5_CONDUCT_NORMAL_DELIVERY"]
        }
        if (items["GROUP_CG7GG78_CONDUCT_VACUUM_DELIVERY_AT_CE"]) {
            vacuum = vacuum + items["GROUP_CG7GG78_CONDUCT_VACUUM_DELIVERY_AT_CE"]
        }
        if (items["GROUP_CG7GG78_NEW_BORN_RESUSCITATION_SCPRES"]) {
            newborn = newborn + items["GROUP_CG7GG78_NEW_BORN_RESUSCITATION_SCPRES"]
        }
        if (items["GROUP_CG7GG78_CONDOM_TAMPONADE_SCORE"]) {
            condom = condom + items["GROUP_CG7GG78_CONDOM_TAMPONADE_SCORE"]
        }
        if (items["GROUP_CG7GG78_KANGAROO_MOTHER_CARE_SCORE"]) {
            kmc = kmc + items["GROUP_CG7GG78_KANGAROO_MOTHER_CARE_SCORE"]
        }
    })

    knowledge = (knowledge/(count*26)) * 100
    plotting = (plotting/(count*13)) * 100
    pph = (pph/(count*30)) * 100
    eclam = (eclam/(count*31)) * 100
    referral = (referral/(count*11)) * 100
    normal = (normal/(count*62)) * 100
    vacuum = (vacuum/(count*31)) * 100
    newborn = (newborn/(count*20)) * 100
    condom = (condom/(count*23)) * 100
    kmc = (kmc/(count*15)) * 100

    return  [
        {
            "name": "Knowledge",
            "value": parseFloat(knowledge.toFixed(2)),
        },
        {
            "name": "Mgmt of Shock due to PPH",
            "value": parseFloat(pph.toFixed(2)),
        },
        {
            "name": "Ploting Partograph",
            "value": parseFloat(plotting.toFixed(2)),
        },
        {
            "name": "Mgmt of Eclampsla",
            "value": parseFloat(eclam.toFixed(2)),
        },
        {
            "name": "Referral Management",
            "value": parseFloat(referral.toFixed(2)),
        },
        {
            "name": "Condom Tamponade",
            "value": parseFloat(condom.toFixed(2)),
        },
        {
            "name": "Normal Delivery",
            "value": parseFloat(normal.toFixed(2)),
        },
        {
            "name": "Assisted Delivery",
            "value": parseFloat(vacuum.toFixed(2)),
        },
        {
            "name": "NBR",
            "value": parseFloat(newborn.toFixed(2)),
        },
        {
            "name": "KMC",
            "value": parseFloat(kmc.toFixed(2))
        }
    ]
}

module.exports = {
    formula
}