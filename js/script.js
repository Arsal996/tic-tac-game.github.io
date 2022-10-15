console.log("Welcome to Tic Toe Game");
let music = new Audio("music/music.mp3")
let audioTurn = new Audio("music/ting.mp3")
let gameover = new Audio("music/gameover.mp3")
let turn = "X"
let thisgameover = false;


//function to change the turn
const changeTurn = () => {
   return turn === "X" ? " 0" : "X"
}

//function to check for a win
const checkWin = () => {
   let gamebox = document.getElementsByClassName("gamebox");
   let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
   ]
   wins.forEach(e => {
      if ((gamebox[e[0]].innerText === gamebox[e[1]].innerText) && (gamebox[e[2]].innerText === gamebox[e[1]].innerText) && (gamebox[e[0]].innerText !== "")) {
         document.querySelector(".info").innerText = gamebox[e[0]].innerText + " Won"
         thisgameover = true
         document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "150px"
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
         document.querySelector(".line").style.width = "20vw";
      }
   })
}

//game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element => {
   let gamebox = Element.querySelector(".gamebox")
   Element.addEventListener('click', () => {
      if (gamebox.innerText == '') {
         gamebox.innerText = turn;
         turn = changeTurn();
         audioTurn.play();
         checkWin();
         if (!thisgameover) {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
         }
         if(thisgameover == true){
            turn = "";
            gameover.play();
         }
      }
   })
})

// add onclick event to reset button

let reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
   let gamebox = document.querySelectorAll('.gamebox')
   Array.from(gamebox).forEach(Element => {
      Element.innerText = ""
   })
   turn = "X"
   thisgameover = false
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
   document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"
   document.querySelector(".line").style.width = "0vw";
   gameover.reset();
})