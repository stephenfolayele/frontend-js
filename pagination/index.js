const paginationWrapper = document.querySelector('.pagnination-list')

function createDummy() {
    for (let i = 1; i <= 100; i++) {
        const li = document.createElement('li')
        li.textContent = `card ${i}`
        paginationWrapper.appendChild(li)
    }
}

createDummy()

const listExtract = document.querySelectorAll('li');
const paginationNumbers = document.querySelector('.pagination-numbers');
const previousButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');


let pagLimit = 10;
let pageCount = Math.ceil(listExtract.length / pagLimit)
let currentPage = 1;

function createPageNumber(currentIndex){
    const pageNumber = document.createElement('button');
    pageNumber.classList.add('pagination-number');
    pageNumber.textContent = currentIndex;
    pageNumber.setAttribute('page-index', currentIndex)

    paginationNumbers.appendChild(pageNumber)
}

function createPagNumbers (){
    for (let i = 1; i <= pageCount; i++){
        createPageNumber(i)
    }
}

function handleActiveCurrentPageNumber(){
    document.querySelectorAll('.pagination-number').forEach((button)=> {
        button.classList.remove('active-state');
        const getCurrentPageIndex = Number(button.getAttribute('page-index'));

        if (getCurrentPageIndex === currentPage){
            button.classList.add('active-state');
        }
    })
}

function handleDisableButton(getBtn){
    getBtn.classList.add('disabled');
    getBtn.setAttribute('disabled', 'true')
}

function handleEnableButton(getBtn){
    getBtn.classList.remove('disabled');
    getBtn.removeAttribute('disabled')
}

function handlePaginationButtonStatus(){
    console.log(currentPage);
    if (currentPage === 1) {
        handleDisableButton(previousButton)
    } else {
        handleEnableButton(previousButton)
    }

    if (pageCount === currentPage){
        handleDisableButton(nextButton)
    } else {
        handleEnableButton(nextButton)
    }
}

function handleCurrentPage(getCurrentPageNumber){
    currentPage = getCurrentPageNumber;
    handleActiveCurrentPageNumber();
    handlePaginationButtonStatus();

    const getPreviousRange = (getCurrentPageNumber - 1) * pagLimit;
    const getCurrentRange = getCurrentPageNumber * pagLimit;

    listExtract.forEach((listItem, index) => {
        listItem.classList.add('hide-list-item')

        if (index >= getPreviousRange && index < getCurrentRange){
            listItem.classList.remove('hide-list-item');
        }
    })
}



createPagNumbers();
handleCurrentPage(1)


previousButton.addEventListener('click', ()=> {
    handleCurrentPage(currentPage - 1)
})
nextButton.addEventListener('click', ()=> {
    handleCurrentPage(currentPage + 1)
})


document.querySelectorAll('.pagination-number').forEach((button)=> {
    const getCurrentPageIndex = Number(button.getAttribute('page-index'));

    if(getCurrentPageIndex) {
        button.addEventListener('click', ()=> {
            handleCurrentPage(getCurrentPageIndex);
        })
    }
})