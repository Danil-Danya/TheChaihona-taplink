let mobileModal = document.querySelector('.mobile__modal');
let mobileNavbarTrigger = document.querySelector('.mobile__navbar')

const toggleMobileModal = () => {;
    mobileModal.classList.toggle('mobile__modal-active');
}

mobileNavbarTrigger.addEventListener('click', () => toggleMobileModal());