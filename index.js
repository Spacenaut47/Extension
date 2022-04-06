let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})
function renderLeads ()
{
    let listItems = ""
    for(let i = 0; i < myLeads.length;i++){

        listItems += "<li>"+myLeads[i]+"</li> "
    }
    b.innerHTML = listItems
}