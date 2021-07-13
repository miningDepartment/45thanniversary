let mdhButton = document.getElementById('mdh');
mdhButton.addEventListener('click', showHistory);

let mdsButton = document.getElementById('mds');
mdsButton.addEventListener('click', showSocial);

function showHistory() {
    let socialArray= document.querySelectorAll('.social');
    let historyArray= document.querySelectorAll('.history');
    let linesHistory = document.querySelectorAll('.vlh');
    let linesSocial = document.querySelectorAll('.vls');

    socialArray.forEach((item) => {
        item.classList.add('hiden');
    })
    historyArray.forEach((item) => {
        item.classList.remove('hiden');
    })
    linesHistory.forEach((item) => {
        item.classList.remove('none');
    })
    linesSocial.forEach((item) => {
        item.classList.add('none');
    })
}

function showSocial() {
    let socialArray= document.querySelectorAll('.social');
    let historyArray= document.querySelectorAll('.history');
    let linesHistory = document.querySelectorAll('.vlh');
    let linesSocial = document.querySelectorAll('.vls');

    socialArray.forEach((item) => {
        item.classList.remove('hiden');
    })
    historyArray.forEach((item) => {
        item.classList.add('hiden');
    })
    linesHistory.forEach((item) => {
        item.classList.add('none');
    })
    linesSocial.forEach((item) => {
        item.classList.remove('none');
    })
}

document.addEventListener("DOMContentLoaded", showHistory);

// popup scripts
let modal = document.getElementById("myModal");

let img = document.querySelectorAll('.myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.forEach(element => {
    element.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
// popup scripts