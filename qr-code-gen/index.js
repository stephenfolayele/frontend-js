const qrContainer = document.querySelector('.qr-container')
const qrTextInput = document.querySelector('.qr-text')
const qrCodeBtn = document.querySelector('.generate-qr-code-btn')
const errorMsg = document.querySelector('.error-message-text')


qrCodeBtn.addEventListener('click', ()=> {
    validateInput()
})

function validateInput(){
    console.log(qrTextInput.value);
    if (qrTextInput.value.trim().length > 0){
        generateQrCode()

    } else {
        qrContainer.innerHTML = '';
        errorMsg.textContent = 'Enter text and use some URL to generate OR Code'
    }
}

function generateQrCode(){
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrTextInput.value,
        height: 400,
        width: 400,
        colorLight: '#fff',
        colorDark: '#000'
    });
    qrTextInput.value = '';
    errorMsg.textContent = '';
}