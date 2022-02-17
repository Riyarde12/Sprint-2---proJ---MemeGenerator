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
    const meme = getMeme();
    drawImg(meme.selectedImgId, meme);
}

function drawImg(imgId, meme) {

    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(30, 30, meme.lines[0].txt);
        drawText(30, 350, meme.lines[1].txt);
    };
    img.src = `${getImgById(imgId).url}`;
    console.log(img.src);
}

function drawText(x, y, text) {

    const meme = getMeme();
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = meme.lines[0].color;
    gCtx.fillStyle = meme.lines[0].color;
    gCtx.font = `${meme.lines[0].size}px Ariel`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function UpdateMemeImg(imgId) {

    const meme = getMeme();
    meme.selectedImgId = imgId;
    renderMeme();
}

function setColor(elInput) {
    const selectedColor = elInput.value;
    setColorFont(selectedColor);
    renderMeme();
}

function onSetFontSize(selectFontSize) {
    setFontSize(selectFontSize);
    renderMeme();
}

function onSetLineText(elInput) {
    var text = elInput.value;
    setLineTxt(text);
    renderMeme();
}

function onSwitchLine() {
    setLine();
    renderMeme();
}