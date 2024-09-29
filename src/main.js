import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-api'
import { renderGallery } from "./js/render-functions";
import { list } from "postcss";

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();
    const query = form.elements.searchInput.value.trim();

    if (query === '') {
        iziToast.warning({
            message: 'Please fill in the field',
            position: "topRight",
        });
        return;
    }

    gallery.innerHTML = '';

    fetchImages(query)
        .then(images => {
            if (images.length > 0) {
                renderGallery(images);
                initializeLightbox();
            }
        })
        .catch(error => {
            console.error(error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching images. Please try again',
                position: "topRight",
            });
        })

    form.reset()
}

function initializeLightbox () {
    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    }
}

