const loadBtn = document.querySelector('.load-more-images')
const imageWrapper = document.querySelector('.image-wrapper')

let count = 1;

function fetchRandomImages(getCount){
    for(let i = getCount; i <= getCount+4; i++ ){
        let imgElement = document.createElement('img')
        imgElement.src = `https://picsum.photos/300?random=${i}`
        imageWrapper.append(imgElement)
    }
}

fetchRandomImages(count)



loadBtn.addEventListener('click', () => {
    fetchRandomImages(count += 5)
})


