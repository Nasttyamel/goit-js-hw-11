import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", onSearch);

async function onSearch(e) {
  e.preventDefault();
  const query = input.value.trim();

  clearGallery();

  if (!query) {
    iziToast.warning({
      title: "Упс!",
      message: "Введіть пошукове слово.",
      position: "topRight",
    });
    return;
  }

  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);
  } catch (err) {
    iziToast.error({
      title: "Помилка",
      message: `Не вдалося завантажити зображення: ${err.message}`,
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

