import HttpServiceConfig from "../configs/htttp-service-config";

class MasterDataApiService {
  getMainGuest = (email, config = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.get(`/guest/get/main-guest/${email}`, config)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new MasterDataApiService();
