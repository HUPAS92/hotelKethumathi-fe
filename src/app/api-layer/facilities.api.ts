import HttpServiceConfig from "../configs/htttp-service-config";

class FacilitiesApiService {
  getFacilities = (queryParam = {}, config = {}) => {
    const queryValueArray = Object.keys(queryParam).reduce((arr, key) => {
      const valueObj = queryParam[key];
      if ((valueObj || valueObj === 0) && valueObj !== "") {
        arr.push(`${key}=${valueObj}`);
      }
      return arr;
    }, []);

    const queryPath = queryValueArray.join("&");

    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/facility/get/all-facilities?${queryPath}`, config)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getFacilityById = (id, headers = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/facility/get/facility/${id}`, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  createFacility = (req, headers = {}) => {
    const formattedReq = {
      facilityName: req.facilityName,
      facilityDescription: req.facilityDescription,
      facilityCategory: req.facilityCategory,
      availability: req.availability,
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post(
        "/facility/add/new-facility",
        formattedReq,
        headers
      )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateFacility = (id, req, headers = {}) => {
    const formattedReq = {
      firstName: req.firstName,
      lastName: req.lastName,
      empNum: req.empNum,
      phone: req.phone,
      userEmail: req.userEmail,
      userPassword: req.userPassword,
      userRole: req.userRole,
      userStatus: req.userStatus,
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.put("/post", formattedReq, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new FacilitiesApiService();
