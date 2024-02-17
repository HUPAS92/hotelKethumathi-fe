import HttpServiceConfig from "../configs/htttp-service-config";

class BookingApiService {
  validateBooking = (req, headers = {}) => {
    const formattedReq = {
      checkIn: req.checkIn,
      checkOut: req.checkOut,
      noOfAdults: req.noOfAdults,
      noOfChildren: req.noOfChildren,
      noOfRooms: req.noOfRooms,
      specialRequests: req.specialRequests,
    };
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post(
        "/booking/validate-new-booking",
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

  addBooking = (req, headers = {}) => {
    return new Promise((resolve, reject) => {
      HttpServiceConfig.post("/booking/add/new-booking", req, headers)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export default new BookingApiService();
