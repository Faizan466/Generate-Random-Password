let generatorRandomPassword = () => {
  const keyboardCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",

    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",

    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",

    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "|",
    ";",
    ":",
    "'",
    '"',
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    "`",
    "~",
    " ",
  ];

  document.querySelector(".first_password_field").value = "";
  document.querySelector(".second_password_field").value = "";
  let firstPassword = [];

  for (let index = 0; index < 16; index++) {
    let checkRandomNumber = Math.floor(
      Math.random() * keyboardCharacters.length
    );

    let password = keyboardCharacters[checkRandomNumber];
    firstPassword.unshift(password);

    console.log(keyboardCharacters[checkRandomNumber]);
  }
  for (let index = 0; index < firstPassword.length; index++) {
    document.querySelector(".first_password_field").value +=
      firstPassword[index];
  }
  let secondPassword = [];
  for (let index = 0; index < 16; index++) {
    let checkRandomNumber = Math.floor(Math.random() * 93) + 1;
    console.log(keyboardCharacters[checkRandomNumber]);
    let password = keyboardCharacters[checkRandomNumber];
    secondPassword.unshift(password);
  }

  for (let index = 0; index < secondPassword.length; index++) {
    document.querySelector(".second_password_field").value +=
      secondPassword[index];
  }
};
let storeBtnMovement = document.querySelector(".Generate-password");
storeBtnMovement.addEventListener("click", () => {
  generatorRandomPassword();
});
