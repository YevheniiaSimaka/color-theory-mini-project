var submitLeft = document.querySelector(".submitLeft")
var submitRight = document.querySelector(".submitRight")
var colorLeft = document.querySelector(".colorLeft")
var colorRight = document.querySelector(".colorRight")
var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")

submitLeft.addEventListener("click", function () {
    box1.style.backgroundColor = colorLeft.value
})

submitRight.addEventListener("click", function () {
    box2.style.backgroundColor = colorRight.value
})