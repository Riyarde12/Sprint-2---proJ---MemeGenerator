'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    resizeCanvas();
    renderGallery();
}

function addListeners() {
    window.addEventListener('resize', () => {
        resizeCanvas();
        // renderCanvas();
    });
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
    // debugger;
    const width = text.length + 15;
    const height = 50;
    const meme = getMeme();
    console.log('meme', meme);
    // gCtx.beginPath();
    gCtx.lineWidth = 1;
    if (x === 30 && y === 30) {
        gCtx.strokeStyle = meme.lines[0].color;
        gCtx.fillStyle = meme.lines[0].color;
        gCtx.font = `${meme.lines[0].size}px Ariel`;
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
        console.log('on controller', meme.lines[0].color);
    }
    if (x === 30 && y === 350) {
        gCtx.strokeStyle = meme.lines[1].color;
        gCtx.fillStyle = meme.lines[1].color;
        gCtx.font = `${meme.lines[1].size}px Ariel`;
        gCtx.fillText(text, x, y);
        gCtx.strokeText(text, x, y);
        console.log('on controller', meme.lines[1].color);
    }
    // gCtx.fillText(text, x, y);
    // gCtx.strokeRect(x, y, width, height);
    // gCtx.drawFocusIfNeeded(path);
    // gCtx.strokeText(text, x, y);
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

function focusOnTextLine() {
    const meme = getMeme();
    document.getElementById("myText").value = meme.lines[meme.selectedLineIdx].txt;
}

function onSwitchLine() {
    setLine();
    focusOnTextLine();
    renderMeme();
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth - 20;
    // Unless needed, better keep height fixed.
    // gCanvas.height = elContainer.offsetHeight - 10;
}