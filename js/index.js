window.onload = function () {

  var alphabet = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Countries";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Continents";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Cities";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
          if (word[i] === "a"){
              guess.innerHTML = "a";
              space = 1;
          }
          else if(word[i]==="e"){
              guess.innerHTML = "e";
              space = 1;
          }
          else if(word[i]==="i"){
              guess.innerHTML = "i";
              space = 1;
          }
          else if(word[i]==="o"){
              guess.innerHTML = "o";
              space = 1;
          }
          else if (word[i]==="u"){
              guess.innerHTML = "u";
              space = 1;
          }
          else {
              guess.innerHTML = "_";
          }
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
        showLives.innerHTML = "Play Again!";
        for(var n=0; n < 21; n++){
            document.getElementsByTagName("li")[n].setAttribute("class", "active"); 
        }
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
        
//      if (guess.innerHTML != "_"){
//          showLives.innerHTML = "You Win!";
//      }
    }
  }

  
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

    
  // Play
  play = function (value) {
    categories = [
        ["canada", "mexico", "egypt", "australia", "germany"],
        ["africa", "asia", "europe", "australia", "antarctica"],
        ["paris", "milan", "rome", "moscow", "tokyo"]
    ];
      
    chosenCategory = categories[value];
      console.log(chosenCategory);
      //console.log(Math.floor(Math.random() * categories.length))
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 5;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
      document.getElementById("select1").style.visibility = "hidden";
  }
//if (typeof strUser !== '-') {
//    play();
//}
}