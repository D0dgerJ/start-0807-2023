const toastButton = document.getElementById('toastButton');
const toast = document.getElementById('toast');
const toastSound = document.getElementById('toastSound');

toastButton.addEventListener('click', () => {
  showToast();
});

function showToast() {
  toastSound.play();
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000); 
}