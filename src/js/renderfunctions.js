export function createGalleryMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
     
    />
  </a>
</li>`;
    })
    .join('');
}
