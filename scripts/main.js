let img = document.querySelector('img');

img.onclick = () => {
    let src = img.getAttribute('src');
    if(src === 'images/bit-0.PNG') {
      img.setAttribute('src','images/bit-1.PNG');
    } else {
      img.setAttribute('src','images/bit-0.PNG');
    }
}

let button = document.querySelector('button');
let heading = document.querySelector('h1');

function setUserName() {
    let name = prompt('Please enter your name.');
    if(!name) {
      setUserName();
    } else {
      localStorage.setItem('name', name);
      heading.textContent = 'Switch the bit, ' + name;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent = 'Switch the bit, ' + storedName;
}

button.onclick = () => {
    setUserName();
}
