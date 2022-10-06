let decreaseButton=document.querySelectorAll('.decrease');
console.log('decreaseButton',decreaseButton)

let increaseButton=document.querySelectorAll('.increase');
console.log('increaseButton=>',increaseButton)

let removeButton=document.querySelectorAll('.removebtn');
console.log('removeButton=>',removeButton)

increaseButton.forEach((item)=>{
    item.addEventListener('click', () =>{
        let count=item.previousElementSibling.innerText
        count++
        item.previousElementSibling.innerText=count
        console.log('count=>',count)
        let price=item.parentElement.previousElementSibling.children[0].innerText
        price=price.slice(2)
        console.log('price =>',price)
        let total = price * count
        console.log('total => ' , total)
        item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText = '$' + total.toFixed(2)
        let productTotal = item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText
        productTotal=productTotal.slice(1)
        console.log('productTotal => ',productTotal)
        let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
        console.log('subTotal => ' , subTotal)
        subTotal = parseFloat(subTotal) + parseFloat(price)
        document.querySelector('.one').children[1].innerText = subTotal.toFixed(2) + '$' 
        let withTax = document.querySelector('.two').children[1].innerText.slice(0,-1)
        console.log('withTax => ' , withTax)
        withTax = subTotal * (1.18)
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
        console.log('count => ' , count)
        let price = item.parentElement.previousElementSibling.children[0].innerText
        price = price.slice(2)
        console.log('price => ' , price)
        let total = price * count
        console.log('total => ' , total)
        item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText = '$' + total
        let productTotal = item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText
        productTotal = productTotal.slice(1)
        console.log('productTotal => ' , productTotal)
        let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
        console.log('subTotal => ' , subTotal)
        subTotal = parseFloat(subTotal) - parseFloat(price)
        document.querySelector('.one').children[1].innerText = subTotal.toFixed(2) + '$'
        let withTax = document.querySelector('.two').children[1].innerText.slice(0,-1)
        console.log('withTax => ' , withTax)
        withTax = subTotal * (1.18)
        document.querySelector('.two').children[1].innerText = withTax.toFixed(2)+ '$' 
    })
})

removeButton.forEach((item) => {
    item.addEventListener( 'click' , () => {
         let productTotal0 =item.parentElement.nextElementSibling.children[1].innerText.slice(1)
         console.log('productTotal0 => ' , productTotal0)
         let subTotal = document.querySelector('.one').children[1].innerText.slice(0,-1)
         document.querySelector('.one').children[1].innerText = (parseFloat(subTotal) - parseFloat(productTotal0)).toFixed(2) + '$'
         let cancel = 0
        console.log('cancel => ' , cancel)
        let price = item.parentElement.nextElementSibling.children [1].innerText
        price = price.slice(1) 
        console.log('price => ' , price)
        let result = item.parentElement.nextElementSibling.children [0]
        result = cancel * price 
        console.log('result => ' , result)
        item.parentElement.nextElementSibling.children[1].innerText = '$' + result
        productTotal = item.parentElement.nextElementSibling.children[1].innerText
        productTotal = productTotal.slice(1)
        console.log('productTotal => ' , productTotal)
        item.parentElement.previousElementSibling.children [1].innerText = result
        count = item.parentElement.previousElementSibling.children [1].innerText
        console.log('count => ' , count)
    } )
} )

// shipping parça başı 1$
// tax*%18

// tax her event de yenilenecek
// shipping her event de yenilenecek
// total her event de yenilelecek