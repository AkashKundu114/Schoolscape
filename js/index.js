import users from "../users.json" assert { type: "json" };

var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    let n = 0;
    for (let i = 0; i <= 11; i++) {
    if (users[i]["name"] == username && users[i]["password"] == password) {
        document.getElementById("show").innerHTML = "<p id='success'>You have successfully logged in</p>";
        window.location = "./home.html";
        n++;
        break;
    }

    } if (n == 0) {
    document.getElementById("show").innerHTML = "<p id='error'>Incorrect username or password</p>";
}
});
