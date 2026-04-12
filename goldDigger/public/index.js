
const price_display = document.getElementById('price-display')
const connection_status = document.getElementById('connection-status')
const form = document.querySelector('form')
const modalBox = document.querySelector('.outputs')
const dialog = document.querySelector('dialog')
const investment_summary = document.querySelector('#investment-summary')
const now = new Date()

form.addEventListener('submit', buyGold)
dialog.addEventListener('click', closeModal)


async function updateGoldPrice(){
    try{
        const response = await fetch('/api')

        if(response.ok){
            const data = await response.json()
            const price = data.price

            console.log(data);

            price_display.innerText = price
            connection_status.innerText = "Live Price 🟢"
        }

    }catch(error){
        price_display.innerText = "----.--"
        connection_status.innerText = "Disconnected 🔴"
        console.log(error)
    }
}

async function buyGold(e){
    try{

        e.preventDefault()
        const data = new FormData(form)
        const userInvestmentAmount = data.get('goldAmount')

        const response = await fetch('/api')

        if(response.ok){
            const data = await response.json()
            const goldPrice = data.price

            modalBox.style.display = 'inline-block'
            let boughtOunces = calculateOunces(goldPrice, userInvestmentAmount)
            investment_summary.innerText = `You just bought ${boughtOunces} 
            ounces (ozt) for £${userInvestmentAmount}. 
            You will receive documentation shortly.`

            const formData = {
                date: now,
                amountPaid: userInvestmentAmount,
                pricePerOz: goldPrice,
                boughtOz: boughtOunces
            }

            const sendingData = await fetch('/api/save', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

        }else{
            throw new Error("Cannot reach gold prices")
        }
    
    }catch(err){
        console.log(err)
    }

}

function calculateOunces(priceOfGold, userInvestedAmount){
    console.log(priceOfGold);
    console.log(userInvestedAmount)
    
    return Number((userInvestedAmount / priceOfGold)).toFixed(2)
}

function closeModal(e){
    if(e.target.innerText === "OK"){
        modalBox.style.display = 'none'
    }
}

setInterval(updateGoldPrice, 5000)