"use strict";

var mdhButton = document.getElementById('mdh');
mdhButton.addEventListener('click', showHistory);
var mdsButton = document.getElementById('mds');
mdsButton.addEventListener('click', showSocial);

function showHistory() {
  var socialArray = document.querySelectorAll('.social');
  var historyArray = document.querySelectorAll('.history');
  var linesHistory = document.querySelectorAll('.vlh');
  var linesSocial = document.querySelectorAll('.vls');
  socialArray.forEach(function (item) {
    item.classList.add('hiden');
  });
  historyArray.forEach(function (item) {
    item.classList.remove('hiden');
  });
  linesHistory.forEach(function (item) {
    item.classList.remove('none');
  });
  linesSocial.forEach(function (item) {
    item.classList.add('none');
  });
}

function showSocial() {
  var socialArray = document.querySelectorAll('.social');
  var historyArray = document.querySelectorAll('.history');
  var linesHistory = document.querySelectorAll('.vlh');
  var linesSocial = document.querySelectorAll('.vls');
  socialArray.forEach(function (item) {
    item.classList.remove('hiden');
  });
  historyArray.forEach(function (item) {
    item.classList.add('hiden');
  });
  linesHistory.forEach(function (item) {
    item.classList.add('none');
  });
  linesSocial.forEach(function (item) {
    item.classList.remove('none');
  });
}

document.addEventListener("DOMContentLoaded", showHistory); // popup scripts

var modal = document.getElementById("myModal");
var img = document.querySelectorAll('.myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.forEach(function (element) {
  element.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
}; // popup scripts