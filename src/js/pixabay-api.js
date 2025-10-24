import axios from "axios";

const API_KEY = "52913188-dddfb770e3e7ce37c62d4d4c9"; 
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query.trim(),
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: 40,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data; 
}