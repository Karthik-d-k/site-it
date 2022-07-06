let img = document.querySelector('img');

img.onclick = () => {
    let src = img.getAttribute('src');
    if(src === 'images/Bridge_thumbnail.jpg') {
      img.setAttribute('src','images/Penguins_thumbnail.jpg');
    } else {
      img.setAttribute('src','images/Bridge_thumbnail.jpg');
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
      heading.textContent = 'CLick on bridge, ' + name;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent = 'CLick on bridge, ' + storedName;
}

button.onclick = function() {
    setUserName();
}
