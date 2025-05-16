let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let genBtn = document.getElementById('genBtn')


// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', (event)=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})


let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers =  '0123456789'
let allSymbols = "~!@#$%^&*"

// function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = ""

    allChars += lowercase.checked ? lowerChars : ""
    allChars += uppercase.checked ? upperChars : ""
    allChars += numbers.checked ? allNumbers : ""
    allChars += symbols.checked ? allSymbols : ""

    if (allChars == '' || allChars.length == 0 ) return genPassword;
     
    for (let i = 1; i <= inputSlider.value ; i++){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length ))
    }
    

   return genPassword;
}

console.log('F'.charAt())