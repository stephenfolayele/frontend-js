const postContainer = document.querySelector('.posts-container')
const progressBar = document.querySelector('.progress-bar')


async function fetchDataAPI(){
    try {

        const response = await fetch(
            "https://dummyjson.com/posts", {
                method: "GET",
            }
            )
        const data = await response.json()
        console.log(data);
        if (data && data.posts) displayData(data.posts)
    
    } catch (e) {
        console.log(e);
    }
}

fetchDataAPI()

function displayData(results){
    results.forEach((postItem) => {
        const postItemWrapper = document.createElement('div')
        postItemWrapper.classList.add('postItemWrapper')

        const postTitle = document.createElement('label')
        postTitle.textContent = postItem.title;

        const postBody = document.createElement('p')
        postBody.textContent = postItem.body;

        const postTags = document.createElement('div')
        postTags.textContent = postItem.tags.map((tagItem) => 
        tagItem
        ).join(',');
        postTags.classList.add('post-tags')

        postItemWrapper.appendChild(postTitle)
        postItemWrapper.appendChild(postBody)
        postItemWrapper.appendChild(postTags)

        postContainer.appendChild(postItemWrapper)
    })
}

window.onscroll = function () {
    handscroll ()
}

function handscroll() {
    const getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    const height = 
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const howMuchPercentageScrolled = (getScrollFromTop / height) * 100;
    progressBar.style.width = `${howMuchPercentageScrolled}%`
}