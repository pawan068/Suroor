import api from "../../api/axios";


export const searchSongs = async (query) => {
  try {
    const { data } = await api.get(
      `/api/search?query=${query}`
    );

    return data;

  } catch (error) {
    console.log("Song API Error:", error);
    return null;
  }
};