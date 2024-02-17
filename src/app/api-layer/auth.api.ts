import HttpServiceConfig from "../configs/htttp-service-config";

class AuthApiService {
  login = (req, headers = {}) => {
    const formattedReq = {
      userEmail: req.userEmail,
      userPassword: req.userPassword,
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post("/login", formattedReq, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new AuthApiService();
