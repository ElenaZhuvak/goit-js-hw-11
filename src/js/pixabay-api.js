import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASIC_URL = 'https://pixabay.com/api/';
const KEY_API = '46224221-307a76b395d66c959be951e41';

export function fetchImages(query) {
    const searchParams = new URLSearchParams({
        key: KEY_API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASIC_URL}?${searchParams}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
    .then(data => {
        const images = data.hits;
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            return [];
        }
        return images;
    })
    .catch(error => {
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: "topRight",
        });
        return []
    });
}
