import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description}) =>
    `<li data-img-id=${preview} class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener('click', onClick)

function onClick(evt) {
  evt.preventDefault()
    const { target } = evt;
    if (!target.classList.contains('gallery__image')) {
        return;
    }
  const imgId = target.dataset.imgId ?? target.closest('.gallery__item').dataset.imgId;
console.log(imgId);
  const currentItem = galleryItems.find(({preview}) => preview === imgId);
  console.log(currentItem);
    if (!currentItem) {
      const instance = basicLightbox.create(`
      <div class="modal">
        <img width="1400" height="900" src="https://placehold.it/1400x900">
    </div>
	`);
        instance.show();
        return;
    } else {
      const instance = basicLightbox.create(`
    <div class="modal">
        <img width="1280" src="${currentItem.original}" alt ='${currentItem.description}'>
    </div>
	`);
        instance.show();
    }
}
