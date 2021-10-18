player1_name = localStorage.getItem("p1n");
player2_name = localStorage.getItem("p2n");

player1_score = 0;
player2_score = 0;

document.getElementById("p1NAME").innerHTML = player1_name+" : ";
document.getElementById("p2NAME").innerHTML = player2_name+" : ";

document.getElementById("p1SCORE").innerHTML = player1_score;
document.getElementById("p2SCORE").innerHTML = player2_score;

function give_question(){
    number_1 = document.getElementById("no.1").value;
    number_2 = document.getElementById("no.2").value;
    answer = parseInt(number_1) * parseInt(number_2); //parseInt converts strings to integers 

    question = "<span class='wrapper fadeInDown'> <span id='formContent'>" + "<h2 class='active'>"+ number_1 + " × " + number_2 + "</h2>"; //question created
    input_answer = "<br> Answer : <form><input type='text' id='answer_un' class='fadeIn second' placeholder='Enter Your Answer Here'><h3> </span> </span>"; //answer box created
    button_check = "<br> <input id='check' type='submit' class='fadeIn fourth' value='Check the Answer' onclick='check_answer()'>"; //check button created
    display = question + input_answer + button_check; //all together to display in the div

    document.getElementById("question-answer").innerHTML = display; 
    document.getElementById("no.1").value = ""; //blanks no.1
    document.getElementById("no.2").value = ""; //blanks no.2
}

question_turn = "player1"; //sets default question turn
answer_turn = "player2"; //sets default answer turn

function check_answer(){
    get_ans = document.getElementById("answer_un").value; //saves value of answer user wrote in var get_ans
    if(get_ans == answer){ //if user's answer is the correct/actual answer then,
        if(answer_turn == "player1") {
            change_player1_s = player1_score + 1;
            document.getElementById("p1SCORE").innerHTML = change_player1_s;
        }
        else{
            change_player2_s = player2_score + 1;
            document.getElementById("p2SCORE").innerHTML = change_player2_s;
        }
    }
}

