'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');

    renderMeme();
}

function renderMeme() {
    const meme = getMeme();
    drawImg(meme.selectedImgId);
}

function drawImg(imgId) {
    const meme = getMeme();
    var img = new Image();
    console.log(img.src);
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(30, 30, meme.lines[0].txt);
    };
    img.src = `${getImgForDisplay(imgId).url}`;
}

function drawText(x, y, text) {
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function draw(ev) {
    const offsetX = ev.offsetX;
    const offsetY = ev.offsetY;

    gShape.pos = getEvPos(ev);
    console.log(offsetX);
    // const currShape = getShape();
    // currShape = { offsetX, offsetY };
    // console.log(offsetX,offsetY)
    // const { offsetX, offsetY } = ev
    switch (gUserShape) {
        case 'triangle':
            drawTriangle(offsetX, offsetY);
            break;
        case 'rect':
            drawRect(offsetX, offsetY);
            break;
        case 'arc':
            drawArc(offsetX, offsetY);
            break;
    }
}

function onOpenEditor() {
    console.log('hey!');
    document.querySelector('.my-modal').classList.add = ('open');
    document.querySelector('.my-modal').style.left = '50%';
}