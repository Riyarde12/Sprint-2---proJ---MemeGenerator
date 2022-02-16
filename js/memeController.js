'use strict';

var gCanvas;
var gCtx;


function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    renderGallery();
}

function renderMeme() {
    // debugger;
    const meme = getMeme();
    console.log(meme);
    drawImg(meme.selectedImgId, meme);
}

function drawImg(imgId, meme) {
    // const meme = getMeme();
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(30, 30, meme.lines[0].txt);
    };
    img.src = `${getImgById(imgId).url}`;
    console.log(img.src);
}

function drawText(x, y, text) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    const meme = getMeme();
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = meme.lines[0].color;
    gCtx.fillStyle = meme.lines[0].color;
    gCtx.font = `${meme.lines[0].size}px Ariel`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function UpdateMemeImg(imgId) {
    // var imgSelected = getImgById(imgId);
    // console.log(imgSelected);
    const meme = getMeme();
    meme.selectedImgId = imgId;
    console.log('meme.selectedImgId', meme.selectedImgId);
    renderMeme();
}

function setColor(elInput) {
    const selectedColor = elInput.value;
    setColorFont(selectedColor);
    renderMeme();
    // console.log(color);
    // gColor = color;
    // gShape.color = gColor;
}

function onSetFontSize(selectFontSize) {
    setFontSize(selectFontSize);
}