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
        item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText = '$' + total
        let productTotal = item.parentElement.nextElementSibling.nextElementSibling.children[1].innerText
        productTotal=productTotal.slice(1)
        console.log('productTotal => ',productTotal)
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
    })
})

removeButton.forEach((item) => {
    item.addEventListener( 'click' , () => {
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
        count = count
        console.log('count => ' , count)
         
    } )
} )



// decrease btn
// remove btn
// subtotal

// shipping 1$
// tax*%18