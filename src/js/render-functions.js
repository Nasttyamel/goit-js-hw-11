import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.getElementById("gallery");
const loaderRef  = document.getElementById("loader");


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});

export function createGallery(images) {
  const gallery = document.getElementById('gallery');
  const markup = images
    .map(
      image => `
      <li class="card">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="meta">
          <span>❤️ ${image.likes}</span>
          <span>👁️ ${image.views}</span>
          <span>💬 ${image.comments}</span>
          <span>⬇️ ${image.downloads}</span>
        </div>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryRef.innerHTML = "";
}

export function showLoader() {
  loaderRef.classList.add("is-active");
  loaderRef.setAttribute("aria-hidden", "false");
}

export function hideLoader() {
  loaderRef.classList.remove("is-active");
  loaderRef.setAttribute("aria-hidden", "true");
}

function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[m]));
}
