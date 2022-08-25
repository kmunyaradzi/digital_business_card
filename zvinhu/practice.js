const Rname = "James"
const Sname = "Shepard"

// const email = "Hey"+fname+"!How is it going ? Cheers Per"
const email = `Hey 
        ${Rname}! How is it going ? 
        Cheers ${Sname}`


console.log(email)


function whenclicked(){

        alert('you clicked me ')
        gotkey()
}

obj = document.getElementById("link-1")

obj.onclick = whenclicked

function gotkey(e){
       console.log(e.event.keycode)
}

function DisplayKey(e) {
        // which key was pressed?
        if (e.keyCode) keycode=e.keyCode;
        else keycode=e.which;
        character=String.fromCharCode(keycode);
        // find the object for the destination paragraph
        k = document.getElementById("keys");
        // add the character to the paragraph
        k.innerHTML += character;
        }

