import axios from "../api/axios";


export const searchAlbums = async (query) => {

  try {

    const response = await axios.get(
      `/search/albums?query=${query}`
    );

    return response.data;

  } catch(error){

    console.log(error);
    return null;

  }

};