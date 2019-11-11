var finish = document.getElementById("finish");

finish.addEventListener("click", function(){

    //store user name of user
    var user=document.getElementById("userName");
    sessionStorage.setItem("user", user.value);
    location.replace("End Page.html");
});

var previous = document.getElementById("previous");

previous.addEventListener("click", function(){
    location.replace("first.html");
});