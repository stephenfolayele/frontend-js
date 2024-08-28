const toggleBtn = document.querySelector('.toggle-btn')
const bodyTag = document.querySelector('body')

// toggleBtn.addEventListener('click', ()=> {
//     if (bodyTag.classList.contains('dark')){
//         bodyTag.classList.remove('dark')
//         bodyTag.classList.add('light')
//     } else {
//         bodyTag.classList.remove('light')
//         bodyTag.classList.add('dark')
//     }

//     if (toggleBtn.classList.contains('dark')){
//         toggleBtn.classList.remove('dark')
//         toggleBtn.classList.add('light')
//     } else {
//         toggleBtn.classList.remove('light')
//         toggleBtn.classList.add('dark')
//     }
// })


toggleBtn.addEventListener('click', ()=> {
    console.log(bodyTag.getAttribute('data-theme'));
    if (bodyTag.getAttribute('data-theme') === 'dark'){
        bodyTag.setAttribute('data-theme', 'blue')
    } else {
        bodyTag.setAttribute('data-theme', 'dark')
    }

    if (toggleBtn.getAttribute('data-theme') === 'dark'){
        toggleBtn.setAttribute('data-theme', 'blue')
    } else {
        toggleBtn.setAttribute('data-theme', 'dark')
    }
});