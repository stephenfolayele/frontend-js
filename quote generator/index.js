

const loader = document.querySelector('.loader')
const quote_wrapper = document.querySelector('.quote-wrapper')
const quoteBtn = document.querySelector('.refresh-button')


function showLoader(){
    loader.classList.add('show')
    quote_wrapper.classList.add('hide')


}

function removeLoader(){
    loader.classList.remove('show')
    quote_wrapper.classList.remove('hide')
}


async function fetchQuote(){
    showLoader()
    try {
        response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1', {
            method: "GET",
          }
          )

        data = await response.json()
        console.log(data);
        removeLoader()
          if (data && data.length) displayQuote(data[0])
    } catch (e) {
        console.log(e);
    }
}

fetchQuote()


function displayQuote(data){
    quote_wrapper.innerHTML = `
    <div class="quote-item">
        <p class="quote-character">${data.character}</p>
        <img src=${data.image} alt=${data.character}>
        <p class="quote"><i>${data.quote}</></p>
    </div>
    `
}

quoteBtn.addEventListener('click', ()=>{
    fetchQuote()
})