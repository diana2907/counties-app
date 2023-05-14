import axios from "axios";

axios.defaults.baseURL = "http://universities.hipolabs.com";

export const fetchCountry = async (country) => {
  const { data } = await axios.get(`/search?country=${country}`);
  return data;
};
