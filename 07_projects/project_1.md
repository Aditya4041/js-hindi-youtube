# projext related to DOM

## project link
[click hear](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2
```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `${bmi}</br>You are under weight`;
    } else if (bmi > 24.9) {
      results.innerHTML = `${bmi}</br>You are over weight`;
    } else {
      results.innerHTML = `${bmi}</br>You are weight is normal `;
    }
  }
});
```

## project 3
```javascript 
const clock = document.getElementById('clock');
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4
```javascript
let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more then 1');
  } else if (guess > 100) {
    alert('please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGess === 11) {
      displayGess(guess);
      displayMessage(`game is over, Random no was ${random}`);
      endGame();
    } else {
      displayGess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage('you guessed right');
    endGame();
  } else if (guess < random) {
    displayMessage('number is tooo low');
  } else if (guess > random) {
    displayMessage('number is tooo high');
  }
}

function displayGess(guess) {
  userInput.value = '';
  gessSlot.innerHTML += `${guess}, `;
  numGess++;
  remaning.innerHTML = `${11 - numGess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">start new game </h2>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgamebtn = document.querySelector('#newGame');
  newgamebtn.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGess = 1;
    gessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playGame = true;
  });
}
```