let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
inputEl.textContent = "lol"
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads);
})