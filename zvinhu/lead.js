let inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")
let lead = "www.myleads.com"


// const containerEl = document.getElementById("container")

// console.log(containerEl)

//     containerEl.innerHTML = "<button onclick='thankYou()'>BUY</button>"

//     function thankYou(){
//         containerEl.innerHTML += "<p>thank you</p>"
//     }


inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    console.log("Button clicked from addEventListiner")
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
    inputEl.value =''
})


function renderLeads(){
    let listItems= ""
    for(i=0; i<myLeads.length;i++){
    
        listItems += `<li> 
                    <a target='_blank' href='${myLeads[i]}'}>${myLeads[i]} </a>
                    </li>`
    
        console.log(listItems)
    }
    
    ulEl.innerHTML = listItems
    

}
