$(function(){

    function findMovie (movie){
      $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + movie
      }).done(function(data){
        console.log(data);
      })
    }

  findMovie('Frozen')
})
