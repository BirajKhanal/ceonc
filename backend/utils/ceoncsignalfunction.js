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
   let poor_1 = 0 
   let poor_2 = 0 
   let poor_3 = 0 
   let poor_4 = 0 
   let poor_5 = 0 
   let poor_6 = 0 
   let poor_7 = 0 
   let poor_8 = 0 
   let poor_9 = 0 
   let null_1 = 0 
   let null_2 = 0 
   let null_3 = 0 
   let null_4 = 0 
   let null_5 = 0 
   let null_6 = 0 
   let null_7 = 0 
   let null_8 = 0 
   let null_9 = 0 

   data.map((items) => {
       if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] == 4) {
            good_1 += 1
       } else if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] <= 3) {
           poor_1 += 1
       } else {
           null_1 += 1
       }
       if (items["GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA"] == 4) {
            good_2 += 1
       } else if (items["GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA"] <= 3) {
           poor_2 += 1
       } else {
           null_2 += 1
       }
       if (items["GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC"] == 2) {
            good_3 += 1
       } else if (items["GROUP_FT6ZY60_ASSISTED_VAGINAL_DELIVERY_VAC"] < 2) {
           poor_3 += 1
       } else {
           null_3 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS"] == 3) {
            good_4 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS"] <= 2) {
           poor_4 += 1
       } else {
           null_4 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] == 3) {
            good_5 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] < 3) {
           poor_5 += 1
       } else {
           null_5 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] == 5) {
            good_6 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] < 5 ) {
           poor_6 += 1
       } else {
           null_6 += 1
       }
       if (items["GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O"] == 3) {
            good_7 += 1
       } else if (items["GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O"] < 3) {
           poor_7 += 1
       } else {
           null_7 += 1
       }
       if (items["GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION"] == 2) {
            good_8 += 1
       } else if (items["GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION"] < 2) {
           poor_8 += 1
       } else {
           null_8 += 1
       }
       if (items["GROUP_FT6ZY60_PERFORM_SURGERY"] == 5) {
            good_9 += 1
       } else if (items["GROUP_FT6ZY60_PERFORM_SURGERY"] < 5) {
           poor_9 += 1
       } else {
           null_9 += 1
       }
   })

   return [
       {
           name: "Manual Removal Of Retained",
           "Standards Met": good_1,
           "Standards Not Met": poor_1,
           "N/A": null_1,
       },
       {
           name: "New Born Resuscitation",
           "Standards Met": good_2,
           "Standards Not Met": poor_2,
           "N/A": null_2,
       },
       {
           name: "Assisted Vaginal Delivery",
           "Standards Met": good_3,
           "Standards Not Met": poor_3,
           "N/A": null_3,
       },
       {
           name: "Parenteral Uterotonic Drugs",
           "Standards Met": good_4,
           "Standards Not Met": poor_4,
           "N/A": null_4,
       },
       {
           name: "Parenteral Antibiotics Mother",
           "Standards Met": good_5,
           "Standards Not Met": poor_5,
           "N/A": null_5,
       },
       {
           name: "Parenteral Anti Convulsant",
           "Standards Met": good_6,
           "Standards Not Met": poor_6,
           "N/A": null_6,
       },
       {
           name: "Removal Of Retained Products",
           "Standards Met": good_7,
           "Standards Not Met": poor_7,
           "N/A": null_7,
       },
       {
           name: "Perform Blood Transfusion",
           "Standards Met": good_8,
           "Standards Not Met": poor_8,
           "N/A": null_8,
       },
       {
           name: "Perform Surgery",
           "Standards Met": good_9,
           "Standards Not Met": poor_9,
           "N/A": null_9,
       },
   ]
}

module.exports = {
    goodMediumPoorSort
}