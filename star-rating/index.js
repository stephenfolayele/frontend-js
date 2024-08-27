const all_stars = document.querySelectorAll('.fa')
const value = document.querySelector('.rating-value')

let currentTotalSelected = -1

all_stars.forEach((currentStar, index)=>{
    currentStar.dataset.rating = index + 1
    currentStar.addEventListener('click', handleMouseClick);
    currentStar.addEventListener('mouseenter', handleMouseEnter);
    currentStar.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseEnter(event){
    const rating = event.target.dataset.rating;
    handleUpdateRatingState(rating)

}

function handleMouseClick(event){
    const rating = event.target.dataset.rating;
    currentTotalSelected = rating
    handleUpdateRatingState(currentTotalSelected)
    value.textContent = currentTotalSelected

}

function handleUpdateRatingState(getCurrentRatingValue){
    for(let i = 0; i < 5; i++){
        if (i < getCurrentRatingValue) {
            all_stars[i].classList.replace('fa-star-o', 'fa-star');
        } else {
            all_stars[i].classList.replace('fa-star', 'fa-star-o');
        }
    }

}

function handleMouseLeave(){
    handleUpdateRatingState(currentTotalSelected)
}
