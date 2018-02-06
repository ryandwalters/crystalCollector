 

//"document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.

//Random computer score generated between 19 and 120
//variable is computerScore = math.floor(removes decimal & rounds to nearest whole number) math.random 
//(generates random decimal and multiplies it by # of possible results + 19 is the start number. 19 + 101=120)
var computerScore = Math.floor(Math.random() * 101) + 19;
$("#computerScore").html(computerScore);
console.log(computerScore);
var playerScore = 0;
var wins = 0;
var losses = 0;

// random number generated. 12 possible results. starting with the number 1
    var random1 = Math.floor(Math.random() * 12) + 1; 
    var random2 = Math.floor(Math.random() * 12) + 1;
    var random3 = Math.floor(Math.random() * 12) + 1;
    var random4 = Math.floor(Math.random() * 12) + 1;

    console.log(random1, random2, random3, random4);

    function reset(){
        computerScore = Math.floor(Math.random()*101+19);
        random1 = Math.floor(Math.random() * 12) + 1; 
        random2 = Math.floor(Math.random() * 12) + 1;
        random3 = Math.floor(Math.random() * 12) + 1;
        random4 = Math.floor(Math.random() * 12) + 1;
        playerScore = 0;
        $("#computerScore").text(computerScore);
        $("#playerScore").text(playerScore);
        
        } 

 

function youWin() {
    alert("You collected all the crystals!");
    wins ++;
    $("#wins").text(wins);
    reset ();
}
    
function youLose() {
    alert("Too many Crytals! Try again!");
    losses ++;
    $("#losses").text(losses);
    reset ();
}

$("#button1").on("click", function()  {
    playerScore = playerScore + random1;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random1);
    if (playerScore === computerScore) {
        youWin ();
    } else if (playerScore > computerScore) {
        youLose ();
    }

});

$("#button2").on("click", function()  {
    playerScore = playerScore + random2;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random2);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }

});

$("#button3").on("click", function()  {
    playerScore = playerScore + random3;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random3);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }
});

$("#button4").on("click", function()  {
    playerScore = playerScore + random4;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random4);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }
});







// $("#button4").on("click", function()  {
//     playerScore = playerScore + random4;
//     $("#playerScore").html(playerScore);
//     console.log("playerScore " + random4);
// })

// $("#button4").on("click", function () {

//     $("#playerScore").html(playerScore);
//     console.log("playerScore " + random4)
// })


// $("#button2").on("click", function() {
//     playerScore = playerScore + num2;
//     $("#playerScore").html(playerScore);
//     console.log("playerScore2 = " + playerScore);
//     if (playerScore === computerScore) {
//         alert("You Win!");
//         wins++;
//         reset ();
//     } else if (playerScore > computerScore){
//         alert ("You Lose!!");
//         losses++;
//         reset ();


// // $("random-button1) button in html function assigned to. on "click" button 1 causes the variable playerScore to increase by the random number created by the random number variables.
//$("#button1").on("click", function() {

    // console.log("playerScore1 = " + playerScore);
    // $("#playerScore").html(playerScore);

    // if (playerScore === computerScore) {
    //     alert("You Win!");
    //     wins++;
    //     reset ();
    // } else if (playerScore > computerScore){
    //     alert ("You Lose!!");
    //     losses++;
    //     reset ();
    // } 




// $("#wins").html(wins);
// $("#losses").html(losses);




   //object is a crystal type. creates a new variable type called crystal 
// var button = {

// currentValue: 0,
// color: 0,
// randomize: function (){ 
// this.currentValue = Math.floor(Math.random() * 12) + 1; 
// }
// };
// console.log(currentValue);
// //this is a bad way of doing it. 
// var cry1 = crystal;
// var cry2 = crystal;
// var cry3 = crystal;
// var cry4 = crystal;
// cry1.randomize();

//this is using arrays

// cryArray[].push(crystal); 
// cryArray[].push(crystal);
// cryArray[].push(crystal);
// cryArray[].push(crystal);
// cryArray[0].randomize;
// cryArray[1].randomize;
// cryArray[2].randomize;
// cryArray[3].randomize;

// // var cryArray = [];
// // var buttonArray = [];
// // //create 4 new buttons using for loop
// for (var i = 0; i < 4; i++) {
//     cryArray.push(crystal);
//     cryArray[i].randomize;
//     var buttonDiv = $("#buttons");
//     var buttonArray = $("<button>");
// $("buttons").append(button);
//  console.log()

// };

//if i want to reference button it would be buttonArray[0], etc...


    
// });

// $("#button2").on("click", function() {
//     playerScore = playerScore + num2;
//     $("#playerScore").html(playerScore);
//     console.log("playerScore2 = " + playerScore);
//     if (playerScore === computerScore) {
//         alert("You Win!");
//         wins++;
//         reset ();
//     } else if (playerScore > computerScore){
//         alert ("You Lose!!");
//         losses++;
//         reset ();
//     } 

// });

// $("button3").on("click", function() {
//     playerScore = playerScore + num3;
//     $("#playerScore").html(playerScore);
//     console.log("playerScore3 = " + playerScore);

//     if (playerScore === computerScore) {
//         alert("You Win!");
//         wins++;
//         reset ();
//     } else if (playerScore > computerScore){
//         alert ("You Lose!!");
//         losses++;
//         reset ();
//     } 

// });

// $("button4").on("click", function() {
//     playerScore = playerScore + num4;
//     $("#playerScore").html(playerScore);
//     console.log("playerScore4 = " + playerScore)
//     if (playerScore === computerScore) {
//         alert("You Win!");
//         wins++;
//         reset ();
//     } else if (playerScore > computerScore){
//         alert ("You Lose!!");
//         losses++;
//         reset ();




//function initializeGame() {
 //Wins = "";
 //losses = "";
 //var    $("computerScore").text(computerScore);
    // var num1 = Math.floor(Math.random()*12+1);
    // var num2 = Math.floor(Math.random()*12+1);
    // var num3 = Math.floor(Math.random()*12+1);
    // var num4 = Math.floor(Math.random()*12+1);
    // playerScore = 0;
    // computerScore = 0;
    // $("#playerScore").text(playerScore);
    // $("#computerScore").html(computerScore);





    // if (playerScore === computerScore) {
    //     alert("You Win!");
    //     wins++;
    //     reset ();
    // } else if (playerScore > computerScore){
    //     alert ("You Lose!!");
    //     losses++;
    //     reset ();
    // } 




   //prints computer score to compouter score box in html



// random number is assigned to each crystal between 1 - 12. 



        // Here we use jQuery to select the header with "click-me" as its ID.
        // Whenever it is clicked...
       // $("#random-button1").on("click", function() {
         //   var random1 = Math.floor(Math.random() * 12) + 1;
           // console.log("#random-button1" + random1);

         
        







  

    //var Wins = 0;
    //var Losses = 0;
// On go a different random number is assigned to each crystal between 1 - 12. Each time a new game starts a new random number is generated.
//
//for (i = 0; i<4; i++); {
  //  var random = math.floor(math.random() * 12);
//    var buttons = $('<div>');
  //      crystal.attr("class", 'crysal');

//+ " button1: " + button1 + " button2: " + button2 + " button3: " + button3 + " button4: " + button4);



//if playerScore === computerscore Wins++; else if playerScore !== computerScore losses++

               // (document).ready(function() {

                    // Here we use jQuery to select the header with "click-me" as its ID.
                    // Whenever it is clicked...
                   // $("#click-me").on("click", function() {
                    
                      // ... we trigger an alert.
                     // alert("I've been clicked!");

                    //$("#button1").on("click", function() {
    //alert("I've been clicked!"});
                    //)};
                        // Here this lockGame line prevents the user from changing the option after the game is done.
        
                
                          // We get the value associated with the button the user picked from here
    //button1 = $(this).attr("value");
                      //  }
        
    

        
    
                
    
      // We then reveal the computer's pick in the html
      //$("#computer-pick").text(computerPick);
    
    
                    //
                    //var valBetween = function;
                    //function valBetween(120, 19, 120) {
                    //  return (Math.min(120, Math.max(19, 120)));
                    //}
                    //console.log(valBetween);
    
                    //$("computerScore") = Math.miMath.floor(Math.random() * 4) + 1;
                    //console.log("Computer Pick: " + computerScore);
    


    
                    //$("#button1").on("click", function () {
    
                        // ... we generate a random number
    
                       // var button1 = Math.floor(Math.random() * 12) + 1;
                        // ... and then dump the random number into our random-number div.
                
    
    
