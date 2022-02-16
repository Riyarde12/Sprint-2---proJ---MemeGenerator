'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');

    renderMeme();
}

function renderMeme() {

}

function onOpenEditor() {
    console.log('hey!');
    document.querySelector('.my-modal').classList.add = ('open');
    document.querySelector('.my-modal').style.left = '50%';
}