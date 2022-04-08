// chrome://extensions/
let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
const c = document.querySelector("#delete-all")
const d = document.querySelector("#tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
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
d.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})