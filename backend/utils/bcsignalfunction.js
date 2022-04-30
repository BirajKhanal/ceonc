const goodMediumPoorSort = (data) => {
   let good_1 = 0 
   let good_2 = 0 
   let good_3 = 0 
   let good_4 = 0 
   let good_5 = 0 
   let good_6 = 0 
   let good_7 = 0 
   let poor_1 = 0 
   let poor_2 = 0 
   let poor_3 = 0 
   let poor_4 = 0 
   let poor_5 = 0 
   let poor_6 = 0 
   let poor_7 = 0 
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
       if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] == 2) {
            good_1 += 1
       } else if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] <= 1) {
           poor_1 += 1
       } else {
           null_1 += 1
       }
       if (items["GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA"] == 3) {
            good_2 += 1
       } else if (items["GROUP_FT6ZY60_NEW_BORN_RESUSCITATION_FULL_MA"] < 3) {
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
       if (items["GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS"] == 2) {
            good_4 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_UTEROTONIC_DRUGS"] < 2) {
           poor_4 += 1
       } else {
           null_4 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] == 3) {
            good_5 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] <= 2) {
           poor_5 += 1
       } else {
           null_5 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] == 6) {
            good_6 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] < 6 ) {
           poor_6 += 1
       } else {
           null_6 += 1
       }
       if (items["GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O"] == 2) {
            good_7 += 1
       } else if (items["GROUP_FT6ZY60_REMOVAL_OF_RETAINED_PRODUCTS_O"] < 1) {
           poor_7 += 1
       } else {
           null_7 += 1
       }
   })

   return [
       {
           name: "Manual Removal of Retained",
           good: good_1,
           poor: poor_1,
           "N/A": null_1
       },
       {
           name: "New Born Resuscitation Full",
           good: good_2,
           poor: poor_2,
           "N/A": null_2
       },
       {
           name: "Assisted Vaginal Delivery",
           good: good_3,
           poor: poor_3,
           "N/A": null_3
       },
       {
           name: "Parenteral Uterotonic Drugs",
           good: good_4,
           poor: poor_4,
           "N/A": null_4
       },
       {
           name: "Parenteral Antibiotics Mother",
           good: good_5,
           poor: poor_5,
           "N/A": null_5
       },
       {
           name: "Parenteral Anti Convulsant",
           good: good_6,
           poor: poor_6,
           "N/A": null_6
       },
       {
           name: "Removal Of Retained Products",
           good: good_7,
           poor: poor_7,
           "N/A": null_7
       },
   ]
}

module.exports = {
    goodMediumPoorSort
}