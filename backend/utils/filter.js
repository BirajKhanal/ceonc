const moment = require("moment");

const yearSort = require("./yearSort");
const palikaProvinceSort = require("./palikaProvinceSort");

const filter = (data, req, kind) => {
  let fnl = filterDate(data, req, kind);

  return fnl;
};

const filterPalika = (data, req) => {
  let reData = [];

  // console.log(data)

  if (req !== "") {
    data.map((items) => {
      if (items["name"] === req) {
        items["data"].map((item) => {
          reData.push(item);
        });
      }
    });
  } else {
    return "";
  }

  return reData;
};

const filterProvince = (data, req) => {
  let reData = [];

  if (req !== "") {
    data.map((items) => {
      if (items["name"] === req) {
        items["data"].map((item) => {
          reData.push(item);
        });
      }
    });
  } else {
    return "";
  }

  return reData;
};

const filterDistrict = (data, req) => {
  let reData = [];

  if (req !== "") {
    data.map((items) => {
      if (items["name"] === req) {
        items["data"].map((item) => {
          reData.push(item);
        });
      }
    });
  } else {
    return "";
  }
  
  return reData;
};

const filterFacility = (data, req) => {
  let reData = [];

  if (req !== "") {
    data.map((items) => {
      if (items["name"] === req) {
        items["data"].map((item) => {
          reData.push(item);
        });
      }
    });
  } else {
    return "";
  }

  return reData;
};

const filterDate = (data, req, kind) => {
  let dateAll = [];
  let province = [];
  let district = [];
  let palika = [];
  let facility = [];

  let kindProvince = "_1_PROVINCE";
  let kindDistrict = "_2_DISTRICT";
  let kindPalika = "_3_PALIKA";
  let kindFacility = "_4_NAME_OF_FACILITY";
  let kindDate = "_6_DATE_OF_SELF_ASSESSMENT";

  if (kind === "hf" || kind === "knowledge") {
    kindProvince = "PROVINCE";
    kindDistrict = "DISTRICT";
    kindPalika = "PALIKA";
    kindFacility = "_4_NAME_OF_FACILITY";
    kindDate = "DATE_OF_ASSESSMENT";
  }

  if (
    kind === "overallcs" ||
    kind === "grpsize" ||
    kind === "grpcsrate" ||
    kind === "grpabsltcs" ||
    kind === "delivery"
  ) {
    kindProvince = "PROVINCE";
    kindDistrict = "DISTRICT";
    kindPalika = "PALIKA";
    kindFacility = "GROUP_FACILITY__4_NAME_OF_FACILITY";
    kindDate = "_LAST_UPDATE_DATE";
  }

  // console.log(moment(2022-03-30) < moment(2022-03-29))

  data.map((items) => {
    if ( moment(items[kindDate]).format("YYYY-MM-DD") >= moment(req["startDate"]).format("YYYY-MM-DD") && moment(items[kindDate]).format("YYYY-MM-DD") <= moment(req["endDate"]).format("YYYY-MM-DD")
    ) {
      if (req["province"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindPalika)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? province.push(filtered3): province.push(filtered4);
      }
      if (req["district"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindPalika)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? district.push(filtered3): district.push(filtered4);
      }
      if (req["palika"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? palika.push(filtered3): palika.push(filtered4);
      }
      if (req["facility"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindPalika)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? facility.push(filtered3): facility.push(filtered4);
      }
      if (
        req["palika"] === "" &&
        req["province"] === "" &&
        req["district"] === "" &&
        req["facility"] === ""
      ) {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindPalika)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? dateAll.push(filtered3): dateAll.push(filtered4);
      }
    }
    if (req["startDate"] === "" && req["endDate"] === "")  {
      if (req["province"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindPalika)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );
        
        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? province.push(filtered3): province.push(filtered4);
      }
      if (req["district"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindPalika)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? district.push(filtered3): district.push(filtered4);
      }
      if (req["palika"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? palika.push(filtered3): palika.push(filtered4);
      }
      if (req["facility"] !== "") {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindDate)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindPalika)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? facility.push(filtered3): facility.push(filtered4);
      }
      if (
        req["palika"] === "" &&
        req["province"] === "" &&
        req["district"] === "" &&
        req["facility"] === ""
      ) {
        let filtered1 = Object.fromEntries(
          Object.entries(items).filter(([k, v]) => k !== kindPalika)
        );
        let filtered2 = Object.fromEntries(
          Object.entries(filtered1).filter(([k, v]) => k !== kindProvince)
        );
        let filtered3 = Object.fromEntries(
          Object.entries(filtered2).filter(([k, v]) => k !== kindDistrict)
        );
        let filtered4 = Object.fromEntries(
          Object.entries(filtered3).filter(([k, v]) => k !== kindFacility)
        );

        kind === "overallcs" || kind === "grpsize" || kind === "grpcsrate" || kind === "grpabsltcs" ? dateAll.push(filtered3): dateAll.push(filtered4);
      }
    }
  });

  province = filterProvince(
    palikaProvinceSort.palikaProvinceSort(province, kind, "province"),
    req["province"]
  );
  district = filterDistrict(
    palikaProvinceSort.palikaProvinceSort(district, kind, "district"),
    req["district"]
  );
  palika = filterPalika(
    palikaProvinceSort.palikaProvinceSort(palika, kind, "palika"),
    req["palika"]
  );
  facility = filterFacility(
    palikaProvinceSort.palikaProvinceSort(facility, kind, "facility"),
    req["facility"]
  );
  dateAll = yearSort.yearSort(dateAll, kind, "year");

  let reData = [];


  if (province) {
    reData = province;
  }
  if (district) {
    reData = district;
  }
  if (palika) {
    reData = palika;
  }
  if (facility) {
    reData = facility;
  } else {
    dateAll.map((items) => {
      items["data"].map((item) => {
        reData.push(item);
      });
    });
  }

  let reBody = [
    {
      startDate: req["startDate"],
      endDate: req["endDate"],
      province: req["province"],
      district: req["district"],
      palika: req["palika"],
      facility: req["facility"],
      data: reData,
    },
  ];

  return reBody;
};

module.exports = {
  filter,
};
