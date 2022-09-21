let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissor = document.getElementById("s");

let userScore = document.getElementById("userScoreVal");
let comScore = document.getElementById("compScoreVal");
let userCounter = 0;
let comCounter = 0;
userScore.innerText = userCounter;
comScore.innerText = comCounter;

let resultShow = document.getElementById("result-final-stat");
let userinput = document.getElementById("result-user-stat");
let comInput = document.getElementById("result-comp-stat");

let audioDun = new Audio("./audio/DUN DUN DUNNN.mp3");
let audioWrong = new Audio("audio/Wrong Clakson Sound Effect.mp3");
let audioMouse = new Audio("audio/mouse sound.wav");

let computerGenChoice = () => {
  let str = "rps";
  let val = "";
  val += str[Math.floor(Math.random() * 3)];
  console.log(val);
  return val;
};

let matchTied = () => {
  audioWrong.play();
  userinput.innerText = `User: 😐`;
  comInput.innerText = `Computer: 😑`;
  resultShow.textContent = "Winner: Tied! 😶";
};

let winnerUser = () => {
  audioDun.play();
  userCounter++;
  userScore.innerText = userCounter;
  resultShow.textContent = "Winner: User 🥇";
};

let winnerCom = () => {
  audioDun.play();

  comCounter++;
  comScore.innerText = comCounter;
  resultShow.textContent = "Winner: Robot 🥇";
};

rock.addEventListener("click", () => {
  audioMouse.play();
  let value = computerGenChoice();
  let user = "r";
  if (user === value) {
    matchTied();
    // alert("Tied!. 🤔");
  } else if (user == "r" && value == "s") {
    userinput.innerText = `User: Rock`;
    comInput.innerText = `Computer: Scissor`;

    winnerUser();
    // alert("User won ! 🥇");
  } else if (user == "r" && value == "p") {
    userinput.innerText = `User: Rock`;
    comInput.innerText = `Computer: Paper`;

    winnerCom();
    // alert("Robot won ! 🥇");
  }
});

paper.addEventListener("click", () => {
  audioMouse.play();

  let value = computerGenChoice();
  let user = "p";
  if (user === value) {
    matchTied();
    // alert("Tied!. 🤔");
  } else if (user == "p" && value == "r") {
    userinput.innerText = `User: Paper`;
    comInput.innerText = `Computer: Rock`;

    winnerUser();
    // alert("User won ! 🥇");
  } else if (user == "p" && value == "s") {
    userinput.innerText = `User: Paper`;
    comInput.innerText = `Computer: Scissor`;

    winnerCom();
    // alert("Robot won ! 🥇");
  }
});

scissor.addEventListener("click", () => {
  audioMouse.play();

  let value = computerGenChoice();
  let user = "s";
  if (user === value) {
    matchTied();
    // alert("Tied!. 🤔");
  } else if (user == "s" && value == "p") {
    userinput.innerText = `User: Scissor`;
    comInput.innerText = `Computer: Paper`;

    winnerUser();
    // alert("User won ! 🥇");
  } else if (user == "s" && value == "r") {
    userinput.innerText = `User: Scissor`;
    comInput.innerText = `Computer: Rock`;

    winnerCom();
    // alert("Robot won ! 🥇");
  }
});
