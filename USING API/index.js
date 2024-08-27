const results_posted = document.querySelector('.post-list-container')

////fetch using XHR

function fetchUsingXHR(){
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json"
    xhr.send()

    xhr.onload = () => {
        if (xhr.status === 200){
            displayResults(xhr.response)
        } else {
            console.log('Some error occured');
        }
    }
    console.log(xhr.response)

}


//Using Fetch Method
function fetchmethod(){
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    });

    fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));


}

//Using await fetch method

async function awaitFetchMethod(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      })
    const data = await response.json()
    displayResults(data)
}



function displayResults(results){
    results_posted.innerHTML = 
    results.map((result)=> `
    <div class='post-item'>
        <h3>${result.title}</h3>
        <p>${result.body}</p>
    </div>`
    ).join('')
}

function helperMethod(method, url){
    const promise = new Promise(
        (resolve, reject)=> {
            const xhr = new XMLHttpRequest()
            xhr.open(method, url)
            xhr.responseType = 'json'
            xhr.send()

            xhr.onload = () => {
                if (xhr.status === 200){
                    resolve(xhr.response)
                } else {
                    reject(xhr.response);
                }
            }

        }
    )

    return promise
}

async function usingXHRAndAsyncAwait(){
    const response = await helperMethod('GET', 'https://jsonplaceholder.typicode.com/posts')
    displayResults(response)



}






//fetchUsingXHR()
// fetchmethod()
// awaitFetchMethod()
usingXHRAndAsyncAwait()







