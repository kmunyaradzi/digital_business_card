//document.getElementById("count-el").innerText = 5

let counte_el = document.getElementById("count-el")
let save_el =document.getElementById("save-el")
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let greeting = ""
let count = 0

function increament(){
    count = count + 1
    counte_el.textContent = count
}


function save(){

    let counter_str = count + "-"
    save_el.textContent+= counter_str
    counte_el.textContent = count = 0

    if (1 < 18) {
        greeting = "Good day";

        console.log(greeting)
      } else {
        greeting = "Good evening";
      }
     
}



function startGame(){
    if(sum<=20){
        message = "Do you want to draw a new coard"
   }
   
   else if(sum === 21){
       message= "Wohooo!  You've go the BlackJack "
   }
   
   else{
       message = " You're out of the game ! "
       isAlive = false
   };

}


console.log(count)
console.log(message)
console.log(greeting)
