console.log("Welcome to my tic tac toe")
let music = new Audio("music.mp3")
let turn = "X"
let gameover = false;
const changeTurn = ()=>{
    return turn === "X"?"0" : "X"
}

const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn =changeTurn();
            
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " +turn;
        }
    })
})