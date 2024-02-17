import HttpServiceConfig from "../configs/htttp-service-config";

class StaffMembersApiService {
  getStaffMembers = (queryParam = {}, config = {}) => {
    const queryValueArray = Object.keys(queryParam).reduce((arr, key) => {
      const valueObj = queryParam[key];
      if ((valueObj || valueObj === 0) && valueObj !== "") {
        arr.push(`${key}=${valueObj}`);
      }
      return arr;
    }, []);

    const queryPath = queryValueArray.join("&");
    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/staff/get/all-staff-members?${queryPath}`, config)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getStaffMemberById = (id, headers = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/staff/get/staff-member/${id}`, headers)
        .then((data) => {
          const updatedData = {
            ...data,
            ...data.user,
            user: undefined,
          };
          resolve(updatedData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  createStaffMember = (req, headers = {}) => {
    const formattedReq = {
      firstName: req.firstName,
      lastName: req.lastName,
      empNum: req.empNum,
      phone: req.phone,
      user: {
        userEmail: req.userEmail,
        userPassword: req.userPassword,
        userRole: req.userRole,
        userStatus: req.userStatus,
      },
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post(
        "/staff/add/new-staff-member",
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

  updateStaffMember = (id, req, headers = {}) => {
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

export default new StaffMembersApiService();
