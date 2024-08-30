const toBottomBtn = document.querySelector('.scroll-to-bottom-button')
const toTop = document.querySelector('.scroll-to-top-button')
const loader = document.querySelector('.loader')
const users_list = document.querySelector('.names-list')



function showLoader(){
    loader.classList.add('show-loader')
    users_list.classList.add('hide-user-list')
}

function removeLoader(){
    loader.classList.remove('show-loader')
    users_list.classList.remove('hide-user-list')
}


async function fetchData(){
    showLoader()
    try {
        const response = await fetch("https://dummyjson.com/users?limit=100", 
        {
            method: "GET",
        })

        const data = await response.json()
        console.log(data.users);
        if (data && data.users) displayData(data.users)
        removeLoader()
    } catch (e){
        console.log(e);
    }
}

fetchData()

function displayData(users){
    users_list.innerHTML = 
    users.map(
        (user)=> `<li>${user.firstName} ${user.lastName}</li>`
    ).join(' ')
}


toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

toBottomBtn.addEventListener('click', () => {
    console.log(document.body.scrollHeight);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
})