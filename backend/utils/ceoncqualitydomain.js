const goodMediumPoorSort = (data) => {
   let good_1 = 0 
   let good_2 = 0 
   let good_3 = 0 
   let good_4 = 0 
   let good_5 = 0 
   let good_6 = 0 
   let good_7 = 0 
   let good_8 = 0 
   let medium_1 = 0 
   let medium_2 = 0 
   let medium_3 = 0 
   let medium_4 = 0 
   let medium_5 = 0 
   let medium_6 = 0 
   let medium_7 = 0 
   let medium_8 = 0 
   let poor_1 = 0 
   let poor_2 = 0 
   let poor_3 = 0 
   let poor_4 = 0 
   let poor_5 = 0 
   let poor_6 = 0 
   let poor_7 = 0 
   let poor_8 = 0 
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
       if (items["GROUP_FZ43E09_INFECTION_PREVENTION"] == 13) {
            good_1 += 1
       } else if (items["GROUP_FZ43E09_INFECTION_PREVENTION"] <= 12 || items["GROUP_FZ43E09_INFECTION_PREVENTION"] >= 7) {
           medium_1 += 1
       } else if (items["GROUP_FZ43E09_INFECTION_PREVENTION"] <= 6) {
           poor_1 += 1
       } else {
           null_1 += 1
       }
       if (items["GROUP_FZ43E09_CLINICAL_PRACTICE"] == 17) {
            good_2 += 1
       } else if (items["GROUP_FZ43E09_CLINICAL_PRACTICE"] <= 16 || items["GROUP_JF7YD07_STAFFING_001"] >= 9) {
           medium_2 += 1
       } else if (items["GROUP_FZ43E09_CLINICAL_PRACTICE"] <= 8) {
           poor_2 += 1
       } else {
           null_2 += 1
       }
       if (items["GROUP_FZ43E09_STAFFING"] == 9) {
            good_3 += 1
       } else if (items["GROUP_FZ43E09_STAFFING"] <= 8 || items["GROUP_FZ43E09_STAFFING"] >= 5) {
           medium_3 += 1
       } else if (items["GROUP_FZ43E09_STAFFING"] <= 4) {
           poor_3 += 1
       } else {
           null_3 += 1
       }
       if (items["GROUP_FZ43E09_INFRASTRUCTURE"] == 5) {
            good_4 += 1
       } else if (items["GROUP_FZ43E09_INFRASTRUCTURE"] <= 4 || items["GROUP_JF7YD07_MANAGEMENT"] >= 3) {
           medium_4 += 1
       } else if (items["GROUP_FZ43E09_INFRASTRUCTURE"] < 3 ) {
           poor_4 += 1
       } else {
           null_4 += 1
       }
       if (items["GROUP_FZ43E09_PATIENT_DIGNITY"] == 11) {
            good_5 += 1
       } else if (items["GROUP_FZ43E09_PATIENT_DIGNITY"] <= 10 || items["GROUP_FZ43E09_PATIENT_DIGNITY"] >= 6) {
           medium_5 += 1
       } else if (items["GROUP_FZ43E09_PATIENT_DIGNITY"] < 6) {
           poor_5 += 1
       } else {
           null_5 += 1
       }
       if (items["GROUP_FZ43E09_DRUGS"] == 12) {
            good_6 += 1
       } else if (items["GROUP_FZ43E09_DRUGS"] <= 11 || items["GROUP_JF7YD07_DRUGS_001"] >= 7) {
           medium_6 += 1
       } else if (items["GROUP_FZ43E09_DRUGS"] < 7) {
           poor_6 += 1
       } else {
           null_6 += 1
       }
       if (items["GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT"] == 20) {
            good_7 += 1
       } else if (items["GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT"] <= 19 || items["GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT"] >= 11) {
           medium_7 += 1
       } else if (items["GROUP_FZ43E09_SUPPLIES_AND_EQUIPMENT"] < 11) {
           poor_7 += 1
       } else {
           null_7 += 1
       }
       if (items["GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14"] == 14) {
            good_8 += 1
       } else if (items["GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14"] <= 13 || items["GROUP_JF7YD07_PATIENT_DIGNITY_001"] >= 7) {
           medium_8 += 1
       } else if (items["GROUP_FZ43E09_MANAGEMENT_FULL_MARKS_14"] < 7) {
           poor_8 += 1
       } else {
           null_8 += 1
       }
   })

   return [
       {
           name: "Infection Prevention",
           good: good_1,
           medium: medium_1,
           poor: poor_1,
           "N/A": null_1,
       },
       {
           name: "Clinical Practice",
           good: good_2,
           medium: medium_2,
           poor: poor_2,
           "N/A": null_2,
       },
       {
           name: "Staffing",
           good: good_3,
           medium: medium_3,
           poor: poor_3,
           "N/A": null_3,
       },
       {
           name: "Infrastructure",
           good: good_4,
           medium: medium_4,
           poor: poor_4,
           "N/A": null_4,
       },
       {
           name: "Patient Dignity",
           good: good_5,
           medium: medium_5,
           poor: poor_5,
           "N/A": null_5,
       },
       {
           name: "Drugs",
           good: good_6,
           medium: medium_6,
           poor: poor_6,
           "N/A": null_6,
       },
       {
           name: "Supplies And Equipment",
           good: good_7,
           medium: medium_7,
           poor: poor_7,
           "N/A": null_7,
       },
       {
           name: "Management",
           good: good_8,
           medium: medium_8,
           poor: poor_8,
           "N/A": null_8,
       },
   ]
}

module.exports = {
    goodMediumPoorSort
}