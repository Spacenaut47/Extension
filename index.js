let myLeads = ["weads","weadsads","dassaed"]
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
})
for(let i = 0; i < myLeads.length;i++){
    b.innerHTML += "<li>"+myLeads[i]+"</li> "
}