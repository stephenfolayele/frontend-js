const slides_container = document.querySelector('.image-slider')
const dots_container = document.querySelector('.dots-container')



async function fetchPictureImages(){
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=1&limit=10",
        {
          method: "GET",
        }
      )
      const data = await response.json()
      if (data && data.length > 0) displaySlides(data)

    } catch (e){
        console.log(e);
    }
}


function displaySlides(pictures){
    slides_container.innerHTML = 
    pictures.map((pictureItem)=> `
    <div class='slide'>
        <img
        src=${pictureItem.download_url}
        alt=${pictureItem.id}
        />
    </div>`
    ).join('')


    dots_container.innerHTML = 
    pictures.map((item, index)=>
    `<span class='dot ${index === 0 ? 'active': ''}' data-slide=${index}></span>`
    ).join('')
}



fetchPictureImages()


//sliderf functionality
setTimeout(
    ()=> {
        const slides = document.querySelectorAll('.slide')
        const prevBtn = document.querySelector('.prev')
        const nextBtn = document.querySelector('.next')
        let currentSlide = 0;

        function activeDot(slide){
            document.querySelectorAll('.dot')
            .forEach((dotItem) => 
            dotItem.classList.remove('active')
            )

            document.querySelector(`.dot[data-slide='${slide}']`).classList.add('active')
        }

        function changeCurrentSlide(currentSlide){
            slides.forEach(
                (
                    (slideItem, index)=>
                slideItem.style.transform = `translateX(${
                    100 * (index - currentSlide)
                }%)`
                )
            )
        }
        changeCurrentSlide(currentSlide)

        nextBtn.addEventListener('click', ()=>{
            currentSlide++;
            if(slides.length-1 < currentSlide){
                currentSlide = 0;
            }
            changeCurrentSlide(currentSlide)
            activeDot(currentSlide)

        })

        prevBtn.addEventListener('click', ()=> {
            currentSlide--;
            if(0 > currentSlide){
                currentSlide = slides.length - 1;
            }
            changeCurrentSlide(currentSlide)
            activeDot(currentSlide)
        })

        dots_container.addEventListener('click', (e)=> {
            if (e.target.classList.contains('dot')){
                const currentSlide = e.target.dataset.slide
                changeCurrentSlide(currentSlide)
                activeDot(currentSlide)
            }
        })


    }, 1000
)