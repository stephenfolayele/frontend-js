const previousBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const iconsWrapper = document.querySelectorAll('.icon-wrapper')
const progress = document.querySelector('.progress')

let currentSelectedStep = 1;

nextBtn.addEventListener('click', ()=> {
    if (currentSelectedStep < iconsWrapper.length) {
        currentSelectedStep++;
    }

    handleUpdateStep()
})

previousBtn.addEventListener('click', ()=> {
    if (currentSelectedStep > 1) {
        currentSelectedStep--;
    }

    handleUpdateStep()
})

function handleUpdateStep(){
    console.log(currentSelectedStep);
    iconsWrapper.forEach(
        (items, index) => {
            if (index < currentSelectedStep) {
                items.classList.add('active')
            } else {
                items.classList.remove('active')
            }
        }
    )

    progress.style.width = ((currentSelectedStep - 1) 
    / (iconsWrapper.length - 1)) * 100 + '%';

    if (currentSelectedStep === 1) {previousBtn.disabled = true}
    else if (currentSelectedStep === 4) {nextBtn.disabled = true}
    else {
        previousBtn.disabled = false;
        nextBtn.disabled = false
    }

}
handleUpdateStep()
