$(function(){
  function findMovie (movie){
    $.ajax({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + movie
    }).done(function(data){
      var movieData = data
    })
  }
})
$('#inputTitle').on('submit'){
  $('#movieImg').append('<img src="' + movieData + '">')
}
