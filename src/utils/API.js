import axios from "axios";
// ^import axios for api call and below is the default export of axios function 
export default {
  getRandomUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};