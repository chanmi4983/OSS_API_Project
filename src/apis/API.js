import axios from "axios";

const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;
// const API_URL = process.env.REACT_APP_API_URL;

export const fetchArtworks = async (page = 1) => {
  try {
    const response = await axios.get(`/api/openapi/service/rest/meta10/get20150041`, {
      params: {
        serviceKey: SERVICE_KEY,
        numOfRows: 10,
        pageNo: page,
        resultType: "json",
      },
    });
    return response.data.response.body.items.item;
  } catch (err) {
    console.error("API 요청 오류 발생:", err.message);
    throw new Error("데이터를 불러오는 중 문제가 발생했습니다.");
  }
};
