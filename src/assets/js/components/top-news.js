'use strict';


const sectionTopNews = (update) => {
    let topNews = $('<section class="container-fluid top"></section>');
    let mainrow = $('<section class="row"></div>');
    let row1 = $('<section class="row"></div>');
    let row2 = $('<section class="row"></div>');

    $.get("/api/news/", (response, status) => {
        console.log(response);
        $.each(response, (i, data) => {
            $.each(data.categories, (i, categorie) => {
                if (categorie == 0) {
                    const aNews = new Noticia(data.title, data.brief, data.img);
                    topNew.push(aNews);
                }
            });
        });

        let item1 = content(topNew[0].title, topNew[0].brief, 'assets/img/' + topNew[0].url, 'col-xs-12 p-0 ov-hidden main-news__contain-img');
        item1.addClass('main-news col-xs-12 col-sm-12');
        row1.append(item1);
        let item2 = content(topNew[1].title, topNew[1].brief, 'assets/img/' + topNew[1].url, 'second-news__contain-img', 'col-xs-12');
        item2.addClass('col-xs-12 col-sm-6 second-news flex-col content--sm');
        let item3 = content(topNew[2].title, topNew[2].brief, 'assets/img/' + topNew[2].url, 'col-xs-6 col-sm-12 p-0 second-news__contain-img', 'col-xs-6 col-sm-12');
        item3.addClass('col-xs-12 col-sm-3 second-news flex-row content--litle content--sm');
        let item4 = content(topNew[3].title, topNew[3].brief, 'assets/img/' + topNew[3].url, 'col-xs-6 col-sm-12 p-0 second-news__contain-img', 'col-xs-6 col-sm-12');
        item4.addClass('col-xs-12 col-sm-3 second-news flex-row content--litle content--sm');
        row2.append(item2, item3, item4);
        mainrow.append(row1, row2);
    });

    return topNews.append(mainrow);
}
