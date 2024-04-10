const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = image.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});