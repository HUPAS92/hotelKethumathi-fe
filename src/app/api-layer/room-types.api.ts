import HttpServiceConfig from "../configs/htttp-service-config";

class RoomServiceApiService {
  getRoomServices = (queryParam = {}, config = {}) => {
    const queryValueArray = Object.keys(queryParam).reduce((arr, key) => {
      const valueObj = queryParam[key];
      if ((valueObj || valueObj === 0) && valueObj !== "") {
        arr.push(`${key}=${valueObj}`);
      }
      return arr;
    }, []);

    const queryPath = queryValueArray.join("&");

    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(
        `/room-type/get/all-room-types?${queryPath}`,
        config
      )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  getRoomServiceById = (id, headers = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/room-type/get/room-type/${id}`, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  createRoomService = (req, headers = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post("/room-type/add/new-room-type", req, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateRoomService = (id, req, headers = {}) => {
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

export default new RoomServiceApiService();
