const html5Icon = document.getElementById("html5-icon")
const htmlModal = document.getElementById("html-modal")

const cssIcon = document.getElementById("css-icon")
const cssModal = document.getElementById("css-modal")

const javascriptIcon = document.getElementById("javascript-icon")
const javascriptModal = document.getElementById("javascript-modal")

const reactIcon = document.getElementById("react-icon")
const reactModal = document.getElementById("react-modal")

const pythonIcon = document.getElementById("python-icon")
const pythonModal = document.getElementById("python-modal")

html5Icon.addEventListener("click", function(){
    showModal(htmlModal)
})
htmlModal.addEventListener("click", function(){
    hideModal(htmlModal)
})

cssIcon.addEventListener("click", function(){
    showModal(cssModal)
})
cssModal.addEventListener("click", function(){
    hideModal(cssModal)
})

javascriptIcon.addEventListener("click", function(){
    showModal(javascriptModal)
})
javascriptModal.addEventListener("click", function(){
    hideModal(javascriptModal)
})

reactIcon.addEventListener("click", function(){
    showModal(reactModal)
})
reactModal.addEventListener("click", function(){
    hideModal(reactModal)
})

pythonIcon.addEventListener("click", function(){
    showModal(pythonModal)
})
pythonModal.addEventListener("click", function(){
    hideModal(pythonModal)
})

function showModal(modal){
    modal.style.display = "block"
}
function hideModal(modal){
    modal.style.display = "none"
}