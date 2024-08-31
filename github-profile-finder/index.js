const gitBtn = document.querySelector('.class-button')
const inputSearch = document.querySelector('.search-input')
const loader = document.querySelector('.loading')
const profile_wrapper = document.querySelector('.github-profile-details')



function showLoader(){
    loader.classList.add('show')
    profile_wrapper.classList.add('hide')
}
function removeLoader(){
    loader.classList.remove('show')
    profile_wrapper.classList.remove('hide')

}

async function fetchGithubData(){
    try {
        const response = await fetch(
            `https://api.github.com/users/${inputSearch.value}` ,
            {
                method: 'GET'
            }
        )
        const data = await response.json() 
        if (data){
            removeLoader()
            displayResult(data)
            inputSearch.value = ''
        } 

    } catch (e) {
        console.log(e);
    }
}

function displayResult(data){
    const { login, avatar_url, public_repos, followers, following } = data

    profile_wrapper.innerHTML = `
    <p class='username'>${login}</p>
    <img src=${avatar_url} alt=${login}>
    <p class='repos'>Repos :${public_repos}</p>
    <p class='followers'>Followers :${followers}</p>
    <p class='following'>Following :${following}</p>
    `;
}

gitBtn.addEventListener('click', fetchGithubData)