import axios from "axios";

const apiClient = axios.create({
    baseURL: `https://api.tvmaze.com/`,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default {
    getTvShows() {
        return apiClient.get("search/shows?q=batman");
    },
    getTvShow(id) {
        return apiClient.get("shows/" + id)
    }
};