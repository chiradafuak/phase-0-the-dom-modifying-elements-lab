// Write your code here!

const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

const yourName = 'YOUR-NAME'; 

newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);