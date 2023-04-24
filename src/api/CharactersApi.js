import { API_HOST } from "../utils/Contants";



export async function CharacterApi(nexturl) {
  console.log("si entro a peticion api")
    try {
        const url = `${API_HOST}/character`
        const response = await fetch(nexturl || url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getCharacterById(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

