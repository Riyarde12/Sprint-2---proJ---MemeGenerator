'use strict';

var gCanvas;
var gCtx;


function init() {
    // gCanvas = document.getElementById('my-canvas');
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    // renderFilterByQueryStringParams();
    setImgForCategory();
    renderCategory();
    renderGallery();
    addEventListeners();
    // resizeCanvas();
    focusOnTextLine();
}

function addEventListeners() {
    window.addEventListener('resize', resizeCanvas);

}

function renderMeme() {

    const meme = getMeme();
    drawImg(meme.selectedImgId, meme);
}

function drawImg(imgId, meme) {

    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        meme.lines.forEach(currline => {
            drawText(currline.pos.x, currline.pos.y, currline);
        });
    };
    img.src = `${getImgById(imgId).url}`;
    console.log(img.src);
}

function drawText(x, y, currline) {
    console.log(currline);
    if (!currline) return;
    gCtx.strokeStyle = currline.color;
    gCtx.fillStyle = currline.color;
    gCtx.font = `${currline.size}px ${currline.font}`;
    console.log(gCtx.font);
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
    // debugger;
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
    console.log('elContainer.offsetWidth', elContainer.offsetWidth);
    if (elContainer.offsetWidth >= 370) return;
    gCanvas.width = elContainer.offsetWidth;
    renderMeme();
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

    deleteLine();
    renderMeme();
}

function openLoadedMemes() {

    document.querySelector('.main-gallery').classList.add('visible');
    document.querySelector('.editor').classList.add('visible');
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

function uploadImg() {

    const imgDataUrl = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);

        document.querySelector('.share-container').innerHTML = `
        <button class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </button>`;
    }
    doUploadImg(imgDataUrl, onSuccess);
}

