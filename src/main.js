import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);
function onSubmit (event) {
    event.preventDefault();
    const query = form.elements.input.value;
    console.log(query);
}
onSubmit("dog");
