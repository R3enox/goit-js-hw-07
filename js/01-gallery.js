import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
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
  const imgId = target.dataset.source ?? target.closest('.gallery__image').dataset.imgId;
  const currentItem = galleryItems.find(({original}) => original === imgId);
    const instance = basicLightbox.create(`
    <div class="modal">
        <img width="1280" src="${currentItem.original}" alt ='${currentItem.description}'>
    </div>
	`);
    instance.show(); 
      document.addEventListener('keydown', onEscape);
function onEscape(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', onEscape);
        }
  };
  const newContainer = document.querySelector(".basicLightbox");
  newContainer.addEventListener("click", () => {
    instance.close();
  });
};