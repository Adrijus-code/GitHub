import menuArray from './data.js'

const orderCompletionBtn = document.querySelector('.order-completion-btn')
const form = document.querySelector('#card-details-form')
const modalBtn = document.querySelector('.modal-form-btn')
const itemContainer = document.querySelector('#item-container')
const itemOrderContainer = document.querySelector('#item-purchase-container')

let chosenFoodArray = []

orderCompletionBtn.addEventListener('click', handleOrderCompletion)
form.addEventListener('input', handleFormInputs)
form.addEventListener('submit', handleFormSubmit)
itemContainer.addEventListener('click', handleAddItem)

function handleAddItem(e){
    
    if (e.target.classList.contains('item-add-btn')){
        console.log(e)
        itemOrderContainer.style.display = 'block'

        const id = e.target.dataset.itemid
        const targetItemObj = menuArray.find(item => item.id == id)

        if(targetItemObj){
            chosenFoodArray.push(targetItemObj)
            renderOrder()
        }
    }
}

document.querySelector('.added-items-div').addEventListener('click', function(e){
    if(e.target.classList.contains('added-item-remove-btn')){
        const indexToRemove = e.target.dataset.index
        chosenFoodArray.splice(indexToRemove, 1)
        renderOrder()
        if(chosenFoodArray.length === 0){
            itemOrderContainer.style.display = 'none'
        }
    }
})

function renderOrder(){
    let orderHtml = ''
    let totalPrice = 0

    chosenFoodArray.forEach((food, index) =>{
        totalPrice += food.price
        orderHtml += `
                <div class="added-item">
                    <div class="added-item-description">
                        <h4 class="added-item-name">${food.name}</h4>
                        <button class="added-item-remove-btn" data-index="${index}">remove</button>
                    </div>
                    <span class="added-item-price">$${food.price}</span>
                </div>
    `
    })
    document.querySelector('.added-items-div').innerHTML = orderHtml
    document.querySelector('.order-total-amount').textContent = `$${totalPrice}`
}

function handleOrderCompletion(){
    const modal = document.querySelector('.modal-popup')

    modal.classList.add('show')

}

function handleFormSubmit(e){
    e.preventDefault()

    const itemOrderContainer = document.querySelector('#item-purchase-container')
    const modal = document.querySelector('.modal-popup')

    modal.style.display = 'none'

    itemOrderContainer.innerHTML = `<div id="order-completion-div">
        <h2 id="order-completion-text">Thank you for your purchase!</h2>
    </div>`
}

function handleFormInputs(){
    
    if(form.checkValidity()){
        modalBtn.disabled = false
        modalBtn.style.opacity = "1"
    }else{
        modalBtn.disabled = true
        modalBtn.style.opacity = "0.25"
    }
}

function renderItems(array){
    return array.map(item=>{
        const {name, ingredients, id, price, emoji} = item
        return `            
        <div class="item" data-itemid="${id}">
                <div class="item-emoji-picture">${emoji}</div>
                <div class="item-description">
                    <h4 class="item-name">${name}</h4>
                    <p class="item-ingredient">${ingredients}</p>
                    <span class="item-price">$${price}</span>
                </div>
                <button class="item-add-btn" data-itemid="${id}">+</button>
            </div>`
    }).join('')
}

document.getElementById('item-container').innerHTML = renderItems(menuArray)