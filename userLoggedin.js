var userDetails = document.getElementsByClassName('userDetails')[0];
        document.addEventListener('DOMContentLoaded', function () {
            if (localStorage) {
                var uname = JSON.parse(localStorage.getItem("profile")).username;
                var a = document.createElement("a");
                a.innerHTML = "Logout";
                a.setAttribute('href', "#");
                a.style.color = "white";
                var p = document.createElement("p");
                p.classList.add("p-0");
                p.innerHTML = "Logged in as " + uname + " : ";
                // alert(uname);
                if (uname) {
                    userDetails.innerHTML = "";
                    p.appendChild(a);
                    userDetails.appendChild(p);
                }
                userDetails.classList.add("justify-content-end", "m-2");

                a.addEventListener("click", function () {
                    localStorage.removeItem("profile");
                    localStorage.removeItem("_grecaptcha");
                    userDetails.innerHTML = `<small><b><a
                                            class="text-white" href="./login.html">Sign
                                            in</a></b> or <b><a class="text-white" href="./register.html">Create an
                                            Account</a></b></small>`;

                })
            }
        })