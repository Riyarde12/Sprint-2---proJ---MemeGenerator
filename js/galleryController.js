function onClickImg(elImg) {
    openEditor();
    var selectedImgId = +elImg.id;
    UpdateMemeImg(selectedImgId);
}

function openEditor() {
    document.querySelector('.main-gallery').classList.add('visible');
    document.querySelector('.my-modal').classList.remove('visible');
}

function openGallery() {
    debugger;
    document.querySelector('.my-modal').classList.add('visible');
    document.querySelector('.main-gallery').classList.remove('visible');
}

function renderGallery() {
    var id = 1;
    const imgs = getImg();
    var strHtml = imgs.map(img => {
        return `<img id="${id++}" src="imgs/${img.id}.jpg" alt="" onclick="onClickImg(this)">`;
    }).join('');
    var elGrid = document.querySelector('.grid');
    elGrid.innerHTML = strHtml;
}