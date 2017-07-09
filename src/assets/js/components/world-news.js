'use strict';

const worldNews = [];

const sectionWorldNews = (update)=>{
  let worldNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>MUNDO</h1>');
  let firstRow = $('<section class="row"></div>');
  let secondtRow = $('<section class="row p-t-15"></div>');
  let colLeft = $('<div class="col-sm-3 p-0"></div>');
  let colMidle = $('<div class="col-sm-6 p-0"></div>');
  let colRight = $('<div class="col-sm-3 p-0"></div>');

  $.get("/api/news/", (response, status)=>{
    console.log(response);
    $.each(response, (i, data)=>{
      $.each(data.categories, (i, categorie)=>{
        if(categorie == 1){
          // console.log(categorie);
          const aNews = new Noticia(data.title, data.brief, data.img);
          worldNews.push(aNews);
        }
      });
    });
    // console.log(worldNews);

    let item1 = content(worldNews[9].title, worldNews[9].brief, 'assets/img/' + worldNews[9].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item1.addClass('col-xs-12 second-news world-news--content-sm p-0');
    colLeft.append(item1);
    let item2 = content(worldNews[1].title, worldNews[1].brief, 'assets/img/' + worldNews[1].url, 'second-news__contain-img col-xs-6 col-sm-12 p-0', 'col-xs-6 col-sm-12');
    item2.addClass(' col-xs-12 second-news col-sm-6 world-news--cont-middle-up p-t-15');
    let item3 = content(worldNews[2].title, worldNews[2].brief, 'assets/img/' + worldNews[2].url, 'second-news__contain-img col-xs-6 col-sm-12 p-0', 'col-xs-6 col-sm-12');
    item3.addClass('col-xs-12 second-news col-sm-6 world-news--cont-middle-up p-t-15 p-l-0');
    let item4 = content(worldNews[3].title, worldNews[3].brief, 'assets/img/' + worldNews[3].url, 'second-news__contain-img col-xs-6 col-sm-12 p-0', 'col-xs-6 col-sm-12');
    item4.addClass('col-xs-12 second-news world-news--cont-middle-down p-t-15');
    let item5 = content(worldNews[4].title, worldNews[4].brief, 'assets/img/' + worldNews[4].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item5.addClass('col-xs-12 second-news hidden-xs world-news--cont-middle-down p-t-15');
    colMidle.append(item2, item3, item4, item5);
    let item6 = content(worldNews[5].title, worldNews[5].brief, 'assets/img/' + worldNews[5].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item6.addClass('col-xs-12 second-news col-sm-12 hidden-xs world-news--content-sm');
    colRight.append(item6);
    let item7 = content(worldNews[3].title, worldNews[2].brief, 'assets/img/' + worldNews[2].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item7.addClass('col-xs-12 col-sm-3 second-news world-news--cont-row-down hidden-xs p-0');
    let item8 = content(worldNews[7].title, worldNews[7].brief, 'assets/img/' + worldNews[7].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item8.addClass('col-xs-12 col-sm-3 second-news world-news--cont-row-down hidden-xs');
    let item9 = content(worldNews[8].title, worldNews[8].brief, 'assets/img/' + worldNews[8].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item9.addClass('col-xs-12 col-sm-3 second-news world-news--cont-row-down p-l-0 hidden-xs');
    let item10 = content(worldNews[9].title, worldNews[9].brief, 'assets/img/' + worldNews[9].url, 'second-news__contain-img col-xs-12 p-0', 'col-xs-12');
    item10.addClass('col-xs-12 col-sm-3 second-news world-news--cont-row-down hidden-xs p-0');

    firstRow.append(colLeft, colMidle, colRight);
    secondtRow.append(item7, item8, item9, item10);
  });
  return worldNews.append(sectionTitle, firstRow, secondtRow);
}
