'use strict';

function onClickImg(elImg) {

    openEditor();
    var selectedImgId = +elImg.name;
    UpdateMemeImg(selectedImgId);
}

function openEditor() {

    document.querySelector('.main-gallery').classList.add('visible');
    document.querySelector('.editor').classList.remove('visible');
}

function openGallery() {

    document.querySelector('.editor').classList.add('visible');
    document.querySelector('.main-gallery').classList.remove('visible');
}

function renderCategory() {

    const category = getCategory();
    const strHTMLs = category.map(currCategory => `<option>${currCategory}</option>`);
    strHTMLs.unshift(`<option value="">Select Category</option>`);
    document.getElementById('category').innerHTML = strHTMLs.join('');
}

function renderGallery() {

    var id = 1;
    const imgs = getImgs();

    var strHtml = imgs.map(img => {
        return `<img name="${id++}" src="imgs/${img.id}.jpg" alt="" onclick="onClickImg(this)">`;
    }).join('');
    var elGrid = document.querySelector('.grid');
    elGrid.innerHTML = strHtml;
}

function onSelectCategory(filterBy) {

    setImgFilter(filterBy);
    renderGallery();
}

function renderFilterByQueryStringParams() {

    const queryStringParams = new URLSearchParams(window.location.search);
    const filterBy = {
        category: queryStringParams.get('category'),
    };

    document.getElementById('category').value = filterBy.category;
    setImgFilter(filterBy);
}