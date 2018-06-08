    $(document).ready(function() {

        var life = 12;
        var lose = 0;
        var numblank = 0
        var win = 0 
        var usedWords = [];
        var chosenWord = [];
        var blanksAndSuccesses = [];
        var currentWordIndex;
        var anime = [
            "naruto",
            "bleach",
            "gto"
          ];

          
          var word = anime[Math.floor(Math.random() * anime.length)];
          var theWord = word.split("");
          numBlank = theWord.length;

          for (var i = 0; i < numBlank; i++) {
            blanksAndSuccesses.push("_");
          }

          console.log(blanksAndSuccesses);
          console.log(numBlank);
        

          for (var i=0; i < numBlank; i++){
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
                        chosenWord.push(userguess);
                        ResetGlobalVariables()
                    }
                }
                if (result === false){
                    life = life-1;
                    $(".life").text(life);
                    usedWords.push(userguess);
                    $(".box").append(userguess);

                }

                var winner = chosenWord.join("");
                if (winner === word){
                    win++;
                    $("h5").text(win);
                }
                if (life === 0){
                    lose = lose +1;
                    $("h4").text(lose); 
                    //document.location.reload();
                }
              };

         /*   function resetGame(){
                life = 12 ;
                word= anime[Math.floor(Math.random() * anime.length)];
                chosenWord = [];
                usedWord = [];

                for (var i = 0; i < anime[word].length; i++) {
                    theWord.push("_");

                    updateDisplay ()
            }
        }*/

            

              console.log(chosenWord);
              console.log(word);
          
            })
