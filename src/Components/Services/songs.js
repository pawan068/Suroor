import axios from "../../api/axios";

export const searchSongs = async (query) => {
  try {
    const response = await axios.get(`/search/songs?query=${query}`);

    return response.data;

  } catch (error) {
    console.log(error);
    return null;
  }
};