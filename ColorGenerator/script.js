
const form = document.getElementById('scheme-form')
const colorPicker = document.getElementById('seedColor')
const modeSelect = document.getElementById('schemeMode')
const displayDiv = document.getElementById('display-schemes')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let trueColor = colorPicker.value.slice(1)
    displayDiv.innerHTML = ""
    fetch(`https://www.thecolorapi.com/scheme?hex=${trueColor}&mode=${modeSelect.value}`)
        .then(res => res.json())
        .then(data => 
            data.colors.forEach(color => {
                displayDiv.innerHTML += `
                <div class="scheme">
                    <img src="${color.image.bare}">
                    <p>${color.hex.value}</p>
                </div>
`
            })
        )
})