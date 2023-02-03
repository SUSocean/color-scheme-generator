document.addEventListener('submit', function (e) {
    e.preventDefault()
    const selectedColor = document.getElementById('color').value.slice(1, 9)
    const selectedMode = document.getElementById('selectType').value
    let colorsHTML = ``
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedMode}`)
        .then(res => res.json())
        .then(data => (data.colors).forEach(color => {
            colorsHTML += `
            <div style='background: ${color.hex.value};' class='color-column'>
                <p id='c${color.hex.value}' class='copied-text'>COPIED</p>
                <span class="hex" id='${color.hex.value}'>${color.hex.value}</span>
            </div>`
        }))
        .then(data => document.getElementById('color-container').innerHTML = colorsHTML)
})

document.addEventListener('click', function (e) {
    if (e.target.classList.value === 'hex') {
        navigator.clipboard.writeText(document.getElementById(e.target.id).textContent)
        document.getElementById(`c${e.target.id}`).style.animationName = 'copy-text'
        setTimeout(() => document.getElementById(`c${e.target.id}`).style.animationName = '', 2000)
    }
})