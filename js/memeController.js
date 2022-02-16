'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    createImgs();
    renderGallery();
    // renderMeme();
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



function UpdateMemeImg(imgId) {
    // var imgSelected = getImgById(imgId);
    // console.log(imgSelected);
    const meme = getMeme();
    meme.selectedImgId = imgId;
    console.log('meme.selectedImgId', meme.selectedImgId);
    renderMeme();
}
