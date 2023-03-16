const btnone = document.querySelector('#one')
const btntwo = document.querySelector('#two')
const btnthree = document.querySelector('#three')
const btnfour = document.querySelector('#four')
const btnfive = document.querySelector('#five')
const btnsix = document.querySelector('#six')
const btnseven = document.querySelector('#seven')
const btneight = document.querySelector('#eight')
const btnnine = document.querySelector('#nine')
const btnzero = document.querySelector('#zero')
const btndiv = document.querySelector('#div')
const btnmultiply = document.querySelector('#multiply')
const btnplus = document.querySelector('#plus')
const btnsub = document.querySelector('#sub')
const btnce = document.querySelector('#ce')
const btnequal = document.querySelector('#equal')
const btndot = document.querySelector('#dot')
const btndontknow = document.querySelector('#dontknow')
const btnclear = document.querySelector('#c')
const btnbackSpace = document.querySelector('#back')
const input = document.querySelector('input')

const calContainer = document.querySelector('.cal-container')
calContainer.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.classList.contains('number'))
    input.value = input.value + e.target.textContent
    else if(e.target.classList.contains('operator')) 
    input.value = input.value + " " + e.target.textContent + " "
})

btnequal.addEventListener('click', () =>{
    const expression = input.value
    if(!expression) return
    input.value = eval(expression)
})

btnclear.addEventListener('click', () =>{
    input.value = ""
})


