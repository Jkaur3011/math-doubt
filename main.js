function LogIn(){
    nameofp1 = document.getElementById("login1").value;
    nameofp2 = document.getElementById("login2").value;

    localStorage.setItem("name1", nameofp1);
    localStorage.setItem("name2", nameofp2);

    window.location = "question.html";
}