const categories = ['All', 'Men', 'Women', 'Kids'];
const allContent = [
    {
        id: 'Men',
        label: 'Men Shirt 1'
    },
    {
        id: 'Men',
        label: 'Men Shirt 2'
    },
    {
        id: 'Men',
        label: 'Men Shirt 3'
    },
    {
        id: 'Men',
        label: 'Men Shirt 4'
    },
    {
        id: 'Men',
        label: 'Men Shirt 5'
    },
    {
        id: 'Women',
        label: 'Women Shirt 1'
    },
    {
        id: 'Women',
        label: 'Women Shirt 2'
    },
    {
        id: 'Women',
        label: 'Women Shirt 3'
    },
    {
        id: 'Women',
        label: 'Women Shirt 4'
    },
    {
        id: 'Women',
        label: 'Women Shirt 5'
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 3'
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 5'
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 10'
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 20'
    },
    {
        id: 'Kids',
        label: 'Kids Shirt 30'
    },
]

const filterBtnsWrapper = document.querySelector('.filter-button-wrapper')
const contentWrapper = document.querySelector('.content-wrapper')


categories.forEach(
    (btns)=> {
        const buttonEle = document.createElement('button')
        buttonEle.textContent = btns
        buttonEle.classList.add('filter-buttons')
        buttonEle.setAttribute('data-filter', btns)
        filterBtnsWrapper.append(buttonEle)
    }
)

allContent.forEach(
    (content)=>{
        const singleContentItem = document.createElement('div')
        singleContentItem.classList.add('card', content.id)
        singleContentItem.textContent = content.label
        contentWrapper.append(singleContentItem)
    }
)


const allFilteredBtns = document.querySelectorAll('.filter-buttons')
const allCards = document.querySelectorAll('.card')


function filterCardsByCategory(currentCategory, allCards){
    allCards.forEach((item)=> {
        const isShowAllCards = currentCategory.toLowerCase() === 'all'
        const isItemFiltered = !item.classList.contains(currentCategory)

        if (!isShowAllCards && isItemFiltered){
            item.classList.add('hide')
        } else {
            item.classList.remove('hide')
        }


    })
}



allFilteredBtns.forEach((singleBtns)=> {
    singleBtns.addEventListener('click', ()=>{
        const currentCategory = singleBtns.dataset.filter

        filterCardsByCategory(currentCategory, allCards)
    })
})