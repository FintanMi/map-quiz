let close = document.getElementById('close')
let open = document.getElementById('open');
let modal = document.getElementById('modal');
let closeInstruct = document.getElementById('close-instruct');
let openInstruct = document.getElementById('open-instruct');
let modalInstruct = document.getElementById('modal-instruct');

// show modal 
open.addEventListener('click', () => modal.classList.add('show-modal'));
openInstruct.addEventListener('click', () => modalInstruct.classList.add('show-modal-instruct'));

// close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
closeInstruct.addEventListener('click', () => modalInstruct.classList.remove('show-modal-instruct'));

// hide modal on outside click
window.addEventListener('click', event => event.target === modal ? modal.classList.remove('show-modal') : false);
window.addEventListener('click', event => event.target === modalInstruct ? modalInstruct.classList.remove('show-modal-instruct') : false);

