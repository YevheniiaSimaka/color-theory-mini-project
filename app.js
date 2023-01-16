var bgColor = document.querySelector(".bgColor")
var textColor = document.querySelector(".textColor")
var submit = document.querySelector(".submit")
var all = document.querySelector(".all")

submit.addEventListener("click", function () {
    all.style.backgroundColor = bgColor.value
    all.style.color = textColor.value
})
