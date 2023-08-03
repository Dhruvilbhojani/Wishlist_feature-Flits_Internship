var userDetails = document.getElementsByClassName("userDetails")[0];
document.addEventListener("DOMContentLoaded", function () {
  var logout = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("_grecaptcha");
    userDetails.innerHTML = `<small><b><a
                                        class="text-white" href="./login.html">Sign
                                        in</a></b> or <b><a class="text-white" href="./register.html">Create an
                                        Account</a></b></small>`;
    document.getElementById("createAccount").classList.remove("d-none");
    document.getElementById("signIn").classList.remove("d-none");
    document.getElementById("profile").classList.add("d-none");
    document.getElementById("logout").classList.add("d-none");
    window.location.href = "./login.html";
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
      alert("create");
      var createAccount = document.getElementById("createAccount");
      createAccount.classList.add("d-none");
      document.getElementById("signIn").classList.add("d-none");
      document.getElementById("profile").classList.remove("d-none");
      document.getElementById("logout").classList.remove("d-none");
    }
    userDetails.classList.add("justify-content-end", "m-2");

    a.addEventListener("click", logout);
    document.getElementById("logout").addEventListener("click", logout);
  }
});
