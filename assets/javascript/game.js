    $(document).ready(function() {

        var life = 12;
        var lose = 0;
        var numblank = 0
        var win = 0 
        var counter = 0;  
        var usedWords = [];
  
        var anime = [
            "naruto",
            "bleach",
            "gto",
            "rewrite",
            "yugioh",
            "gundam",
            "rezero",
            "erased"
          ];

          
          var word = anime[Math.floor(Math.random() * anime.length)];
          numBlank = word.length;



          for (var i=0; i < numBlank; i++){
            var underscore = $("<span>");  
            underscore.addClass("underline underline-" + word[i]);
              
              $(".box1").append(underscore);
          }   

            document.onkeyup = function(event) {
                var result = false;


                var userguess = event.key;
                if(!usedWords.includes(userguess)){
                    usedWords.push(userguess);
                    life = life-1;
                    $(".life").text(life);
                    $(".box").append(userguess);
                    for(var j=0; j < word.length; j++){ 
                        if (userguess === word[j]){
                        $(".underline-" + word[j]).text(word[j]);
                        life = life + 1;
                        $(".life").text(life);
                        console.log("works!");
                        counter++;
                }
             }
        }     
                
                if (counter === numBlank){
                    win++;
                    $("h5").text(win);
                    $(".box1").empty();
                    $(".box").empty();
                    resetGame(); 
                }
                if (life === 0){
                    lose = lose +1;
                    $("h4").text(lose); 
                    $(".box1").empty();
                    $(".box").empty();
                    resetGame();
                }

                 function resetGame(){
                    life = 12 ;
                    word= anime[Math.floor(Math.random() * anime.length)];
                    theWord = word.split("");
                    numBlank = theWord.length;
                    usedWords = [];
                    counter = 0 
                    for (var i=0; i < numBlank; i++){
                        var underscore = $("<span>");  
                        underscore.addClass("underline underline-" + word[i]);
                        underscore.attr("data-letter" , word[i]);
                          
                          $(".box1").append(underscore);
                          $(".life").text(life);

                          
                      } 
                }
            
              };
            
            })
