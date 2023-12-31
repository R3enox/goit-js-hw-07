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
  const options = {
    handler: null,
    onShow(instance) {
      this.handler = onEscape.bind(instance)
      document.addEventListener('keydown', this.handler)
  },

    onClose() {
    document.removeEventListener('keydown', this.handler)
  }
}
  const instance = basicLightbox.create(`
    <div class="modal">
        <img width="1280" src="${currentItem.original}" alt ='${currentItem.description}'>
    </div>
	`,options);
    instance.show(); 
      document.addEventListener('keydown', onEscape);
  const newContainer = document.querySelector(".basicLightbox");
  newContainer.addEventListener("click", () => {
    instance.close();
  });
};


function onEscape(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    this.close();
  }
  };