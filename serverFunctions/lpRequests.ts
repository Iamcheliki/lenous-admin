import { BASE_BACK_URL } from "@/constant";
import axios from "axios";
import Cookies from "js-cookie";

export const getLpList = async () => {
  return axios.get(`${BASE_BACK_URL}/lp/get-all-lp`).then((res) => {
    return res;
  });
};

export const createNewLp = async () => {
  return axios
    .post(
      `${BASE_BACK_URL}/lp/create-new-pool`,
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};
