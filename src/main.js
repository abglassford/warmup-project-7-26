// document ready
$(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()
    findMovie($('#inputTitle').val())
  })
})


function findMovie (movie) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + movie
    }).then(function (data) {
      console.log(data)
      $('#movieImg').append('<img src="' + data.Poster + '">').css('float', 'left')
      $('#movieImg').append('<p>' + data.Title + '</p>')
      var genreArr = data.Genre.split(', ')
      for (var i = 0; i < genreArr.length; i++) {
        $('#genreSelect').append('<option id= "' + genreArr[i] + '">' + genreArr[i] + '</option>')
      }
    })
  })
