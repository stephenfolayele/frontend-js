

const openModal = document.querySelector('.openModal')
const modalBackground = document.querySelector('.modal-background')
const closeModal = document.querySelector('.close-icon')
const closeModalBtn = document.querySelector('.close')

openModal.addEventListener('click', ()=> {
    modalBackground.style.display = 'block'

    closeModal.addEventListener('click', ()=> {
        modalBackground.style.display = 'none'
    })
    closeModalBtn.addEventListener('click', ()=> {
        modalBackground.style.display = 'none'
    })

    window.addEventListener('click', (e)=>{
        console.log(e.target);
        if (e.target === modalBackground){
            modalBackground.style.display = 'none'
        }
    })


})