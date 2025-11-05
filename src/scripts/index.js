const modal = document.querySelector('.modal');

const openModalButtons = [
    document.querySelector('.header__button'),
    document.querySelector('.faq__button')
];

const closeModalButton = document.querySelector('.modal-content__close-btn');

function openModal() {
    modal.showModal();

    modal.classList.add('is-open');
    modal.classList.remove('is-closed');
};


function closeModal() {

    modal.classList.add('is-closed');
    modal.classList.remove('is-open');

    setTimeout(() => {
        modal.close();
    }, 300);
};

openModalButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', openModal);
    }
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        closeModal()
    });
};

modal.addEventListener('close', () => {
    modal.classList.add('is-closed');
    modal.classList.remove('is-open')
});
