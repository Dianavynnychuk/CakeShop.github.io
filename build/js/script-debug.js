"use strict";

$(document).ready(function () {
  $('.tm-main-nav').singlePageNav({
    'currentClass': "active",
    offset: 20
  });
  $('.tm-gallery-1').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.tm-gallery-2').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.tm-gallery-3').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.tm-current-year').text(new Date().getFullYear());
});
var params = {
  api_key: '2xVZo0foCbWEaQfvDijNI0abODA758xmUEIvClrd',
  query: '',
  dataType: ["Survey (FNDDS)"],
  pagesize: 1
};
var Url = "https://api.nal.usda.gov/fdc/v1/foods/search?api_key";
params.dataType = params.dataType.join(',');
$('.calculated-form').submit(function () {
  params.query = document.getElementById("produkt_name").value;
  $.get(Url, params, function (data, status) {
    console.log(data, status);
    console.log(data.foods[0].foodNutrients[3].value);
    document.getElementById("calories").value = data.foods[0].foodNutrients[3].value;
  });
  return false;
});