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

export const getAlbums = async () => {
  try {
    const { data } = await api.get("/api/albums");
    return data;

  } catch (error) {
    console.log("Album API Error:", error);
    return [];
  }
};

export const getAlbumById = async (id) => {
  try {

    const { data } = await api.get(`/api/albums/${id}`);

    return data;

  } catch (error) {

    console.log("Album Detail Error:", error);

    return null;

  }
};


export const getArtistById = async (id) => {

  try {

    const { data } = await api.get(
      `/api/artists/${id}`
    );

    return data;


  } catch(error){

    console.log("Artist Detail Error:", error);

    return null;

  }

};