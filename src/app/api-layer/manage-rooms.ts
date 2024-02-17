import HttpServiceConfig from "../configs/htttp-service-config";
import roomData from "../data/adminRooms.json";

class ManageRoomsApiService {
  getRooms = (queryParam = {}, config = {}) => {
    const queryValueArray = Object.keys(queryParam).reduce((arr, key) => {
      const valueObj = queryParam[key];
      if ((valueObj || valueObj === 0) && valueObj !== "") {
        arr.push(`${key}=${valueObj}`);
      }
      return arr;
    }, []);

    const queryPath = queryValueArray.join("&");

    return new Promise((resolve, reject) => {
      resolve(roomData);
    });
    // return new Promise((resolve, reject) => {
    //   HttpServiceConfig.get(`/data?${queryPath}`, config)
    //     .then((data) => {
    //       //   resolve(data);
    //     })
    //     .catch((error) => {
    //       reject(error);
    //     });
    // });
  };

  getRoomById = (id, headers = {}) => {
    const data = roomData.content.filter((dt) => dt.id === id);
    return new Promise((resolve, reject) => {
      resolve(data[0]);
      // HttpServiceConfig.get(`/getbyid/${id}`, headers)
      //   .then((data) => {
      //     resolve(data);
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    });
  };

  createRoom = (req, headers = {}) => {
    const formattedReq = {
      roomName: req.roomName,
      floor: req.floor,
      roomStatus: req.roomStatus,
      roomTypeId: req.roomTypeId,
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post("/room/add/new-room", formattedReq, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateRoom = (id, req, headers = {}) => {
    const formattedReq = {
      roomName: req.roomName,
      floor: req.floor,
      roomStatus: req.roomStatus,
      roomTypeId: req.roomTypeId,
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

export default new ManageRoomsApiService();
