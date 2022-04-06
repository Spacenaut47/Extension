// chrome://extensions/
let myLeads = []
const inputEl = document.querySelector("#input-el")
const a = document.querySelector("#input-btn")
const b = document.querySelector("#unord")
a.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
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
        //listItems += "<li><a target ='_blank' href =" + myLeads[i] + "'>" + myLeads[i]+ "</a></li>"
    }
    b.innerHTML = listItems
}