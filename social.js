document.addEventListener("DOMContentLoaded", function () {
  var socialDiv = document.createElement("div");
  socialDiv.classList.add(
    "social",
    "text-center",
    "row",
    "row-col-sm-2",
    "row-col-md-2",
    "justify-content-center"
  );

  //Facebook
  var btnGroupFB = document.createElement("div");
  btnGroupFB.classList.add("col-md-2", "m-2", "p-0", "btn-group");
  btnGroupFB.style.width = "150px";
  btnGroupFB.style.backgroundColor = "#3B5998";
  btnGroupFB.setAttribute("role", "group");
  btnGroupFB.setAttribute("aria-labrl", "Basic Example");
  var btnI1 = document.createElement("button");
  btnI1.setAttribute("type", "button");
  btnI1.classList.add("btn", "border-0");
  btnI1.backgroundColor = "#354f87";
  var i1 = document.createElement("i");
  i1.classList.add("bi", "bi-facebook");
  i1.style.color = "white";
  var btnI2 = document.createElement("button");
  btnI2.setAttribute("type", "button");
  btnI2.classList.add("btn", "border-0", "text-white");
  btnI2.style.backgroundColor = "#3B5998";
  btnI2.innerHTML = "Facebook";

  btnI1.appendChild(i1);
  btnGroupFB.appendChild(btnI1);
  btnGroupFB.appendChild(btnI2);

  //Google
  var btnGroupGoogle = document.createElement("div");
  btnGroupGoogle.classList.add("col-md-2", "m-2", "p-0", "btn-group");
  btnGroupGoogle.style.width = "150px";
  btnGroupGoogle.setAttribute("role", "group");
  btnGroupGoogle.setAttribute("aria-labrl", "Basic Example");
  var btnGoogleI1 = document.createElement("button");
  btnGoogleI1.setAttribute("type", "button");
  btnGoogleI1.classList.add("btn");
  btnGoogleI1.style.backgroundColor = "white";
  btnGoogleI1.style.borderColor = "#4285F4";
  btnGoogleI1.style.color = "#4285F4";
  var i2 = document.createElement("i");
  i2.classList.add("bi", "bi-google");
  var btnGoogleI2 = document.createElement("button");
  btnGoogleI2.setAttribute("type", "button");
  btnGoogleI2.classList.add("btn");
  btnGoogleI2.style.backgroundColor = "#4285F4";
  btnGoogleI2.style.borderColor = "#4285F4";
  btnGoogleI2.style.color = "white";

  btnGoogleI2.innerHTML = "Google";

  btnGoogleI1.appendChild(i2);
  btnGroupGoogle.appendChild(btnGoogleI1);
  btnGroupGoogle.appendChild(btnGoogleI2);

  //Twitter
  var btnGroupTwitter = document.createElement("div");
  btnGroupTwitter.classList.add("col-md-2", "m-2", "p-0", "btn-group");
  btnGroupTwitter.style.width = "150px";
  btnGroupTwitter.style.backgroundColor = "#3B5998";
  btnGroupTwitter.setAttribute("role", "group");
  btnGroupTwitter.setAttribute("aria-labrl", "Basic Example");
  var btnTwitterI1 = document.createElement("button");
  btnTwitterI1.setAttribute("type", "button");
  btnTwitterI1.classList.add("btn", "border-0");
  btnTwitterI1.style.backgroundColor = "#029ad1";
  var i3 = document.createElement("i");
  i3.classList.add("bi", "bi-twitter");
  i3.style.color = "white";
  var btnTwitterI2 = document.createElement("button");
  btnTwitterI2.setAttribute("type", "button");
  btnTwitterI2.classList.add("btn", "border-0", "text-white");
  btnTwitterI2.style.backgroundColor = "#00ACED";
  btnTwitterI2.innerHTML = "Twitter";

  btnTwitterI1.appendChild(i3);
  btnGroupTwitter.appendChild(btnTwitterI1);
  btnGroupTwitter.appendChild(btnTwitterI2);

  //Amazon
  var btnGroupAmazon = document.createElement("div");
  btnGroupAmazon.classList.add("col-md-2", "m-2", "p-0", "btn-group");
  btnGroupAmazon.style.width = "150px";
  btnGroupAmazon.style.backgroundColor = "#3B5998";
  btnGroupAmazon.setAttribute("role", "group");
  btnGroupAmazon.setAttribute("aria-labrl", "Basic Example");
  var btnAmazonI1 = document.createElement("button");
  btnAmazonI1.setAttribute("type", "button");
  btnAmazonI1.classList.add("btn", "border-0");
  btnAmazonI1.style.backgroundColor = "#d47f00";
  var i4 = document.createElement("img");
  i4.setAttribute("src", "./res/amazon.png");
  i4.style.color = "white";
  i4.style.maxHeight = "18";
  i4.style.maxWidth = "18";
  var btnAmazonI2 = document.createElement("button");
  btnAmazonI2.setAttribute("type", "button");
  btnAmazonI2.classList.add("btn", "border-0", "text-black");
  btnAmazonI2.style.backgroundColor = "#FF9900";
  btnAmazonI2.innerHTML = "Amazon";

  btnAmazonI1.appendChild(i4);
  btnGroupAmazon.appendChild(btnAmazonI1);
  btnGroupAmazon.appendChild(btnAmazonI2);

  socialDiv.appendChild(btnGroupFB);
  socialDiv.appendChild(btnGroupGoogle);
  socialDiv.appendChild(btnGroupTwitter);
  socialDiv.appendChild(btnGroupAmazon);
  var wrapper = document.getElementsByClassName("wrapper")[0];
  wrapper.appendChild(socialDiv);
});
