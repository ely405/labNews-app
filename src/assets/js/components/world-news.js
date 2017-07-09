'use strict';

const worldNews = [];

const sectionWorldNews = (update)=>{
  let worldNews = $('<section class="container-fluid top"></section>');
  let sectionTitle = $('<h1>MUNDO</h1>');
  let firstRow = $('<section class="row first-row-world"></div>');
  let secondtRow = $('<section class="row sec-row-world"></div>');
  let colLeft = $('<div class="col-sm-3 first-row-world__col"></div>');
  let colMidle = $('<div class="col-sm-6 first-row-world__col"></div>');
  let colRight = $('<div class="col-sm-3 first-row-world__col"></div>');

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

    let item1 = content(worldNews[9].title, worldNews[9].brief, 'assets/img/' + worldNews[9].url);
    item1.addClass('main-new col-xs-12 has-feedback col-left-content');
    colLeft.append(item1);
    let item2 = content(worldNews[1].title, worldNews[1].brief, 'assets/img/' + worldNews[1].url);
    item2.addClass(' col-xs-12 col-sm-6 has-feedback col-mid-content-50');
    let item3 = content(worldNews[2].title, worldNews[2].brief, 'assets/img/' + worldNews[2].url);
    item3.addClass('col-xs-12 col-sm-6 has-feedback col-mid-content-50');
    let item4 = content(worldNews[3].title, worldNews[3].brief, 'assets/img/' + worldNews[3].url);
    item4.addClass('col-xs-12  has-feedback col-mid-content-25');
    let item5 = content(worldNews[4].title, worldNews[4].brief, 'assets/img/' + worldNews[4].url);
    item5.addClass('col-xs-12  has-feedback col-mid-content-25 hidden-xs');
    colMidle.append(item2, item3, item4, item5);
    let item6 = content(worldNews[5].title, worldNews[5].brief, 'assets/img/' + worldNews[5].url);
    item6.addClass('col-xs-12 col-sm-12 has-feedback col-rigth-content hidden-xs');
    colRight.append(item6);
    let item7 = content(worldNews[3].title, worldNews[2].brief, 'assets/img/' + worldNews[2].url);
    item7.addClass('col-xs-12 col-sm-3 has-feedback sec-row-world__content hidden-xs');
    let item8 = content(worldNews[7].title, worldNews[7].brief, 'assets/img/' + worldNews[7].url);
    item8.addClass('col-xs-12 col-sm-3 has-feedback sec-row-world__content hidden-xs');
    let item9 = content(worldNews[8].title, worldNews[8].brief, 'assets/img/' + worldNews[8].url);
    item9.addClass('col-xs-12 col-sm-3 has-feedback sec-row-world__content hidden-xs');
    let item10 = content(worldNews[9].title, worldNews[9].brief, 'assets/img/' + worldNews[9].url);
    item10.addClass('col-xs-12 col-sm-3 has-feedback sec-row-world__content hidden-xs');

    firstRow.append(colLeft, colMidle, colRight);
    secondtRow.append(item7, item8, item9, item10);
  });
  return worldNews.append(sectionTitle, firstRow, secondtRow);
}
