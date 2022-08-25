function addToList(){
    let item = document.getElementById("box")
    let list = document.getElementById("list_item")

    if(item.value != ""){
        let make_list = document.createElement("li")
        make_list.appendChild(document.createTextNode(item.value))
        list.appendChild(make_list)
        item.value=""
        make_list.onclick = function(){
        this.parentNode.removeChild(this)
        }
    }
    else{
        alert('Please add something on the list')
    }

}