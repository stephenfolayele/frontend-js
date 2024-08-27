

const hex_color = document.querySelector('.hex-color-container')
const hex_btn = document.querySelector('.hex-button')
const hex_color_value = document.querySelector('.hex-color-value')
const hex_copy_color = document.querySelector('.hex-copy-color')
 

//Hex color generator
hex_btn.addEventListener('click', ()=>{
    let hexCharacters = '0123456789ABCDEF'
    let hexCode = '#'

    for (let i = 0; i < 6; ++i){
        let setLength = hexCharacters.length
        hexCode += hexCharacters.charAt(
            Math.floor(Math.random() * setLength)
        )
    }
    console.log(hexCode);

    hex_color.style.backgroundColor = hexCode;   
    hex_color_value.textContent = hexCode
    hex_btn.style.color = hexCode

})

//Copy hex to clipboard
hex_copy_color.addEventListener('click', ()=> {
    navigator.clipboard.writeText(hex_color_value.textContent)
    alert('Hex Color is copied to clipboard')
})


//RGB color generator
const rgb_color = document.querySelector('.rcg-color-container');
const rgb_color_value = document.querySelector('.rgb-color-value')
const redInputRange = document.querySelector('#red')
const greenInputRange = document.querySelector('#green')
const blueInputRange = document.querySelector('#blue')
const rgb_button = document.querySelector('.r-g-b-button')
const rgb_copy_color = document.querySelector('.r-g-b-copy-color')


rgb_button.addEventListener(
    'click', () => {

        let redValue = redInputRange.value;
        let greenValue = greenInputRange.value;
        let blueValue = blueInputRange.value;

        console.log(redValue, greenValue, blueValue);
        rgb_color.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
        rgb_color_value.textContent = `rgb(${redValue}, ${greenValue}, ${blueValue})`
        rgb_button.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`

    }
)

//RGB clipboard copy
rgb_copy_color.addEventListener('click', ()=>{
    navigator.clipboard.writeText(rgb_color_value.textContent)
    alert('RGB Color is copied to clipboard')
})
