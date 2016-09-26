 $(document).ready(function(){
     var chuck = $('.chuck').click(function(){
        $.getJSON("http://api.icndb.com/jokes/random?firstName=Nick&amp;?lastName=Cotto&amp",
          function(data){
                var joke = data.value.joke;
                $(".chuck1").text(joke);
            });
    });
});


// http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
// 1
// http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
