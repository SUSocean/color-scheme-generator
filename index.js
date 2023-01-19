document.addEventListener('submit', function (e) {
    e.preventDefault()
    const selectedColor = document.getElementById('color').value.slice(1, 9)
    const selectedMode = document.getElementById('selectType').value
    let colorsHTML = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`)
        .then(res => res.json())
        .then(data => (data.colors).forEach(color => {
            colorsHTML += `<div style='background: ${color.hex.value};' class='color-column'><span>${color.hex.value}</span></div>`
        }))
        .then(data => document.getElementById('color-container').innerHTML = colorsHTML)
})