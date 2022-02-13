function updateProductNumber(product, price, isIncreasing) {
    let productInput = document.getElementById(product +"-number");
    let productNumber = productInput.value;
    // caseINput.value = parseInt(caseNumber) + 1;
    if(isIncreasing == true) {
        // caseINput.value = parseInt(caseNumber) + 1
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0) {
        // caseINput.value = parseInt(caseNumber) - 1;
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // else{
    //     caseINput.value = parseInt(caseNumber) - 1;
    // }
    // update total 
    const productTotal = document.getElementById(product+ "-total");
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + "-number");
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 7;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    // update on the html 
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = parseInt(tax);
    document.getElementById("total-price").innerText = parseInt(totalPrice);
}
// phone increase decrease events 
document.getElementById("phone-plus").addEventListener("click", function() {
    updateProductNumber("phone",1399, true)
})
document.getElementById("phone-minus").addEventListener("click", function() {
    updateProductNumber("phone",1399,false)
})
// handle case increase decrease events
document.getElementById("case-plus").addEventListener("click", function() {
    // const caseINput = document.getElementById("case-number");
    // const caseNumber = caseInput.value;
    // caseINput.value = parseInt(caseNumber) + 1;
    updateProductNumber("case",59, true);

});
document.getElementById("case-minus").addEventListener("click", function() {
    // caseINput = document.getElementById("case-number");
    // caseNumber = caseInput.value;
    updateProductNumber("case", 59, false)
    // caseINput.value = parseInt(caseNumber) - 1;
})