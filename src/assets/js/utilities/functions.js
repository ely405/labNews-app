'use strict';

function Noticia(title, brief, url) {
    this.title = title;
    this.brief = brief;
    this.url = url;
}

const topNew = [];

const content = (titleNews, briefNews, urlImg, classImgContainer, classDescripContainer) => {
    let container = $('<section"></section>');
    let containImg  = $('<div class="'+classImgContainer+'"></div>');
    let img = $('<img src="' + urlImg + '" alt="" class="img-responsive">');
    let containDescription = $('<div class="content '+classDescripContainer+'"></div>');
    let title = $('<h5>' + titleNews + '</h5>');
    let brief = $('<p class="hidden">' + briefNews + '</p>');
    
    containImg.append(img);
    containDescription.append(title, brief);
    container.append(containImg, containDescription);

    return container;
}
