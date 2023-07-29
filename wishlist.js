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
    var flits = JSON.parse(localStorage.getItem("flits"));
    if (flits !== null) {
      btn.classList.add("email-added-once");
      if (flits.flits_wishlist_products == "table-clock") {
        btn.classList.add("added");
        btn.style.backgroundColor = "#230268";
        btn.classList.remove("text-black");
        btn.classList.add("text-white", "added");
        btn.innerHTML = svgFilledHeart + "ADDED TO WISHLIST";
      }
    }

    btn.addEventListener("click", async function () {
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

        var modalTitle = document.createElement("h5");
        modalTitle.classList.add("modal-title");
        modalTitle.setAttribute("id", "exampleModalCenterTitle");
        modalTitle.innerHTML = "WHAT's YOUR EMAIL?";

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
            var flits = {};
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

            var modalTitle2 = document.createElement("h5");
            modalTitle2.classList.add("modal-title");
            modalTitle2.setAttribute("id", "exampleModalCenterTitle");
            modalTitle2.innerHTML = "PRODUCT HAS BEEN ADDED TO YOUR WISHLIST";

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
