//global variables
    //DECLARE and SET p1points to 0
    var p1points = 0;
    //DECLARE and SET p2points to 0
    var p2points = 0;
    //DECLARE and SET winner to ""
    var winner = "";
    //set trackGame to ""
    var trackGame = "";

//function to clear to console and intialise variables when playing again
function init(){
    //clear the console
    console.clear();
    //DECLARE and SET p1points to 0
    p1points = 0;
    //DECLARE and SET p2points to 0
    p2points = 0;
    //DECLARE and SET winner to ""
    winner = "";
    //set trackGame to ""
    trackGame = "";
    //run player1Turn
    player1Turn();
}

//function to avoid typing document.getElementById too much
function $(id){
    //returns the id object to the program
    return document.getElementById(id);
}

//function to roll dice
function rollDice(){
    //set dice value to random number between 1 and 6
    diceValue = Math.floor(Math.random()* 6 + 1);
    //return value
    return diceValue;
}

//function player1Turn
function player1Turn(){
    //declare and set p1startPoints to p1points
    var p1startPoints = p1points;
    //declare and set p1rollAgain to true
    var p1rollAgain = true;
    //display "It's player 1's turn"
    trackGame = "It's player 1's turn: ";
    console.log(trackGame);
    while(p1rollAgain){
        //set currentRoll to rollDice
        currentRoll = rollDice();
        trackGame = "Player 1 rolled a " + currentRoll;
        //display "rolled a " + currentRoll;
        console.log(trackGame);
        //if current roll = 1 then
        if (currentRoll == 1){
            //set p1points to p1startpoints
            p1points = p1startPoints;
            //set p1rollAgain to false
            p1rollAgain = false;
            trackGame = "Player 1 - Stops! Your score is back to " + p1points;
            //display "stop..."
            console.log(trackGame);
            //run player2 turn
            player2Turn();
        }
        else{
            //set p1points += currentRoll
            p1points += currentRoll;
            trackGame = "Making Bacon " + p1points;
            //display "p1's total is now" + p1points
            console.log(trackGame);
            //if p1points >= 20 
            if (p1points >= 20){
                //set winner to "Player 1"
                winner = "Player 1";
                //run gameover
                gameOver(winner);
            }
            else{
                //declare and set rollagain to user input 
                var rollAgain = prompt("Do you want to roll again player 1? (y/n)");
                //if rollagain
                if (rollAgain == "y"){
                    //set rollagain to true
                    p1rollAgain = true;
                }
                else{
                    //set roll again false
                    p1rollAgain = false;
                    //insert a line break
                    //document.write("</br>");
                    //run player2
                    player2Turn();
                }
            }
        }
    }
}

//function p2turn
function player2Turn(){
    //declare and set p2startPoints to p2points
    var p2startPoints = p2points;
    //declare and set p2rollAgain to true
    var p2rollAgain = true;
    //display "It's player 2's turn"
    trackGame = "It's player 2's turn: ";
    console.log(trackGame);
    while(p2rollAgain){
        //set currentRoll to rollDice
        currentRoll = rollDice();
        trackGame = "Player 2 rolled a " + currentRoll;
        //display "rolled a " + currentRoll;
        console.log(trackGame);
        //if current roll = 1 then
        if (currentRoll == 1){
            //set p1points to p2startpoints
            p1points = p2startPoints;
            //set p2rollAgain to false
            p2rollAgain = false;
            trackGame = "Player 2 - Stops! Your score is back to " + p1points;
            //display "stop..."
            console.log(trackGame);
            //run player2 turn
            player1Turn();
        }
        else{
            //set p2points += currentRoll
            p2points += currentRoll;
            trackGame = "Making Bacon " + p2points;
            //display "p2's total is now" + p2points
            console.log(trackGame);
            //if p2points >= 20 
            if (p2points >= 20){
                //set winner to "Player 2"
                winner = "Player 2";
                //run gameover
                gameOver(winner);
            }
            else{
                //declare and set rollagain to user input 
                var rollAgain = prompt("Do you want to roll again player 2? (y/n)");
                //if rollagain
                if (rollAgain == "y"){
                    //set rollagain to true
                    p2rollAgain = true;
                }
                else{
                    //set roll again false
                    p2rollAgain = false;
                    //insert a line break
                    //document.write("</br>");
                    //run player1
                    player1Turn();
                }
            }
        }
    }
}

//function gameover
function gameOver(player){
    //if confirmed playagain
    if(confirm(player + " wins!! Do you want to play again")){
        //run init
        init();
    }
    else{
        // go to google
        location.href = "https://www.google.com.au/";
    }
}