// shipping 1$
// tax*%18
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
        // subtotal
    } )
})

// decrease btn