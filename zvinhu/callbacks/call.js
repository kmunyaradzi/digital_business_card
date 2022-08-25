
setTimeout(myFunction,3000)

// setInterval(myFunction, 1000);

function myFunction(){

    // let callP = document.getElementById("call")
    // callP.innerHTML = '<h1> I love you </h1>'
    let d = new Date();
    document.getElementById("demo").innerHTML=
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();

    
}