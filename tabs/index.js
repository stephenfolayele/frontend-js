

const tabsContainer = document.querySelector('.container')
const tabContents = document.querySelectorAll('.content')
const tabButtons = document.querySelectorAll('.tab')

tabsContainer.addEventListener('click', (e)=>{
    const currentId = e.target.dataset.id

    if(currentId) {
        tabButtons.forEach((btn)=>{
            btn.classList.remove('active')
        });

        tabContents.forEach((content)=> {
            content.classList.remove('active')
        })


        const currentElement = document.getElementById(currentId)
        currentElement.classList.add('active')
    }

})


