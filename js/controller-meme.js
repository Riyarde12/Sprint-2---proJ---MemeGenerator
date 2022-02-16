'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');

    renderMeme();
}

function renderMeme() {
    var img = new Image();
    img.src = 'imgs/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    };
}

function onOpenEditor() {
    console.log('hey!');
    document.querySelector('.my-modal').classList.add = ('open');
    document.querySelector('.my-modal').style.left = '50%';
}