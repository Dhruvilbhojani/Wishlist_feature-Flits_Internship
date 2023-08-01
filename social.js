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

// <div class="social text-center row row-col-sm-2 row-col-md-2 justify-content-center">
//
//             <div class="col-md-2 m-2 p-0 btn-group" style="width: 150px;" role="group" aria-label="Basic example">
//                 <button type="button" class="btn btn-primary border-0" style="background-color: #029ad1;"><i
//                         class="bi bi-twitter"></i></button>
//                 <button type="button" class="btn btn-primary border-0"
//                     style="background-color: #00ACED;">Twitter</button>
//             </div>
//                 <img
//                         class="flits-icon-amazon"
//                         src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjIyNzMiIHZpZXdCb3g9IjAgMCAxMTAwIDEwMDAiPg0KCTxwYXRoIGQ9Ik0yIDc3NmMzLjMzMy01LjMzMyA4LjY2Ni01LjY2NyAxNi0xIDE2Ni42NjYgOTYuNjY3IDM0OCAxNDUgNTQ0IDE0NSAxMzAuNjY2IDAgMjU5LjY2Ni0yNC4zMzMgMzg3LTczIDMuMzMzLTEuMzMzIDguMTY2LTMuMzMzIDE0LjUtNiA2LjMzMy0yLjY2NyAxMC44MzMtNC42NjcgMTMuNS02IDEwLTQgMTcuODMzLTIgMjMuNSA2IDUuNjY2IDggMy44MzMgMTUuMzMzLTUuNSAyMi0xMiA4LjY2Ny0yNy4zMzQgMTguNjY3LTQ2IDMwLTU3LjMzNCAzNC0xMjEuMzM0IDYwLjMzMy0xOTIgNzktNzAuNjY3IDE4LjY2Ny0xMzkuNjY3IDI4LTIwNyAyOC0xMDQgMC0yMDIuMzM0LTE4LjE2Ny0yOTUtNTQuNUMxNjIuMzMzIDkwOS4xNjcgNzkuMzMzIDg1OCA2IDc5MmMtNC0zLjMzMy02LTYuNjY3LTYtMTAgMC0yIC42NjYtNCAyLTZ6bTMwMS0yODVjMC00NiAxMS4zMzMtODUuMzMzIDM0LTExOCAyMi42NjYtMzIuNjY3IDUzLjY2Ni01Ny4zMzMgOTMtNzQgMzYtMTUuMzMzIDgwLjMzMy0yNi4zMzMgMTMzLTMzIDE4LTIgNDcuMzMzLTQuNjY3IDg4LTh2LTE3YzAtNDIuNjY3LTQuNjY3LTcxLjMzMy0xNC04Ni0xNC0yMC0zNi0zMC02Ni0zMGgtOGMtMjIgMi00MSA5LTU3IDIxcy0yNi4zMzQgMjguNjY3LTMxIDUwYy0yLjY2NyAxMy4zMzMtOS4zMzQgMjEtMjAgMjNsLTExNS0xNGMtMTEuMzM0LTIuNjY3LTE3LTguNjY3LTE3LTE4IDAtMiAuMzMzLTQuMzMzIDEtNyAxMS4zMzMtNTkuMzMzIDM5LjE2Ni0xMDMuMzMzIDgzLjUtMTMyQzQ1MS44MzMgMTkuMzMzIDUwMy42NjYgMy4zMzMgNTYzIDBoMjVjNzYgMCAxMzUuMzMzIDE5LjY2NyAxNzggNTlhMTkwLjUyIDE5MC41MiAwIDAgMSAxOC41IDIxLjVjNS42NjYgNy42NjcgMTAuMTY2IDE0LjUgMTMuNSAyMC41IDMuMzMzIDYgNi4zMzMgMTQuNjY3IDkgMjYgMi42NjYgMTEuMzMzIDQuNjY2IDE5LjE2NyA2IDIzLjUgMS4zMzMgNC4zMzMgMi4zMzMgMTMuNjY3IDMgMjggLjY2NiAxNC4zMzMgMSAyMi44MzMgMSAyNS41djI0MmMwIDE3LjMzMyAyLjUgMzMuMTY3IDcuNSA0Ny41czkuODMzIDI0LjY2NyAxNC41IDMxYzQuNjY2IDYuMzMzIDEyLjMzMyAxNi41IDIzIDMwLjUgNCA2IDYgMTEuMzMzIDYgMTYgMCA1LjMzMy0yLjY2NyAxMC04IDE0LTU1LjMzNCA0OC04NS4zMzQgNzQtOTAgNzgtOCA2LTE3LjY2NyA2LjY2Ny0yOSAyLTkuMzM0LTgtMTcuNS0xNS42NjctMjQuNS0yM3MtMTItMTIuNjY3LTE1LTE2LTcuODM0LTkuODMzLTE0LjUtMTkuNWMtNi42NjctOS42NjctMTEuMzM0LTE2LjE2Ny0xNC0xOS41LTM3LjMzNCA0MC42NjctNzQgNjYtMTEwIDc2LTIyLjY2NyA2LjY2Ny01MC42NjcgMTAtODQgMTAtNTEuMzM0IDAtOTMuNS0xNS44MzMtMTI2LjUtNDcuNVMzMDMgNTQ5IDMwMyA0OTF6bTE3Mi0yMGMwIDI2IDYuNSA0Ni44MzMgMTkuNSA2Mi41UzUyNSA1NTcgNTQ3IDU1N2MyIDAgNC44MzMtLjMzMyA4LjUtMSAzLjY2Ni0uNjY3IDYuMTY2LTEgNy41LTEgMjgtNy4zMzMgNDkuNjY2LTI1LjMzMyA2NS01NCA3LjMzMy0xMi42NjcgMTIuODMzLTI2LjUgMTYuNS00MS41IDMuNjY2LTE1IDUuNjY2LTI3LjE2NyA2LTM2LjUuMzMzLTkuMzMzLjUtMjQuNjY3LjUtNDZ2LTI1Yy0zOC42NjcgMC02OCAyLjY2Ny04OCA4LTU4LjY2NyAxNi42NjctODggNTMuNjY3LTg4IDExMXptNDIwIDMyMmMxLjMzMy0yLjY2NyAzLjMzMy01LjMzMyA2LTggMTYuNjY2LTExLjMzMyAzMi42NjYtMTkgNDgtMjMgMjUuMzMzLTYuNjY3IDUwLTEwLjMzMyA3NC0xMSA2LjY2Ni0uNjY3IDEzLS4zMzMgMTkgMSAzMCAyLjY2NyA0OCA3LjY2NyA1NCAxNSAyLjY2NiA0IDQgMTAgNCAxOHY3YzAgMjMuMzMzLTYuMzM0IDUwLjgzMy0xOSA4Mi41LTEyLjY2NyAzMS42NjctMzAuMzM0IDU3LjE2Ny01MyA3Ni41LTMuMzM0IDIuNjY3LTYuMzM0IDQtOSA0LTEuMzM0IDAtMi42NjctLjMzMy00LTEtNC0yLTUtNS42NjctMy0xMSAyNC42NjYtNTggMzctOTguMzMzIDM3LTEyMSAwLTcuMzMzLTEuMzM0LTEyLjY2Ny00LTE2LTYuNjY3LTgtMjUuMzM0LTEyLTU2LTEyLTExLjMzNCAwLTI0LjY2Ny42NjctNDAgMi0xNi42NjcgMi0zMiA0LTQ2IDYtNCAwLTYuNjY3LS42NjctOC0yLTEuMzM0LTEuMzMzLTEuNjY3LTIuNjY3LTEtNCAwLS42NjcuMzMzLTEuNjY3IDEtM3oiLz4NCjwvc3ZnPg=="
//                         height="18" width="18"></button>
//                 <button type="button" class="text-black btn btn-primary border-0"
//                     style="background-color: #FF9900;">Amazon</button>
//             </div>

//         </div>
