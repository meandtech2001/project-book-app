function authenticate() {
    document.getElementById("LoginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        var validEmail = "teamb@ecolab.com";
        var validPassword = "teamb";            
        
        if(email != validEmail) {
            alert("Wrong Email");
        } else if(password != validPassword) {
            alert("Wrong Password");
        }
        else {
            window.location.href = "../Author/AuthorList.html";
        }
    })
}