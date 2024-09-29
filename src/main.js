import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-api'

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
    fetchImages(query)

    form.reset()
}

