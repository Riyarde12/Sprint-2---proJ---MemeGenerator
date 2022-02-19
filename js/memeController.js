'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    resizeCanvas();
    renderGallery();
    // addListeners();
}

function addListeners() {
    window.addEventListener('resize', () => {
        resizeCanvas();
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
        drawText(30, 30, meme.lines[0]);
        drawText(30, 350, meme.lines[1]);
        meme.lines.forEach((currline, idx) => {
            if (idx > 1) {
                drawText(30, (idx * 30), meme.lines[idx]);
            }
        });
    };
    img.src = `${getImgById(imgId).url}`;
    console.log(img.src);
}

function drawText(x, y, currline) {
    const meme = getMeme();
    if (!currline) return;
    if (!meme.lines[meme.selectedLineIdx].color) return;
    gCtx.strokeStyle = meme.lines[meme.selectedLineIdx].color;
    gCtx.fillStyle = meme.lines[meme.selectedLineIdx].color;
    gCtx.font = `${meme.lines[meme.selectedLineIdx].size}px ${meme.lines[meme.selectedLineIdx].font}`;
    gCtx.strokeText(currline.txt, x, y);
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
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'screenshot';
}

function onAddLine() {
    setNewLine();
    renderMeme();
}

function onRemoveLine() {
    // debugger;
    deleteLine();
    renderMeme();
}

function openLoadedMemes() {
    document.querySelector('.main-gallery').classList.add('visible');
    document.querySelector('.saved-memes-modal').classList.remove('visible');
    var memes = loadMemesFromStorage();

    var strHtml = memes.map((meme) => {
        return `<img src="${meme}">`;
    }).join('');
    var elMemesGrid = document.querySelector('.memes-grid');
    elMemesGrid.innerHTML = strHtml;
}

function onSelectFont(value) {
    setFont(value);
    renderMeme();
}
