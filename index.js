// chrome://extensions/
let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
const c = document.querySelector("#delete-all")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render (leads)
{
    let listItems = ""
    for(let i = 0; i < leads.length;i++){
        listItems += `
        <li>
            <a target ='_blank' href = '${leads[i]}'> ${leads[i]}
            </a>
        </li>`
    }
    b.innerHTML = listItems
}
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
c.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
