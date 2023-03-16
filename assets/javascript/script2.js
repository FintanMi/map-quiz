let close = document.getElementById('close')
let open = document.getElementById('open');
let modal = document.getElementById('modal');

// show modal 
open.addEventListener('click', () => modal.classList.add('show-modal'));

// close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// hide modal on outside click
window.addEventListener('click', event => event.target === modal ? modal.classList.remove('show-modal') : false);