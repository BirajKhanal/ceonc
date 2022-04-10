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
   let medium_1 = 0 
   let medium_2 = 0 
   let medium_3 = 0 
   let medium_4 = 0 
   let medium_5 = 0 
   let medium_6 = 0 
   let medium_7 = 0 
   let medium_8 = 0 
   let medium_9 = 0 
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
   let null_10 = 0 
   let null_11 = 0 
   let null_12 = 0 
   let null_13 = 0 

   data.map((items) => {
       if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] == 5) {
            good_1 += 1
       } else if (items["GROUP_FT6ZY60_MANUAL_REMOVAL_OF_RETAINED_PLA"] <= 4) {
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
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] == 4) {
            good_5 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTIBIOTICS_MOTHER"] <= 3) {
           poor_5 += 1
       } else {
           null_5 += 1
       }
       if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] == 4) {
            good_6 += 1
       } else if (items["GROUP_FT6ZY60_PARENTERAL_ANTI_CONVULSANT"] < 4 ) {
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
       if (items["GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION"] == 3) {
            good_8 += 1
       } else if (items["GROUP_FT6ZY60_PERFORM_BLOOD_TRANSFUSION"] < 3) {
           poor_8 += 1
       } else {
           null_8 += 1
       }
       if (items["GROUP_FT6ZY60_PERFORM_SURGERY"] == 6) {
            good_9 += 1
       } else if (items["GROUP_FT6ZY60_PERFORM_SURGERY"] < 6) {
           poor_9 += 1
       } else {
           null_9 += 1
       }
   })

   return [
       {
           name: "Manual Removal Of Retained",
           good: good_1,
           medium: medium_1,
           poor: poor_1,
           null: null_1,
       },
       {
           name: "New Born Resuscitation",
           good: good_2,
           medium: medium_2,
           poor: poor_2,
           null: null_2,
       },
       {
           name: "Assisted Vaginal Delivery",
           good: good_3,
           medium: medium_3,
           poor: poor_3,
           null: null_3,
       },
       {
           name: "Parenteral Uterotonic Drugs",
           good: good_4,
           medium: medium_4,
           poor: poor_4,
           null: null_4,
       },
       {
           name: "Parenteral Antibiotics Mother",
           good: good_5,
           medium: medium_5,
           poor: poor_5,
           null: null_5,
       },
       {
           name: "Parenteral Anti Convulsant",
           good: good_6,
           medium: medium_6,
           poor: poor_6,
           null: null_6,
       },
       {
           name: "Removal Of Retained Products",
           good: good_7,
           medium: medium_7,
           poor: poor_7,
           null: null_7,
       },
       {
           name: "Perform Blood Transfusion",
           good: good_8,
           medium: medium_8,
           poor: poor_8,
           null: null_8,
       },
       {
           name: "Perform Surgery",
           good: good_9,
           medium: medium_9,
           poor: poor_9,
           null: null_9,
       },
   ]
}

module.exports = {
    goodMediumPoorSort
}