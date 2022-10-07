let decreaseButton=document.querySelectorAll('.decrease');
let increaseButton=document.querySelectorAll('.increase');
let removeButton=document.querySelectorAll('.removebtn');

increaseButton.forEach((item)=>{
    item.addEventListener('click', () =>{
        let count=item.previousElementSibling.innerText
        count++
        item.previousElementSibling.innerText=count
        let price=item.parentElement.previousElementSibling.children[0].innerText
        price=price.slice(2)
        let total = price * count
        item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText = '$' + total.toFixed(2)
        let productTotal = item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText
        productTotal=productTotal.slice(1)
        let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
        subTotal = parseFloat(subTotal) + parseFloat(price)
        document.querySelector('.one').children[1].innerText = subTotal.toFixed(2) + '$' 
        let withTax = document.querySelector('.two').children[1].innerText.slice(0,-1)
        withTax = subTotal * (0.18)
        document.querySelector('.two').children[1].innerText = withTax.toFixed(2)+ '$' 
    } )
})

decreaseButton.forEach((item) => {
    item.addEventListener( 'click', () => {
        let count = item.nextElementSibling.innerText
        if (count > 0) {
            count--
            item.nextElementSibling.innerText = count
        }
        let price = item.parentElement.previousElementSibling.children[0].innerText
        price = price.slice(2)
        let total = price * count
        item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText = '$' + total.toFixed(2)
        let productTotal = item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText
        productTotal = productTotal.slice(1)
        let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
        subTotal = parseFloat(subTotal) - parseFloat(price)
        document.querySelector('.one').children[1].innerText = subTotal.toFixed(2) + '$'
        let withTax = document.querySelector('.two').children[1].innerText.slice(0,-1)
        withTax = subTotal * (0.18)
        document.querySelector('.two').children[1].innerText = withTax.toFixed(2)+ '$' 
    })
})

removeButton.forEach((item) => {
    item.addEventListener( 'click' , () => {
         let productTotal0 =item.parentElement.nextElementSibling.children[1].innerText.slice(1)
         let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
         document.querySelector('.one').children[1].innerText = (parseFloat(subTotal) - parseFloat(productTotal0)).toFixed(2) + '$'
         let cancel = 0
        let price = item.parentElement.nextElementSibling.children [1].innerText
        price = price.slice(1) 
        let result = item.parentElement.nextElementSibling.children [0]
        result = cancel * price 
        item.parentElement.nextElementSibling.children[1].innerText = '$' + result
        productTotal = item.parentElement.nextElementSibling.children[1].innerText
        productTotal = productTotal.slice(1)
        item.parentElement.previousElementSibling.children [1].innerText = result
    } )
} )

// shipping parça başı 1$
// tax*%18

// tax her event de yenilenecek
// shipping her event de yenilenecek
// total her event de yenilelecek