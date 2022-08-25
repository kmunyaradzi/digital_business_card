
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let count =0
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.querySelector('#card-el')
let card = 0 


console.log(ty)

function getRandomCard(){

    let rand_val = Math.floor(Math.random()*13)+1

    if(rand_val==1){
        return 11
    }else if(rand_val==11 || rand_val == 12 || rand_val == 13 ){

        return 10
    } else{
        return rand_val
    }
    
}

for(i=0;i<cards1.length; i++){

    console.log(cards1[i]);
}


function startGame(){
    isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard,secondCard]
sum = firstCard + secondCard
    renderGame()
}
function renderGame(){

    cardsEl.textContent = "Cards : "

    for(let i = 0 ; i < cards.length; i+=1){
        cardsEl.textContent +=cards[i]+" "
    }    

    if(sum<=20){
        message = "Do you want to draw a new card"
   }
   
   else if(sum === 21){
       message= "Wohooo!  You've go the BlackJack "
   }
   
   else{
       message = " You're out of the game ! "
       isAlive = false
   };
  messageEl.textContent = message
  sumEl.textContent += sum+ " "

//   if (card === 0){
//     cardsEl.textContent += firstCard+" "+secondCard
//   } 
//   else{
//     cardsEl.textContent += firstCard+" "+secondCard+" "+card
//   }
}

function newCard(){
    if (isAlive && sum < 21 ){

        card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
  
}


