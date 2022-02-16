'use strict';

var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['funny', 'cat'] }
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
};

function getImg() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function getImgForDisplay(imgId) {
    return gImgs.find(img => imgId === img.id);
}