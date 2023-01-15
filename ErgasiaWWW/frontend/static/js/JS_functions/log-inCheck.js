function validate () {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username == "admin" && password == "user") {
        let anHTML = "Correct";
        document.getElementById("message").innerHTML = anHTML;
    }
    else {
        let anHTML = "Wrong";
        document.getElementById("message").innerHTML = anHTML;
        username = "";
        password = "";
    }



}