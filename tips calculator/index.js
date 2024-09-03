const billAmt = document.querySelector('.bill-amount')
const discountPercentage = document.querySelector('.discount-percentage')
const tipPercentage = document.querySelector('.tip-percentage')
const noOfCustomers = document.querySelector('.no-of-customers')
const genBtn = document.querySelector('.generate-bill')
const totalTipPaid = document.querySelector('.total-tip-paid')
const totalAmtToPay = document.querySelector('.total-amount-to-pay')
const eachCustToPy = document.querySelector('.each-customer-to-pay')
const discountValue = document.querySelector('.discount-value')
const tipValue = document.querySelector('.tip-value')
const customerValue = document.querySelector('.no-of-customers-value')


function setToZero(){
    discountPercentage.value = 0
    tipPercentage.value = 0
    noOfCustomers.value = 0
}

setToZero()

discountPercentage.addEventListener('change', ()=> {
    const current_value =  discountPercentage.value
    discountValue.textContent = current_value
})

tipPercentage.addEventListener('change', ()=> {
    const current_value =  tipPercentage.value
    tipValue.textContent = current_value
})
noOfCustomers.addEventListener('change', ()=> {
    const current_value =  noOfCustomers.value
    customerValue.textContent = current_value
})

function calculateBill(){
    console.log(
        billAmt.value,
        discountPercentage.value,
        tipPercentage.value,
        noOfCustomers.value
    );

    const with_discount = billAmt.value - ((discountPercentage.value / 100) * (billAmt.value))
    const tip = (tipPercentage.value / 100) * with_discount
    const tipPlusAmount = with_discount + tip
    const eachCustomer = tipPlusAmount / noOfCustomers.value


    totalTipPaid.textContent = tip;
    totalAmtToPay.textContent = tipPlusAmount;
    eachCustToPy.textContent = eachCustomer;




}

genBtn.addEventListener('click', calculateBill)