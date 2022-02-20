'use strict';

const gCategory = ['Famous', 'Animal', 'Cute', 'Baby', 'Funny', 'Akward', 'Sad'];

var gImgs = [];
var gIdx = 1;
var gFilterBy = { category: '' };

function createImgs() {

    var imgs = [];
    for (var i = 0; i < 9; i++) {
        imgs.push(createImg());
    }
    gImgs = imgs;
}

function createImg() {

    return {
        id: gIdx,
        url: `imgs/${gIdx++}.jpg`,
        category: '',
    };
}

function getCategory() {

    return gCategory;
}

function getImgs() {

    if (!gFilterBy.category) return gImgs;
    var imgs = gImgs.filter(img => img.category.includes(gFilterBy.category));

    return imgs;
}

function getImgById(imgId) {

    return gImgs.find(img => imgId === img.id);
}

function setImgForCategory() {

    gImgs[0].category = gCategory[0];
    gImgs[1].category = gCategory[1];
    gImgs[2].category = gCategory[2];
    gImgs[3].category = gCategory[1];
    gImgs[4].category = gCategory[3];
    gImgs[5].category = gCategory[4];
    gImgs[6].category = gCategory[5];
    gImgs[7].category = gCategory[4];
    gImgs[8].category = gCategory[4];
}

function setImgFilter(filterBy = {}) {
    if (!filterBy.category) {
        document.querySelector('.main-gallery').classList.remove('visible');
        document.querySelector('.saved-memes-modal').classList.remove('visible');
    }
    if (filterBy !== undefined) gFilterBy.category = filterBy.category;

    const queryStringParams = `?category=${gFilterBy.category}`;
    const newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + queryStringParams;
    window.history.pushState({ path: newUrl }, '', newUrl);

}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl);

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url);
        })
        .catch((err) => {
            console.error(err);
        });
}
