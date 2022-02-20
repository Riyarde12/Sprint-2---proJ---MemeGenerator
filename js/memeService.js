'use strict';

const memesSentences = [
    'I never eat falafel',
    'DOMS DOMS EVERYWHERE',
    'Stop Using i in for loops',
    'Armed in knowledge',
    'Js error "Unexpected String"',
    'One does not simply write js',
    'I`m a simple man i see vanilla JS, i click like!',
    'JS, HTML,CSS?? Even my momma can do that',
    'May the force be with you',
    'I know JS',
    'JS Where everything is made up and the rules dont matter',
    'Not sure if im good at programming or good at googling',
    'But if we could',
    'JS what is this?',
    'Write hello world , add to cv 7 years experienced',
];


const STORAGE_MEME = 'memes';
const STORAGE_IMG = 'images';

var savedMemes = [];


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'black',
            font: 'Impact',
            pos: { x: 30, y: 30 },
        },
    ]
};

function getMeme() {
    return gMeme;
}

function setLineTxt(newText) {

    gMeme.lines[gMeme.selectedLineIdx].txt = newText;
}

function setFontSize(selectedFontSize) {

    switch (selectedFontSize) {
        case '+':
            gMeme.lines[gMeme.selectedLineIdx].size++;
            console.log('size', gMeme.lines[gMeme.selectedLineIdx]);
            break;
        case '-':
            gMeme.lines[gMeme.selectedLineIdx].size--;
            break;
    }
}

function setColorFont(selectedColor) {

    gMeme.lines[gMeme.selectedLineIdx].color = selectedColor;
}

function setLine() {

    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0;
}

function setNewLine() {

    if (gMeme.lines.length === 0) {
        createLine(30, 30);
    }
    else if (gMeme.lines.length === 1) {
        createLine(30, 350);
    }
    else {
        createLine(30, 30 * gMeme.lines.length);
    }
}

function createLine(x, y) {
    gMeme.lines.push({
        txt: '',
        size: 20,
        align: 'left',
        color: 'black',
        font: 'Impact',
        pos: { x, y }
    });
}

function saveMemeToStorage() {
    // set canvasImg image src to dataURL

    var dataUrl = gCanvas.toDataURL();

    savedMemes.push(dataUrl);
    saveToStorage(STORAGE_MEME, savedMemes);
}

function _saveImgToStorage() {
    saveToStorage(STORAGE_IMG, gImgs);
}

function loadMemesFromStorage() {
    var loadedMemes = loadFromStorage(STORAGE_MEME);

    return loadedMemes;
}

function setFont(newFont) {

    switch (newFont) {
        case 'Arial':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Arial';
            break;
        case 'Verdana':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Verdana';
            break;
        case 'Tahoma':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Tahoma';
            break;
        case 'Trebuchet':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Trebuchet';
            break;
        case 'Georgia':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Georgia';
            break;
        case 'Gelvetica':
            gMeme.lines[gMeme.selectedLineIdx].font = 'Gelvetica';
    }
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
};

