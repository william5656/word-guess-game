    $(document).ready(function() {

        var life = 12;
        var lose = 0;
        var usedWords = [];
        var anime = [
            "naruto",
            "bleach",
            "gto"
          ];

          var word = anime[Math.floor(Math.random() * anime.length)];

          for (var i=0; i < word.length; i++){
            var underscore = $("<span>");  
            underscore.addClass("underline underline-" + word[i]);
            underscore.attr("data-letter" , word[i]);
              
              $(".box1").append(underscore);
          }   

            document.onkeyup = function(event) {
                var result = false;
                
                var userguess = event.key;
                for(var j=0; j < word.length; j++){ 
                    if (userguess === word[j]){
                        $(".underline-" + word[j]).text(word[j]);
                        result = true;
                    }
                }
                if (window.event.keyCode == 116) {
                    life = life+0
                }
                if (result === false){
                    life = life-1;
                    $(".life").text(life);
                    usedWords.push(userguess);
                    $(".box").append(userguess);

                }
                if (life === 0){
                
                    lose = lose +1;
                    $("h4").text(lose); 
                }
              };
    
          
            })