import axios from "axios";
import { AUTH_USER } from "./staticConfig";
import { API_URL } from "../modules/auth/core/_requests";

class HttpServices {
  get = (path = "", config = {}) => {
    const configHeaders = {
      headers: {
        ...config.headers,
        Authorization: AUTH_USER?.token ? `Bearer ${AUTH_USER?.token}` : "",
      },
    };
    const url = `${API_URL + path}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url, configHeaders)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            const res = { error: "204 No Content..." };
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  post = (path = "", req, config = {}) => {
    const configHeaders = {
      headers: {
        ...config.headers,
        Authorization: AUTH_USER?.token ? `Bearer ${AUTH_USER?.token}` : "",
      },
    };
    const url = `${API_URL + path}`;
    return new Promise((resolve, reject) => {
      axios
        .post(url, req, configHeaders)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            const res = { error: "204 No Content..." };
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  put = (path = "", req, config = {}) => {
    const configHeaders = {
      headers: {
        ...config.headers,
        Authorization: AUTH_USER?.token ? `Bearer ${AUTH_USER?.token}` : "",
      },
    };
    const url = `${API_URL + path}`;

    return new Promise((resolve, reject) => {
      axios
        .put(url, req, configHeaders)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            const res = { error: "204 No Content..." };
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  delete = (path = "", id, config = {}) => {
    const configHeaders = {
      headers: {
        ...config.headers,
        Authorization: AUTH_USER?.token ? `Bearer ${AUTH_USER?.token}` : "",
      },
    };
    const url = `${API_URL + path}/${id}`;

    return new Promise((resolve, reject) => {
      axios
        .delete(url, configHeaders)
        .then((response) => {
          if (response.data) {
            resolve(response.data);
          } else {
            const res = { error: "204 No Content..." };
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new HttpServices();
