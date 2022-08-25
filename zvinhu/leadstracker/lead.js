let inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")



let storageLeads =JSON.parse(localStorage.getItem("myLeads"))

if(storageLeads){
    myLeads = storageLeads
    render(myLeads)
}

function render(val){
    let listItems= ""
    for(i=0; i<val.length;i++){
        listItems += `<li> 
                    <a target='_blank' href='${myLeads[i]}'}>${myLeads[i]} </a>
                    </li>`
        console.log(listItems)
    }
    
    ulEl.innerHTML = listItems
}

SaveTab = document.getElementById("save-tab")
SaveTab.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})


deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value =''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
    render(myLeads)
   
})



