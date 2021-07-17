import * as axios from "axios";

export const usersAPI = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => response.data);
  },

  getRepositories(username, per_page = 4, page = 1) {
    return axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=${per_page}&page=${page}`
      )
      .then((response) => response.data);
  },
};
