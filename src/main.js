// document ready
$(function () {
  $('form').on('submit', function (e) {
    e.preventDefault()
    findMovie($('#inputTitle').val())
  })
})
function findMovie (movie) {
  $.ajax({
    method: 'GET',
    url: 'http://www.omdbapi.com/?t=' + movie
  }).done(function (data) {
    console.log(data)
    $('#movieImg').append('<img src="' + data.Poster + '">')
    $('#movieInfo').append('<p>' + data.Title + '</p>')
    var genreArr = data.Genre.split(', ')
    for (var i = 0; i < genreArr.length; i++) {
      $('#genreSelect').append('<option id= "' + genreArr[i] + '">' + genreArr[i] + '</option>')
    }
  })
}
