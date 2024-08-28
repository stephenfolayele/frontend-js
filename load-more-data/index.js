const products_container = document.querySelector('.products-container')
const loadBtn = document.querySelector('.load-more-btn')

let currentStep = 0;

async function fetchData(count){

    try{

        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${
            count === 0 ? 0 : count * 10
        }`,
        {
            method: "GET",
          }
        )

        const data = await response.json()
        if (data && data.products) displayData(data.products)

    } catch (e){
        console.log(e);
    }
}


function displayData(products){
    console.log(products);

    products.forEach(product => {
        const productWrapper = document.createElement('div')
        const productTmg = document.createElement('img')
        const productTitle = document.createElement('p')
        const productPrice = document.createElement('p')
        const productDesc = document.createElement('p')
        
        productTmg.src = product.thumbnail
        productTitle.textContent = product.title 
        productPrice.textContent = product.price 
        productDesc.textContent = product.description

        productWrapper.classList.add('items-wrapper')
        productWrapper.classList.add('product-img')
        productTitle.classList.add('product-title')
        productPrice.classList.add('product-price')
        productDesc.classList.add('product-desc')
        
        productWrapper.appendChild(productTmg)
        productWrapper.appendChild(productTitle)
        productWrapper.appendChild(productPrice)
        productWrapper.appendChild(productDesc)

        products_container.appendChild(productWrapper)
    })

    if (products_container.children.length === 100) 
    loadBtn.setAttribute('disabled', 'true')
    ;
}


fetchData(currentStep)

loadBtn.addEventListener('click', ()=> {
    fetchData((currentStep += 1 ))
})


