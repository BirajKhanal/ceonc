const goodMediumPoorSort = (data) => {
   let good_1 = 0 
   let good_2 = 0 
   let good_3 = 0 
   let good_4 = 0 
   let good_5 = 0 
   let good_6 = 0 
   let good_7 = 0 
   let good_8 = 0 
   let good_9 = 0 
   let good_10 = 0 
   let good_11 = 0 
   let good_12 = 0 
   let good_13 = 0 
   let medium_1 = 0 
   let medium_2 = 0 
   let medium_3 = 0 
   let medium_4 = 0 
   let medium_5 = 0 
   let medium_6 = 0 
   let medium_7 = 0 
   let medium_8 = 0 
   let medium_9 = 0 
   let medium_10 = 0 
   let medium_11 = 0 
   let medium_12 = 0 
   let medium_13 = 0 
   let poor_1 = 0 
   let poor_2 = 0 
   let poor_3 = 0 
   let poor_4 = 0 
   let poor_5 = 0 
   let poor_6 = 0 
   let poor_7 = 0 
   let poor_8 = 0 
   let poor_9 = 0 
   let poor_10 = 0 
   let poor_11 = 0 
   let poor_12 = 0 
   let poor_13 = 0 
   let null_1 = 0 
   let null_2 = 0 
   let null_3 = 0 
   let null_4 = 0 
   let null_5 = 0 
   let null_6 = 0 
   let null_7 = 0 
   let null_8 = 0 
   let null_9 = 0 
   let null_10 = 0 
   let null_11 = 0 
   let null_12 = 0 
   let null_13 = 0 

   data.map((items) => {
       if (items["GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK"] == 8) {
            good_1 += 1
       } else if (items["GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK"] <= 7 || items["GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK"] >= 5 ) {
           medium_1 += 1
       } else if (items["GROUP_JF7YD07_INFECTION_PREVENTION_FULL_MARK"] < 5) {
           poor_1 += 1
       } else {
           null_1 += 1
       }
       if (items["GROUP_JF7YD07_PARTOGRAPH"] == 3) {
            good_2 += 1
       } else if (items["GROUP_JF7YD07_PARTOGRAPH"] == 2) {
           medium_2 += 1
       } else if (items["GROUP_JF7YD07_PARTOGRAPH"] <= 1) {
           poor_2 += 1
       } else {
           null_2 += 1
       }
       if (items["GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2"] == 2) {
            good_3 += 1
       } else if (items["GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2"] == 1) {
           medium_3 += 1
       } else if (items["GROUP_JF7YD07_ELECTRICITY_FULL_MARKS_2"] == 0) {
           poor_3 += 1
       } else {
           null_3 += 1
       }
       if (items["GROUP_JF7YD07_STAFFING_001"] == 5) {
            good_4 += 1
       } else if (items["GROUP_JF7YD07_STAFFING_001"] == 3 || items["GROUP_JF7YD07_STAFFING_001"] == 4) {
           medium_4 += 1
       } else if (items["GROUP_JF7YD07_STAFFING_001"] <= 2) {
           poor_4 += 1
       } else {
           null_4 += 1
       }
       if (items["GROUP_JF7YD07_REFERRAL_FULL_MARKS_3"] == 3) {
            good_5 += 1
       } else if (items["GROUP_JF7YD07_REFERRAL_FULL_MARKS_3"] == 2) {
           medium_5 += 1
       } else if (items["GROUP_JF7YD07_REFERRAL_FULL_MARKS_3"] <= 1) {
           poor_5 += 1
       } else {
           null_5 += 1
       }
       if (items["GROUP_JF7YD07_MANAGEMENT"] == 10) {
            good_6 += 1
       } else if (items["GROUP_JF7YD07_MANAGEMENT"] <= 9 || items["GROUP_JF7YD07_MANAGEMENT"] >= 6) {
           medium_6 += 1
       } else if (items["GROUP_JF7YD07_MANAGEMENT"] < 6 ) {
           poor_6 += 1
       } else {
           null_6 += 1
       }
       if (items["GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK"] == 4) {
            good_7 += 1
       } else if (items["GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK"] == 3) {
           medium_7 += 1
       } else if (items["GROUP_JF7YD07_WATER_AND_SANITATION_FULL_MARK"] < 3) {
           poor_7 += 1
       } else {
           null_7 += 1
       }
       if (items["GROUP_JF7YD07_DRUGS_001"] == 8) {
            good_8 += 1
       } else if (items["GROUP_JF7YD07_DRUGS_001"] <= 7 || items["GROUP_JF7YD07_DRUGS_001"] >= 5) {
           medium_8 += 1
       } else if (items["GROUP_JF7YD07_DRUGS_001"] < 5) {
           poor_8 += 1
       } else {
           null_8 += 1
       }
       if (items["GROUP_JF7YD07_MANAGEMENT_DEMAND"] == 3) {
            good_9 += 1
       } else if (items["GROUP_JF7YD07_MANAGEMENT_DEMAND"] == 2) {
           medium_9 += 1
       } else if (items["GROUP_JF7YD07_MANAGEMENT_DEMAND"] < 2) {
           poor_9 += 1
       } else {
           null_9 += 1
       }
       if (items["GROUP_JF7YD07_PATIENT_DIGNITY_001"] == 9) {
            good_10 += 1
       } else if (items["GROUP_JF7YD07_PATIENT_DIGNITY_001"] <= 8 || items["GROUP_JF7YD07_PATIENT_DIGNITY_001"] >= 5) {
           medium_10 += 1
       } else if (items["GROUP_JF7YD07_PATIENT_DIGNITY_001"] < 5) {
           poor_10 += 1
       } else {
           null_10 += 1
       }
       if (items["GROUP_JF7YD07_EQUIPMENT"] == 27) {
            good_11 += 1
       } else if (items["GROUP_JF7YD07_EQUIPMENT"] <= 26 || items["GROUP_JF7YD07_EQUIPMENT"] >= 14) {
           medium_11 += 1
       } else if (items["GROUP_JF7YD07_EQUIPMENT"] < 14) {
           poor_11 += 1
       } else {
           null_11 += 1
       }
       if (items["GROUP_JF7YD07_POSTNATAL_CARE"] == 8) {
            good_12 += 1
       } else if (items["GROUP_JF7YD07_POSTNATAL_CARE"] <= 7 || items["GROUP_JF7YD07_POSTNATAL_CARE"] >= 5) {
           medium_12 += 1
       } else if (items["GROUP_JF7YD07_POSTNATAL_CARE"] < 5) {
           poor_12 += 1
       } else {
           null_12 += 1
       }
       if (items["GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2"] == 2) {
            good_13 += 1
       } else if (items["GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2"] == 1) {
           medium_13 += 1
       } else if (items["GROUP_JF7YD07_FAMILY_PLANNING_FULL_MARKS_2"] == 0 ) {
           poor_13 += 1
       } else {
           null_13 += 1
       }
   })
   return [
       {
           name: "Infection Prevention",
           good: good_1,
           medium: medium_1,
           poor: poor_1,
           "N/A": null_1
       },
       {
           name: "Partograph",
           good: good_2,
           medium: medium_2,
           poor: poor_2,
           "N/A": null_2
       },
       {
           name: "Electricity",
           good: good_3,
           medium: medium_3,
           poor: poor_3,
           "N/A": null_3
       },
       {
           name: "Staffing",
           good: good_4,
           medium: medium_4,
           poor: poor_4,
           "N/A": null_4
       },
       {
           name: "Referral",
           good: good_5,
           medium: medium_5,
           poor: poor_5,
           "N/A": null_5
       },
       {
           name: "Management",
           good: good_6,
           medium: medium_6,
           poor: poor_6,
           "N/A": null_6
       },
       {
           name: "Water And Sanitation",
           good: good_7,
           medium: medium_7,
           poor: poor_7,
           "N/A": null_7
       },
       {
           name: "Drugs",
           good: good_8,
           medium: medium_8,
           poor: poor_8,
           "N/A": null_8
       },
       {
           name: "Management Demand",
           good: good_9,
           medium: medium_9,
           poor: poor_9,
           "N/A": null_9
       },
       {
           name: "Patient Dignity",
           good: good_10,
           medium: medium_10,
           poor: poor_10,
           "N/A": null_10
       },
       {
           name: "Equipment",
           good: good_11,
           medium: medium_11,
           poor: poor_11,
           "N/A": null_11
       },
       {
           name: "Postnatal Care",
           good: good_12,
           medium: medium_12,
           poor: poor_12,
           "N/A": null_12
       },
       {
           name: "Family Planning",
           good: good_13,
           medium: medium_13,
           poor: poor_13,
           "N/A": null_13
       },
   ]
}

module.exports = {
    goodMediumPoorSort
}