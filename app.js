const button = document.querySelector('button');
const header = document.querySelector('h1');

button.addEventListener('click', () => {
  fetch("https://api.adviceslip.com/advice")
    .then(result => result.json())
    .then(data => {
        console.log(header.innerText = data.slip.advice);
    });
});

