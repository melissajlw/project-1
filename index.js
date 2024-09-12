// index.js

// GLOBAL
const spriteDiv = document.getElementById('sprite')
const viewPort = document.getElementById('viewport')
const displaySpriteBtn = document.getElementById('display-sprite-btn') 
const createSpriteBtn = document.getElementById('create-sprite-btn')
const canvas = document.querySelector('canvas')

const UP_KEY = 38
const LEFT_KEY = 37
const RIGHT_KEY = 39
const DOWN_KEY = 40

let sprites = []

// event listeners
document.addEventListener("DOMContentLoaded", function() {
    loadSprites()
})

displaySpriteBtn.addEventListener('click', function(event) {
   resetViewport() 
   displaySprites()
})

createSpriteBtn.addEventListener('click', function(event) {
    resetViewport()
    displaySpriteForm()
})


// create a form to attach to the create sprite button
function displaySpriteForm() {
    const h3 = document.createElement('h3')
    const form = document.createElement('form')

    // name
    const nameDiv = document.createElement('div')
    const nameLabel = document.createElement('label')
    const nameInput = document.createElement('input')

    // image URLs
    const profileImgDiv = document.createElement('div')
    const profileImgLabel = document.createElement('label')
    const profileImgInput = document.createElement('input')

    const imgUrlDiv1 = document.createElement('div')
    const imgUrlLabel1 = document.createElement('label')
    const imgUrlInput1 = document.createElement('input')

    const imgUrlDiv2 = document.createElement('div')
    const imgUrlLabel2 = document.createElement('label')
    const imgUrlInput2 = document.createElement('input')

    const imgUrlDiv3 = document.createElement('div')
    const imgUrlLabel3 = document.createElement('label')
    const imgUrlInput3 = document.createElement('input')

    const imgUrlDiv4 = document.createElement('div')
    const imgUrlLabel4 = document.createElement('label')
    const imgUrlInput4 = document.createElement('input')

    // dimensions
    const heightDiv = document.createElement('div')
    const heightLabel = document.createElement('label')
    const heightInput = document.createElement('input')
    const widthDiv = document.createElement('div')
    const widthLabel = document.createElement('label')
    const widthInput = document.createElement('input')

    // description
    const descriptionDiv = document.createElement('div')
    const descriptionLabel = document.createElement('label')
    const descriptionTextArea = document.createElement('textarea')
    const descriptionBr = document.createElement('br')

    // submit
    const submitInput = document.createElement('input')

    // form label innerText
    h3.innerText = "Create Sprite"
    nameLabel.innerText = "Name: "
    profileImgLabel.innerText = "Profile Image URL: "
    imgUrlLabel1.innerText = "First Image URL: "
    imgUrlLabel2.innerText = "Second Image URL: "
    imgUrlLabel3.innerText = "Third Image URL: "
    imgUrlLabel4.innerText = "Forth Image URL: "
    heightLabel.innerText = "Height: "
    widthLabel.innerText = "Width: "
    descriptionLabel.innerText = "Description: "
    submitInput.value = "Create Sprite"

    // form label attributes
    form.setAttribute('id', "sprite-form")
    nameLabel.setAttribute('for', 'name')
    profileImgLabel.setAttribute('for', 'image_url')
    imgUrlLabel1.setAttribute('for', 'image_url1')
    imgUrlLabel2.setAttribute('for', 'image_url2')
    imgUrlLabel3.setAttribute('for', 'image_url3')
    imgUrlLabel4.setAttribute('for', 'image_url4')
    heightLabel.setAttribute('for', 'height')
    widthLabel.setAttribute('for', 'width')
    descriptionLabel.setAttribute('for', "description")

    // input attributes
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', 'name')

    profileImgInput.setAttribute('type', 'text')
    profileImgInput.setAttribute('name', 'image_url')
    profileImgInput.setAttribute('id', 'image_url')

    imgUrlInput1.setAttribute('type', 'text')
    imgUrlInput1.setAttribute('name', 'image_url1')
    imgUrlInput1.setAttribute('id', 'image_url1')

    imgUrlInput2.setAttribute('type', 'text')
    imgUrlInput2.setAttribute('name', 'image_url2')
    imgUrlInput2.setAttribute('id', 'image_url2')

    imgUrlInput3.setAttribute('type', 'text')
    imgUrlInput3.setAttribute('name', 'image_url3')
    imgUrlInput3.setAttribute('id', 'image_url3')

    imgUrlInput4.setAttribute('type', 'text')
    imgUrlInput4.setAttribute('name', 'image_url4')
    imgUrlInput4.setAttribute('id', 'image_url4')

    heightInput.setAttribute('type', 'text')
    heightInput.setAttribute('name', 'height')
    heightInput.setAttribute('id', 'height')
    widthInput.setAttribute('type', 'text')
    widthInput.setAttribute('name', 'width')
    widthInput.setAttribute('id', 'width')

    // text area attributes
    descriptionTextArea.setAttribute('name', 'description')
    descriptionTextArea.setAttribute('id', 'description'
    )

    submitInput.setAttribute('type', 'submit')

    nameDiv.appendChild(nameLabel)
    nameDiv.appendChild(nameInput)
    profileImgDiv.appendChild(profileImgLabel)
    profileImgDiv.appendChild(profileImgInput)
    imgUrlDiv1.appendChild(imgUrlLabel1)
    imgUrlDiv1.appendChild(imgUrlInput1)
    imgUrlDiv2.appendChild(imgUrlLabel2)
    imgUrlDiv2.appendChild(imgUrlInput2)
    imgUrlDiv3.appendChild(imgUrlLabel3)
    imgUrlDiv3.appendChild(imgUrlInput3)
    imgUrlDiv4.appendChild(imgUrlLabel4)
    imgUrlDiv4.appendChild(imgUrlInput4)
    heightDiv.appendChild(heightLabel)
    heightDiv.appendChild(heightInput)
    widthDiv.appendChild(widthLabel)
    widthDiv.appendChild(widthInput)
    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionBr)
    descriptionDiv.appendChild(descriptionTextArea)

    form.appendChild(nameDiv)
    form.append(profileImgDiv)
    form.appendChild(imgUrlDiv1)
    form.appendChild(imgUrlDiv2)
    form.appendChild(imgUrlDiv3)
    form.appendChild(imgUrlDiv4)
    form.appendChild(heightDiv)
    form.appendChild(widthDiv)
    form.appendChild(descriptionDiv)
    form.appendChild(submitInput)

    viewPort.appendChild(h3)
    viewPort.appendChild(form)

    // form event listener
    form.addEventListener('submit', (event) => {
        handleSubmit(event)
    })
}

// function resetViewport() clears the viewport
function resetViewport() {
    viewPort.innerHTML = ""
}


// function handleSubmit(event) stringifies sprite data inputs from the form 
async function handleSubmit(event) {
    event.preventDefault()

    const form = event.target

    const nameInput = form[0]
    const profileImgInput = form[1]
    const imgUrlInput1 = form[2]
    const imgUrlInput2 = form[3]
    const imgUrlInput3 = form[4]
    const imgUrlInput4 = form[5]
    const heightInput = form[6]
    const widthInput = form[7]
    const descriptionInput = form[8]

    // store data from form in sprite object
    const sprite = {
        name: nameInput.value,
        image_url: profileImgInput.value,
        image_url1: imgUrlInput1.value,
        image_url2: imgUrlInput2.value,
        image_url3: imgUrlInput3.value,
        image_url4: imgUrlInput4.value,
        height: heightInput.value,
        width: widthInput.value,
        description: descriptionInput.value
    }

    // stringify sprite object
    const stringifiedSprite = JSON.stringify(sprite)
    const resp = await fetch('http://localhost:3000/sprites', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: stringifiedSprite
    })

    const data = await resp.json()

    // add stringified sprite to form and displays the sprite
    sprites.push(data)
    resetViewport()
    displaySprites()
}

// function loadSprite() loads sprites from db.json
async function loadSprites() {
    const resp = await fetch('http://localhost:3000/sprites')
    const data = await resp.json()
    sprites = data
}

// function displaySprites() calls displaySprite(sprite) on sprite array to render sprites
function displaySprites() {
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    h3.innerText = "Sprites"
    div.setAttribute('id', "sprites")
    viewPort.appendChild(h3)
    viewPort.appendChild(div)
    for (let sprite of sprites) {
        displaySprite(sprite)
    }
}

// function displaySprite(sprite) renders sprite in the viewport and adds a select and delete button
function displaySprite(sprite) {
    // function scope variables
    const spriteDiv = document.getElementById("sprites")
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const buttonDiv = document.createElement('div')
    const selectBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    // event listeners to sprite image
    img.addEventListener('mouseover', addImageBorder)
    img.addEventListener('mouseout', removeImageBorder)
    img.addEventListener('click', displayDescription)
    selectBtn.addEventListener('click', handleSelect)
    deleteBtn.addEventListener('click', deleteSprite)

    // button class to make it look nice
    buttonDiv.class = "button-group"

    // add event target data to the button data
    selectBtn.dataset.id = sprite.id
    selectBtn.dataset.name = sprite.name
    selectBtn.dataset.height = sprite.height
    selectBtn.dataset.width = sprite.width
    selectBtn.dataset.profileImage = sprite.image_url
    selectBtn.dataset.image_url1 = sprite.image_url1
    selectBtn.dataset.image_url2 = sprite.image_url2
    selectBtn.dataset.image_url3 = sprite.image_url3
    selectBtn.dataset.image_url4 = sprite.image_url4
    deleteBtn.dataset.id = sprite.id
    deleteBtn.dataset.name = sprite.name

    h3.innerText = sprite.name
    img.src = sprite.image_url
    img.setAttribute('alt', 'name')

    p.style.display = "none"

    p.innerText = sprite.description
    selectBtn.innerText = "select"
    deleteBtn.innerText = "delete"

    buttonDiv.append(selectBtn)
    buttonDiv.append(deleteBtn)
    p.append(buttonDiv)
    div.appendChild(h3)
    div.appendChild(img)
    div.appendChild(p)

    spriteDiv.append(div)
}

// function deleteSprite(event) deletes the sprite data from db.json() and removes it from the viewport
async function deleteSprite(event) {
    const spriteName = event.target.dataset.name
    const id = event.target.dataset.id

    // confirm whether user wants to delete the sprite
    const confirmed = confirm(`Do you want to delete ${ spriteName }?`)
    
    // if yes, delete the sprite with DELETE request
    if (confirmed) {
        const resp = await fetch('http://localhost:3000/sprites/' + id, {
            method: "DELETE"
        })
        if (resp.status == 200) {
            sprites = sprites.filter(sprite => sprite.id != id)
            resetViewport()
            displaySprites()
        }
    }
}

// function addImageBorder(event) adds border when the image is hovered over
function addImageBorder(event) {
    event.target.classList.add('highlight-border')
}

// function removeImageBorder(event) removes border when the image is hovered out of
function removeImageBorder(event) {
    event.target.classList.remove('highlight-border')
}

// function displayDescription(event) toggles the sprite description when clicked
function displayDescription(event) {
    const p = event.target.parentNode.querySelector('p')
    p.style.display = p.style.display == "none" ? "block" : "none"
}

// function handleSelect(event) creates canvas element and animates the selected sprite
//  also adds keydown event listeners for arrow keys to interact with the sprite
function handleSelect(event) {
    resetViewport()

    // function scope variables
    // create canvas element and append to viewport
    let canvas = document.createElement('canvas')
    const div = document.getElementById('viewport')
    canvas.id = 'canv'
    canvas.width = event.target.dataset.width
    canvas.height = event.target.dataset.height
    canvas.style.border = "2px solid #FFDAC1"
    const p = document.createElement('p')
    p.innerText = "Press the arrow keys!"
    let requestId = null

    div.appendChild(p)
    div.appendChild(canvas)

    // image data from selected sprite
    const idleUrl = event.target.dataset.image_url1
    const leftUrl = event.target.dataset.image_url2
    const rightUrl = event.target.dataset.image_url3
    const upUrl = event.target.dataset.image_url4
    const scale = 1
    const width = event.target.dataset.width
    const height = event.target.dataset.height
    const scaledWidth = scale * width
    const scaledHeight = scale * height

    canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // loop sequence for horizontal png with 4 sprites
    const cycleLoop = [0, 1, 2, 3]
    let currentLoopIndex = 0
    let frameCount = 0
    let currentDirection = 0

    // function step() requests the next animation frame from the png based on loop sequence
    function step() {
        if (frameCount < 4) {
            frameCount++
            requestId = window.requestAnimationFrame(step)
            return
        }

        frameCount = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0)
        currentLoopIndex++

        // restart the animation loop once the cycle reaches the end
        if (currentLoopIndex >= cycleLoop.length) {
            currentLoopIndex = 0
        }
        requestId = window.requestAnimationFrame(step)
    }

    // image to be drawn/animated on the canvas
    let img = new Image()
    img.src = idleUrl
    img.onload = function() {
        console.log('loaded init func')
        init()
    }

    // function init() initializes the animation by requesting the first animation frame
    function init() {
        requestId = window.requestAnimationFrame(step)
    }

    // function drawFrame(frameX, frame Y, canvasX, canvasY) draws the sprite on the canvas
    function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight)
    }

    // add event listener for arrow keys
    document.addEventListener('keydown', changeImageSrc)

    // function changeImageSrc(event) uses keydown event lister to change the img source for the sprite animation
    function changeImageSrc(event) {
        cancelAnimationFrame(requestId)
        switch(event.which) {
            case UP_KEY:
                // delete img from canvas

                img.src = upUrl
                break;
            case LEFT_KEY:
                img.src = leftUrl
                break;
            case RIGHT_KEY:
                img.src = rightUrl
                break;
            case DOWN_KEY:
                img.src = idleUrl
                break;
        }
    }
}