var score = document.querySelector("#score-card")
var rock = document.querySelector(".item1")
var paper = document.querySelector(".item2")
var scissor = document.querySelector(".item3")
var playAgain = document.querySelector("#play-again")
var item = document.querySelector("#item")
var lastText = document.querySelector(".lastText")
var playAgainButton = document.querySelector(".button")

let rockImg = "./rock-hand.png"
let paperImg = "./paper-hand.png"
let scissorImg = "./scissors-hand.png"


var user = document.querySelector(".userGame")
var comp = document.querySelector(".compGame")

var userTurn = ""
var compTurn = "";
var userPoint = 0
var compPoint = 0


function click(){
    rock.addEventListener("click", ()=>{
        user.innerHTML = `<img src="${rockImg}" height='200px'> `
        userTurn = "rock"
        compGame()
    })

    paper.addEventListener("click", ()=>{
        user.innerHTML = `<img src="${paperImg}" height='200px'> `
        userTurn = "paper"
        compGame()
        
        
    })

    scissor.addEventListener("click", ()=>{
        user.innerHTML = `<img src="${scissorImg}" height='200px'> `
        userTurn = "scissor"
        compGame()

    })
}
click()



function compGame(){
    let random = Math.floor(Math.random()*3) + 1
    if(random === 1){
        comp.innerHTML = `<img src="${rockImg}" height='200px'> `
        compTurn = "rock"
        update()
    }
    else if(random === 2){
        comp.innerHTML = `<img src="${paperImg}" height='200px'>`
        compTurn = "paper"
        update()
    }
    else if(random === 3){
        comp.innerHTML = `<img src="${scissorImg}" height='200px'>`
        compTurn = "scissor"
        update()
    }
}

function update(){
    if (userTurn == compTurn){
        compPoint = compPoint
    }else if(userTurn == "rock" && compTurn == "paper"){
        compPoint++
    }else if(userTurn == "paper" && compTurn == "scissor"){
        compPoint++
    }else if(userTurn == "scissor" && compTurn == "rock"){
        compPoint++
    }else{
        userPoint++
    }
    finish()

}

function finish(){
    score.innerText=` ${userPoint} - ${compPoint}`;
    if(userPoint >= 5 || compPoint >= 5){
        playAgain.style.visibility = "visible"
        item.style.visibility = "hidden"
    }
    if(userPoint === 5){
        lastText.innerHTML = "You won the game"
    }else{
        lastText.innerHTML = "You lost the game"
    }
}





playAgainButton.addEventListener("click", ()=> {
    location.reload()
})
