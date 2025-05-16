let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')

console.log(inputSlider.value)
console.log(sliderValue.textContent)

// showing input slider value
inputSlider.addEventListener('input', (event)=>{
    sliderValue.textContent = inputSlider.value;
});