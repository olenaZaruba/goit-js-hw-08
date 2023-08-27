// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';
import { createGalleryMarkup } from './renderFunctions';

// Change code below this line

const cardsMarkup = createGalleryMarkup(galleryItems);

refs.cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
