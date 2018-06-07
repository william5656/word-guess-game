    $(document).ready(function() {

        var anime = [
            "naruto",
            "bleach"
          ];

          var word = anime[Math.floor(Math.random() * anime.length)];
          var answerArray = [];
          for (var i=0; i < word.length; i++){
            var underscore = $("<span>");  
            underscore.addClass("underline");
            underscore.attr("data-letter", word[i]);
              
              $(".box1").append(underscore);
          }   

              document.onkeyup = function(event){
                var userguess = event.key;
                var letter = $("<div>");
                for(i=0; j < word.length; j++){
                letter.text($(this).attr("data-letter"))
                }
            }

                
             
        
    

          
            })