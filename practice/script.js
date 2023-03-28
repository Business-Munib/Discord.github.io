let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
const cells = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset")
let running = false;
let winnings = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,5],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]
]

startGame();

function startGame(){
	if(running == false){
		running = true
		cells.forEach(cell => cell.addEventListener("click", cellClicked))
		resetBtn.addEventListener("click", resetGame)
	}

}
function cellClicked() {
	const cellIndex = this.getAttribute("cellIndex");

	if(options[cellIndex] != "" || !running){
		return;
	}
	updateCells(this, cellIndex);
	checkWin();

}

function updateCells(cell, index) {
  // TODO: update the board and the screen to reflect the player's move
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;


}

function checkWin() {
  // TODO: check if the game has been won or if it's a tie
  let roundWon = false;

  for(let i = 0; i < winnings.length; i++){
  	  const condition = winnings[i];

  	  const cellA = options[condition[0]];
  	  const cellB = options[condition[1]];
  	  const cellC = options[condition[2]];

  	  if(cellA == "" || cellB == "" || cellC == ""){
  	  	  continue;
  	  }
  	  if(cellA == cellB && cellB == cellC){
  	  	  roundWon = true
  	  	  break;
  	  }
  }
  if(roundWon){
  	  alert(`Omg ${currentPlayer} WON`)
  	  running = false;
  }else if(!options.includes("")){
  	  alert("draw bruh")
  	  running = false;
  }else{
  	  switchPlayer();
  }
}

function switchPlayer() {
  // TODO: switch the current player to the other player
	currentPlayer = (currentPlayer === "X") ? "O" : "X";
}

function resetGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
