var userDetails = document.getElementsByClassName("userDetails")[0];
document.addEventListener("DOMContentLoaded", function () {
  var logout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("_grecaptcha");
    userDetails.innerHTML = `<small><b><a
                                        class="text-white" href="./login.html">Sign
                                        in</a></b> or <b><a class="text-white" href="./register.html">Create an
                                        Account</a></b></small>`;
    document.getElementById("logout").setAttribute("id", "createAccount");
    document.querySelector("#createAccount a").innerHTML = "CREATE AN ACCOUNT";
    document
      .querySelector("#createAccount a")
      .setAttribute("href", "./register.html");
    document.getElementById("profile").setAttribute("id", "singIN");
    document.querySelector("#signIN a").innerHTML = "SIGN IN";
    document.querySelector("#signIN a").setAttribute("href", "./login.html");
  };
  if (localStorage) {
    var uname = JSON.parse(localStorage.getItem("profile")).username;
    var a = document.createElement("a");
    a.innerHTML = "Logout";
    a.setAttribute("href", "#");
    a.style.color = "white";
    var p = document.createElement("p");
    p.classList.add("p-0");
    p.innerHTML = "Logged in as " + uname + " : ";
    // alert(uname);
    if (uname) {
      userDetails.innerHTML = "";
      p.appendChild(a);
      userDetails.appendChild(p);
      document.getElementById("createAccount").setAttribute("id", "logout");
      document.querySelector("#logout a").innerHTML = "LOGOUT";
      document.querySelector("#logout a").setAttribute("href", "./index.html");
      document.getElementById("signIn").setAttribute("id", "profile");
      document.querySelector("#profile a").innerHTML = "VIEW PROFILE";
      document.querySelector("#profile a").setAttribute("href", "#");
    }
    userDetails.classList.add("justify-content-end", "m-2");

    a.addEventListener("click", logout);
    document.getElementById("logout").addEventListener("click", logout);
  }
});
