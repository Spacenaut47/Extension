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
    renderLeads()
}
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})
c.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})
function renderLeads ()
{
    let listItems = ""
    for(let i = 0; i < myLeads.length;i++){
        listItems += `
        <li>
            <a target ='_blank' href = '${myLeads[i]}'> ${myLeads[i]}
            </a>
        </li>`
    }
    b.innerHTML = listItems
}