import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getCampaigns = () => {
  return axios.get("/api/twilio/campaigns", { headers: authHeader() });
}

const getVolunteers = () => {
  return axios.get("/api/volunteers", { headers: authHeader() });
}

const getStats = () => {
  return axios.get("/api/twilio/campaign/stats", { headers: authHeader() });
}

const sendMsgs = (campaign) => {
  // return axios.post("/api/twilio/send", { headers: authHeader() } , );
  return axios.post("/api/twilio/send", { campaign }, { headers: authHeader() });
  // .then(res => {
  //   console.log(res);
  //   console.log(res.data);
  // })
}

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getCampaigns,
  getVolunteers,
  getStats,
  sendMsgs
};