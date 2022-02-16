'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    renderGallery();
    renderMeme();
}

function renderMeme() {
    const meme = getMeme();
    drawImg(meme.selectedImgId);
}

function drawImg(imgId) {
    const meme = getMeme();
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

    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

// function draw(ev) {
//     const offsetX = ev.offsetX;
//     const offsetY = ev.offsetY;

//     gShape.pos = getEvPos(ev);
//     console.log(offsetX);
//     // const currShape = getShape();
//     // currShape = { offsetX, offsetY };
//     // console.log(offsetX,offsetY)
//     // const { offsetX, offsetY } = ev
//     switch (gUserShape) {
//         case 'triangle':
//             drawTriangle(offsetX, offsetY);
//             break;
//         case 'rect':
//             drawRect(offsetX, offsetY);
//             break;
//         case 'arc':
//             drawArc(offsetX, offsetY);
//             break;
//     }
// }

function renderGallery() {

    const imgs = getImg();
    var strHtml = imgs.map(img => {
        return `<img src="imgs/${img.id}.jpg" alt="" onclick="onOpenEditor(this)">`;
    }).join('');
    console.log('strHtml', strHtml);
    var elGrid = document.querySelector('.grid');
    elGrid.innerHTML = strHtml;
}

function onSelectedImg(imgUrl) {
    getImgByUrl(imgUrl);
}

function onOpenEditor(elImg) {
    var imgUrl = elImg.src;

    onSelectedImg(imgUrl);

    console.log('img', imgUrl);
    document.querySelector('.my-modal').classList.add = ('open');
    document.querySelector('.my-modal').style.left = '50%';
}

