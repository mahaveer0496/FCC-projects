/* eslint-disable */
var search = $("input[type='text']");
var titles = $('.title');
var contents = $('.content');
var links = $('a')
$(document).ready(function () {


  $('button').click(function (e) {
    // e.preventDefault();
    $(".contentWrapper").css("opacity", 0)
    var src = encodeURIComponent(search.val())

    console.log(src);
    $.ajax({
      type: "GET",
      url: `https://en.wikipedia.org/w/api.php?action=opensearch&search=${src}&format=json&callback=?`,
      data: {},
      dataType: "jsonp",
      success: function (response) {
        // console.log(response[2]);
        console.log(titles);
        $.each(titles, function (index, value) {
          value.innerHTML = `${response[1][index]}`
        })
        $.each(contents, function (index, value) {
          value.innerHTML = `${response[2][index]}`
        })
        $.each(links, function (index, value) {
          value.setAttribute("href", response[3][index])
        })

      },
      beforeSend: function () {
        $("body").css("cursor", "wait");
      },
      complete: function () {
        $("body").css("cursor", "default");
        $(".contentWrapper").css("opacity", 1)
        // $(".searchWrapper").css("top", "0px")
      },
      error: function(error){
        prompt(`There was an Error ${error}`)
      }

    });
  })



});