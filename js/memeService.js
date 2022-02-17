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

var gIdx = 1;
var gImgs = [];
var gCurrLine = 1;
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'May the force be with you',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
};

// function createMeme(id) {
//     return {
//         selectedImgId: id,
//         selectedLineIdx: 0,
//         lines: [
//             {
//                 txt: memesSentences[id],
//                 size: 20,
//                 align: 'left',
//                 color: 'red'
//             }
//         ]
//     };
// }

function createImgs() {
    var imgs = [];
    for (var i = 0; i < 9; i++) {
        imgs.push(createImg());
    }
    gImgs = imgs;
    console.log(gImgs);
}

function createImg() {
    return {
        id: gIdx,
        url: `imgs/${gIdx++}.jpg`,
    };
}

function getImg() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function getImgById(imgId) {
    var currImg = gImgs.find(img => imgId === img.id);
    console.log(currImg);
    return currImg;
}

function getImgById(imgId) {
    return gImgs.find(img => imgId === img.id);
}

function setLineTxt(elInput) {
    // debugger;

    // switch text line selected
    switch (gCurrLine) {
        case 1:
            gMeme.lines[0].txt = elInput.value;
            console.log(gCurrLine);
            renderMeme();
            break;
        case 2:
            gMeme.lines[1].txt = elInput.value;
            console.log(gCurrLine);
            renderMeme();
            break;
    }
    // console.log(gMeme);

    // console.log(gMeme);

}

function setFontSize(selectedFontSize) {
    switch (selectedFontSize) {
        case '+':
            gMeme.lines[0].size++;
            renderMeme();
            break;
        case '-':
            gMeme.lines[0].size--;
            renderMeme();
            break;
    }
}

function setColorFont(selectedColor) {
    gMeme.lines[0].color = selectedColor;
}

function setLine() {
    gCurrLine++;
    if (gCurrLine === 3) gCurrLine = 0;
}