function onClickImg(elImg) {
    openEditor();
    var selectedImgId = +elImg.id;
    // console.log(imgId);
    UpdateMemeImg(selectedImgId);
}

function openEditor() {
    document.querySelector('.my-modal').classList.add = ('open');
    document.querySelector('.my-modal').style.left = '50%';
}

function renderGallery() {
    var id = 1;
    const imgs = getImg();
    var strHtml = imgs.map(img => {
        return `<img id="${id++}" src="imgs/${img.id}.jpg" alt="" onclick="onClickImg(this)">`;
    }).join('');
    console.log('strHtml', strHtml);
    var elGrid = document.querySelector('.grid');
    elGrid.innerHTML = strHtml;
}