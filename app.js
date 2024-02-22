let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-Button");
let newGameButton = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx and playerO

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turnO) { //player O
      box.innerText = "O";
      turnO = false;
    }else { // player X
      box.innerText ="X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();

  });
});

const disableBoxes = () => {
  for(let box of boxes) {
    box.desabled = true;
  }
}

const enableBoxes = () => {
  for(let box of boxes) {
    box.desabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msg.innerText = `congratulations!!!! The winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for(let pattern of winPatterns){
    let posi1val = boxes[pattern[0]].innerText;
    let posi2val = boxes[pattern[1]].innerText;
    let posi3val = boxes[pattern[2]].innerText;

    if(posi1val != "" && posi2val != "" && posi3val != "") {
      if(posi1val === posi2val && posi2val === posi3val){
        console.log("winner", posi1val);
        showWinner(posi1val);
      }
    }

  }
}

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add.apply("hide");

}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);