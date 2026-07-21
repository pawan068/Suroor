import axios from "../api/axios";


export const searchArtists = async (query) => {

  try {

    const response = await axios.get(
      `/search/artists?query=${query}`
    );

    return response.data;

  } catch(error){

    console.log(error);
    return null;

  }

};