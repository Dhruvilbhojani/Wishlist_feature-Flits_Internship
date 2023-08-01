function toastAdded() {
  var textElement = document.createElement("div");
  textElement.classList.add("p-0", "slide-in");

  var frow = document.createElement("div");
  frow.classList.add("g-0");
  frow.style.backgroundColor = "#230268";
  frow.style.padding = "10px 25px";
  frow.classList.add("row", "text-white", "text-center");
  var col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = "Product has been added to your wishlist";

  var srow = document.createElement("div");
  srow.classList.add("row", "w-100", "g-0", "align-items-center");
  srow.style.backgroundColor = "white";
  srow.style.padding = "10px 20px";
  var col1 = document.createElement("div");
  var col2 = document.createElement("div");
  col1.classList.add("col");
  col2.classList.add("col");
  col2.innerHTML = "Alarm Clock";
  var productImage = document.createElement("img");
  productImage.style.height = "10vh";
  productImage.setAttribute("src", "./res/white-alarm-clock_900x.webp");

  col1.appendChild(productImage);
  frow.appendChild(col);
  srow.appendChild(col1);
  srow.appendChild(col2);
  textElement.appendChild(frow);
  textElement.appendChild(srow);
  textElement.style.position = "fixed";
  textElement.style.border = "1px solid black";
  textElement.style.bottom = "15px";
  textElement.style.left = "50%";
  textElement.style.transform = "translateX(-50%)";
  textElement.style.zIndex = "9999";
  textElement.style.display = "inline-block";
  textElement.style.whiteSpace = "nowrap";
  document.body.appendChild(textElement);
  setTimeout(function () {
    document.body.removeChild(textElement);
  }, 2000);
}
function toastRemovedProduct() {
  var textElement = document.createElement("div");
  textElement.classList.add("p-0", "slide-in");

  var frow = document.createElement("div");
  frow.classList.add("g-0");
  frow.style.backgroundColor = "black";
  frow.style.padding = "10px 25px";
  frow.classList.add("row", "text-white", "text-center");
  var col = document.createElement("div");
  col.classList.add("col");
  col.innerHTML = "Product removed from your wishlist";

  frow.appendChild(col);
  textElement.appendChild(frow);
  textElement.style.position = "fixed";
  textElement.style.border = "1px solid black";
  textElement.style.bottom = "15px";
  textElement.style.left = "50%";
  textElement.style.transform = "translateX(-50%)";
  textElement.style.zIndex = "9999";
  textElement.style.display = "inline-block";
  textElement.style.whiteSpace = "nowrap";
  document.body.appendChild(textElement);
  setTimeout(function () {
    document.body.removeChild(textElement);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage) {
    var btn = document.createElement("button");
    var svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>`;
    var svgFilledHeart = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg>`;
    btn.innerHTML = svg + "ADD TO WISHLIST";
    btn.classList.add(
      "border-1",
      "text-black",
      "bg-trasparent",
      "mt-2",
      "btn",
      "btn-outline-secondary"
    );
    var addToCart = document.getElementById("addToCart");
    var parentElement = addToCart.parentNode;

    var nextSibling = addToCart.nextSibling;

    if (nextSibling) {
      parentElement.insertBefore(btn, nextSibling);
    } else {
      parentElement.appendChild(btn);
    }

    btn.addEventListener("click", async function () {
      var flits = JSON.parse(localStorage.getItem("flits"));
      if (flits !== null) {
        if (flits.flits_customer_email == null) {
          console.log("NO EMAIL FOUND!!");
        } else {
          btn.classList.add("email-added-once");
        }
        if (flits.flits_wishlist_products == "table-clock") {
          btn.classList.add("added");
          btn.style.backgroundColor = "#230268";
          btn.classList.remove("text-black");
          btn.classList.add("text-white", "added");
          btn.innerHTML = svgFilledHeart + "ADDED TO WISHLIST";
        }
      }
      if (
        !btn.classList.contains("email-added-once") &&
        !btn.classList.contains("added")
      ) {
        var modal = document.createElement("div");
        modal.classList.add("modal", "fade");
        modal.setAttribute("id", "exampleModalCenter");
        modal.setAttribute("tabindex", "-1");
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-labelledby", "exampleModalCenterTitle");
        modal.setAttribute("aria-hidden", "true");

        var modalDialog = document.createElement("div");
        modalDialog.classList.add("modal-dialog", "modal-dialog-centered");
        modalDialog.setAttribute("role", "document");

        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        var modalHeader = document.createElement("div");
        modalHeader.classList.add("modal-header", "justify-content-center");
        var closeBtn = document.createElement("button");
        closeBtn.innerHTML = "X";
        closeBtn.classList.add(
          "position-absolute",
          "bg-transparent",
          "border-0",
          "text-secondary",
          "top-0",
          "end-0",
          "p-3",
          "pt-2"
        );
        closeBtn.addEventListener("click", function () {
          $(modal).modal("hide");
        });

        var showSVG = document.createElement("div");
        showSVG.classList.add(
          "d-flex",
          "justify-content-center",
          "row",
          "w-100"
        );
        var svgModal1 = `<svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.24 50" style="width: 17vh;">
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
        <path d="M45.93,21.27a20.2,20.2,0,1,1-26.84-9.8,20.2,20.2,0,0,1,26.84,9.8" style="fill:#4576bb">
        </path>
        <path
        d="M24.3,0l.9,2.07,2.07.9-2.07.89-.9,2.07-.9-2.07L21.33,3l2.07-.9ZM53.19,22.49l-1.63.7,1.63.71.71,1.64.71-1.64,1.63-.71-1.63-.7-.71-1.64Zm-52,1.16L0,24.17l1.21.52.52,1.21.52-1.21,1.21-.52-1.21-.52-.52-1.21Z"
        style="fill:#2c6db6"></path>
        <path
        d="M44.28,5.18a1.94,1.94,0,1,1-2.36,1.39,1.94,1.94,0,0,1,2.36-1.39M6.61,10.33a1.28,1.28,0,0,0-2.56,0,1.28,1.28,0,0,0,2.56,0"
        style="fill:#5bc1ee"></path>
        <path d="M41.4,24V38.29A1.7,1.7,0,0,1,39.7,40H15.83a1.7,1.7,0,0,1-1.7-1.7V24Z" style="fill:#ababab">
        </path>
        <path
        d="M40.79,22.76A1.49,1.49,0,0,1,41.4,24H14.13a1.49,1.49,0,0,1,.61-1.2l12.15-8.88a1.47,1.47,0,0,1,1.76,0l12.14,8.88"
        style="fill:#d8d7db"></path>
        <path
        d="M37.4,21.58a.53.53,0,0,1,.53.53V37.28a.54.54,0,0,1-.53.54H18.2a.54.54,0,0,1-.54-.54V22.11a.54.54,0,0,1,.54-.53H37.4"
        style="fill:#e0e5f4"></path>
        <path
        d="M20.79,26.29a.27.27,0,0,1,0-.54H34.86a.27.27,0,0,1,0,.54H20.79m14.07,1.78H20.79a.27.27,0,0,0,0,.54H34.86a.27.27,0,0,0,0-.54m0,2.32H20.79a.27.27,0,0,0,0,.54H34.86a.27.27,0,0,0,0-.54"
        style="fill:#01516a"></path>
        <path d="M41.4,24V38.32A1.67,1.67,0,0,1,39.73,40H15.83Z" style="fill:#fff"></path>
        <path d="M39.7,40H15.8a1.67,1.67,0,0,1-1.67-1.67V24Z" style="fill:#f2f0f8"></path>
        </g>
        </g>
        </svg>`;
        showSVG.innerHTML = svgModal1 + "WHAT's YOUR EMAIL?";

        var modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.setAttribute("id", "exampleModalCenterTitle");

        var modalBody = document.createElement("div");
        modalBody.classList.add("modal-body", "justify-content-center");

        var center = document.createElement("center");

        var emailInput = document.createElement("input");
        emailInput.classList.add("border-0", "emailInput", "p-2");
        emailInput.setAttribute("type", "email");
        emailInput.setAttribute("placeholder", "Email Address");
        emailInput.setAttribute(
          "style",
          "background-color: #dddddd;width: -webkit-fill-available;"
        );

        var modalFooter = document.createElement("div");
        modalFooter.classList.add("modal-footer", "justify-content-center");

        var emailModalButton = document.createElement("button");
        emailModalButton.classList.add("btn", "rounded-0");
        emailModalButton.setAttribute(
          "style",
          "background-color: rgb(12, 33, 84); color: white;"
        );
        emailModalButton.setAttribute("type", "button");
        emailModalButton.setAttribute("data-dismiss", "modal");
        emailModalButton.textContent = "Add to Wishlist";

        modalTitle.appendChild(showSVG);
        modalHeader.appendChild(modalTitle);
        modalBody.appendChild(center);
        center.appendChild(emailInput);
        modalFooter.appendChild(emailModalButton);
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(modalFooter);
        modalDialog.appendChild(modalContent);
        modal.appendChild(modalDialog);

        var style = document.createElement("style");
        style.innerHTML =
          ".emailInput::placeholder {color: gray !important;} .emailIput{color:red;}";
        document.head.appendChild(style);

        $(modal).modal("show");

        emailModalButton.addEventListener("click", async function () {
          var email = document
            .getElementsByClassName("emailInput")[0]
            .value.trim();
          var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(email)) {
            alert("Enter valid Email Address");
          } else {
            //************************************** */
            var flits = {};
            if (localStorage.getItem("flits")) {
              flits = JSON.parse(localStorage.getItem("flits"));
              console.log("Having");
            } else {
              console.log("NOT HACING");
            }
            flits.flits_customer_email = email;
            flits.flits_wishlist_products = "table-clock";
            localStorage.setItem("flits", JSON.stringify(flits));

            try {
              await fetch("https://tempapi.proj.me/api/QGs7adpr5")
                .then((res) => console.log(res))
                .catch((err) => console.log("Errorrrrr"));
            } catch (error) {
              console.error("Error sending data to API:", error);
            }

            modal.removeChild(modalDialog);
            var modalDialog2 = document.createElement("div");
            modalDialog2.classList.add("modal-dialog", "modal-dialog-centered");
            modalDialog2.setAttribute("role", "document");

            var modalContent2 = document.createElement("div");
            modalContent2.classList.add("modal-content");

            var modalHeader2 = document.createElement("div");
            modalHeader2.classList.add(
              "modal-header",
              "text-center",
              "justify-content-center"
            );

            var showSVG2 = document.createElement("div");
            showSVG2.classList.add(
              "d-flex",
              "justify-content-center",
              "row",
              "w-100"
            );
            var svgModal2 = `<svg class="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.24 50" style="width: 17vh;"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M24.3,0l.9,2.07,2.07.9-2.07.89-.9,2.08-.9-2.08L21.33,3l2.07-.9ZM53.19,22.48l-1.64.71,1.64.71.71,1.63.7-1.63,1.64-.71-1.64-.71-.7-1.63Zm-52,1.17L0,24.17l1.21.52.52,1.21.52-1.21,1.21-.52-1.21-.52-.52-1.21Z" style="fill:#2c6db6"></path><path d="M44.28,5.18a1.94,1.94,0,1,1-2.36,1.39,1.94,1.94,0,0,1,2.36-1.39M6.61,10.33a1.28,1.28,0,0,0-2.56,0,1.28,1.28,0,0,0,2.56,0" style="fill:#5bc1ee"></path><path d="M45.93,21.27a20.2,20.2,0,1,1-26.85-9.8,20.21,20.21,0,0,1,26.85,9.8" style="fill:#4576bb"></path><path d="M23.4,28.86a.34.34,0,0,0,.31,0c.18-.09,4.51-2.39,4.51-5a2.28,2.28,0,0,0-.72-1.7,2.36,2.36,0,0,0-1.61-.63A2.71,2.71,0,0,0,23.55,23a2.7,2.7,0,0,0-2.33-1.44,2.36,2.36,0,0,0-1.61.63,2.28,2.28,0,0,0-.72,1.7c0,2.57,4.33,4.87,4.51,5m-3.33-6.17a1.7,1.7,0,0,1,1.15-.45,2.15,2.15,0,0,1,2,1.74.33.33,0,0,0,.41.24.34.34,0,0,0,.24-.24,2.14,2.14,0,0,1,2-1.74,1.7,1.7,0,0,1,1.15.45,1.58,1.58,0,0,1,.51,1.21c0,1.92-3.24,3.86-4,4.29-.75-.43-4-2.37-4-4.29a1.57,1.57,0,0,1,.5-1.21Zm3.48,8.21a6.33,6.33,0,1,0-6.32-6.33,6.33,6.33,0,0,0,6.32,6.33m0-12a5.66,5.66,0,1,1-5.66,5.66,5.66,5.66,0,0,1,5.66-5.66m0,19.32a1.34,1.34,0,1,0,1.34-1.34,1.34,1.34,0,0,0-1.34,1.34m1.34-.67a.67.67,0,1,1-.67.67.67.67,0,0,1,.67-.67m4,.67a1.34,1.34,0,1,0,1.34-1.34,1.34,1.34,0,0,0-1.34,1.34m1.34-.67a.67.67,0,1,1-.67.67.67.67,0,0,1,.67-.67M38.75,24.9h-2a.67.67,0,0,0-.67.67H34.75a.32.32,0,0,0-.33.25l-.26,1.08H31.09v.67h3.33a.33.33,0,0,1,0,.66H30.09v.67h.61l-.4,2.66H26.48l-.06-.38-.66.1,0,.28H23.7l-.08-.4L23,31.3l.8,4a.33.33,0,0,0,.33.27h8.25l-.17.67H24.09a.33.33,0,0,0,0,.66h8.33a.32.32,0,0,0,.33-.25l.33-1.33,1.28-6.41h.06a1,1,0,0,0,.4-1.91l.19-.76h1.07a.67.67,0,0,0,.67.67h2a.66.66,0,0,0,.66-.67v-.66a.66.66,0,0,0-.66-.67M30.2,32.23l-.4,2.67H27l-.45-2.67Zm2.28,2.67h-2l.4-2.67H33Zm-8.66-2.67h2.09l.44,2.67h-2Zm9.32-.67H31l.4-2.66h2.31Zm3.61-6h2v.66h-2Zm-4.2-2.33a.34.34,0,0,1,0-.67h.33v-.33a.34.34,0,1,1,.67,0v.33h.33a.34.34,0,0,1,0,.67h-.33v.33a.34.34,0,0,1-.67,0v-.33h-.33m-2-3.67a.33.33,0,0,1-.33-.33.33.33,0,0,1,.33-.33h.33v-.34a.34.34,0,0,1,.67,0v.34h.33a.33.33,0,0,1,.34.33.34.34,0,0,1-.34.33h-.33v.34a.34.34,0,0,1-.67,0v-.34h-.33M20.22,33.23a.34.34,0,1,1,0,.67h-.33v.33a.34.34,0,0,1-.67,0V33.9h-.33a.34.34,0,0,1,0-.67h.33V32.9a.34.34,0,1,1,.67,0v.33h.33" style="fill:#fff"></path></g></g></svg>`;
            showSVG2.innerHTML =
              svgModal2 + "PRODUCT HAS BEEN ADDED TO YOUR WISHLIST";

            var modalTitle2 = document.createElement("h5");
            modalTitle2.classList.add("modal-title");
            modalTitle2.setAttribute("id", "exampleModalCenterTitle");

            var modalBody2 = document.createElement("div");
            modalBody2.classList.add(
              "modal-body",
              "justify-content-center",
              "text-center"
            );
            var p1 = document.createElement("p");
            p1.innerHTML =
              "You can view your wishlist by creating account or logging-in an existing account.";
            var p2 = document.createElement("p");
            var msg =
              "Please create account/login through <b>" + email + "</b> email";
            p2.innerHTML = msg;

            var center = document.createElement("center");

            var modalFooter2 = document.createElement("div");
            modalFooter2.classList.add(
              "modal-footer",
              "justify-content-center"
            );

            var Login = document.createElement("button");
            Login.classList.add("btn", "rounded-0", "m-1");
            Login.setAttribute(
              "style",
              "background-color: rgb(12, 33, 84); color: white; width: 45%;"
            );
            Login.setAttribute("type", "button");
            Login.textContent = "Login";
            var Register = document.createElement("button");
            Register.classList.add("btn", "rounded-0", "m-1");
            Register.setAttribute(
              "style",
              "background-color: rgb(12, 33, 84); color: white; width: 45%;"
            );
            Register.setAttribute("type", "button");
            Register.textContent = "Register";

            modalTitle2.appendChild(showSVG2);
            modalHeader2.appendChild(modalTitle2);
            modalBody2.appendChild(center);
            center.appendChild(p1);
            center.appendChild(p2);
            modalFooter2.appendChild(Login);
            modalFooter2.appendChild(Register);
            modalContent2.appendChild(closeBtn);
            modalContent2.appendChild(modalHeader2);
            modalContent2.appendChild(modalBody2);
            modalContent2.appendChild(modalFooter2);
            modalDialog2.appendChild(modalContent2);
            modal.appendChild(modalDialog2);

            btn.innerHTML = svgFilledHeart + "ADDED TO WISHLIST";
            btn.style.backgroundColor = "#230268";
            btn.classList.remove("text-black");
            btn.classList.add("text-white", "added", "email-added-once");

            toastAdded();
          }
        });
      } else if (btn.classList.contains("added")) {
        var flits = JSON.parse(localStorage.getItem("flits"));
        if (flits !== null) {
          flits.flits_wishlist_products = "";
          localStorage.setItem("flits", JSON.stringify(flits));
        } else {
          btn.classList.remove("added");
        }
        btn.style.color = "#230268";
        btn.style.backgroundColor = "transparent";
        btn.classList.add("text-black");
        btn.classList.remove("text-white", "added");
        btn.innerHTML = svg + "ADD TO WISHLIST";

        try {
          await fetch("https://tempapi.proj.me/api/nH_E81_f9")
            .then((res) => console.log(res))
            .catch((err) => console.log("Errorrrrr"));
        } catch (error) {
          console.error("Error sending data to API:", error);
        }

        toastRemovedProduct();
      } else {
        var flits = JSON.parse(localStorage.getItem("flits"));
        if (flits !== null) {
          flits.flits_wishlist_products = "table-clock";
          localStorage.setItem("flits", JSON.stringify(flits));
          btn.style.backgroundColor = "#230268";
          btn.classList.remove("text-black");
          btn.classList.add("text-white", "added");
          btn.innerHTML = svgFilledHeart + "ADDED TO WISHLIST";

          try {
            await fetch("https://tempapi.proj.me/api/QGs7adpr5")
              .then((res) => console.log(res))
              .catch((err) => console.log("Errorrrrr"));
          } catch (error) {
            console.error("Error sending data to API:", error);
          }

          toastAdded();
        } else {
          btn.classList.remove("email-added-once");
        }
      }
    });
  }
});
