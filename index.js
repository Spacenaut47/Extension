// chrome://extensions/
let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"));
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
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)