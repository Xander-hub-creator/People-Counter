let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let incrementBtn = document.getElementById('increment-btn')
let savebtn = document.getElementById('save-btn')
let count = 0
incrementBtn.onclick =  () => {
count += 1
countEl.textContent = count
console.log(countEl)
}

 savebtn.onclick = () => {
let entry = ' - '+count
saveEl.textContent += entry
countEl.textContent = 0
}