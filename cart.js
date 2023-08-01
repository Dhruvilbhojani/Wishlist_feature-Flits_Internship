var cart = document.getElementById("cart");
var cart2 = document.getElementById("cart2");

var addToCart = document.getElementById("addToCart");
if (addToCart) {
  addToCart.addEventListener("click", function () {
    if (localStorage) {
      var flits = JSON.parse(localStorage.getItem("flits"));
      if (flits) {
        if (flits.flits_cart == "Clock") {
          if (flits.flits_product_count > -1) {
            flits.flits_product_count++;
            localStorage.setItem("flits", JSON.stringify(flits));
          }
        } else {
          flits.flits_cart = "Clock";
          flits.flits_product_count = 1;
          localStorage.setItem("flits", JSON.stringify(flits));
          console.log("Not null");
        }
      } else {
        var flits = {};
        flits.flits_cart = "Clock";
        flits.flits_product_count = 1;
        localStorage.setItem("flits", JSON.stringify(flits));
      }
    }
  });
}

function cartFunction() {
  if (localStorage) {
    var flits = JSON.parse(localStorage.getItem("flits"));
  }
  var modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("id", "exampleModalCenter");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalCenterTitle");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("style", "--bs-modal-width: 700px");

  var modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "w-100");
  modalDialog.setAttribute("role", "document");

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content", "rounded-0");

  var modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header", "justify-content-between");
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
  modalTitle.classList.add("modal-title", "text-gray");
  modalTitle.setAttribute("id", "exampleModalCenterTitle");
  modalTitle.innerHTML = "SHOPPING CART";

  var modalBody = document.createElement("div");
  modalBody.classList.add("modal-body", "justify-content-center");

  var center = document.createElement("center");

  var row = document.createElement("div");
  row.classList.add("row");
  var col1 = document.createElement("div");
  col1.classList.add("col-12", "col-sm-6", "d-flex", "align-items-center");
  col1.style.textAlign = "start";
  var img = document.createElement("img");
  img.setAttribute("src", "./res/white-alarm-clock_900x.webp");
  img.classList.add("img-fluid", "col-2", "col-sm-3");
  var desc = document.createElement("div");
  desc.classList.add("text-gray", "col-8", "col-sm-9", "p-3");
  desc.innerHTML = "Alarm Clock <br>White/With Batteries";

  var col2 = document.createElement("div");
  col2.classList.add(
    "col",
    "align-items-center",
    "d-flex",
    "justify-content-between",
    "flex-row"
  );
  var counter = document.createElement("div");
  counter.classList.add("btn-group", "ms-4");
  counter.setAttribute("role", "group");

  var cm = document.createElement("button");
  cm.classList.add("btn", "btn-outline-secondary");
  cm.innerHTML = "-";
  var txt = document.createElement("button");
  txt.classList.add("btn", "btn-outline-secondary");
  txt.setAttribute("disabled", "");
  txt.innerHTML = flits.flits_product_count;
  var cp = document.createElement("button");
  cp.classList.add("btn", "btn-outline-secondary");
  cp.innerHTML = "+";
  counter.appendChild(cm);
  counter.appendChild(txt);
  counter.appendChild(cp);

  var price = document.createElement("p");
  price.classList.add("m-3");
  price.innerHTML = "Rs. 450.00";

  var remove = document.createElement("button");
  remove.classList.add("text-black", "rounded-5", "border-0", "m-3");
  remove.style.backgroundColor = "lightgray";
  remove.innerHTML = "X";

  var modalFooter = document.createElement("div");
  modalFooter.classList.add(
    "modal-footer",
    "d-flex",
    "flex-column",
    "align-items-end"
  );

  var total = document.createElement("div");
  total.classList.add("text-gray", "text-end");
  total.innerHTML =
    "<p>Subtotal <b>Rs. " +
    (450.0 * flits.flits_product_count).toFixed(2) +
    "</b></p>";

  var tax = document.createElement("div");
  tax.classList.add("text-gray", "fst-italic", "fw-medium", "text-end");
  tax.innerHTML = "Taxes and shipping calculated at checkout";

  var btns = document.createElement("div");
  btns.classList.add("d-flex", "mt-4");
  var select = document.createElement("select");
  select.classList.add("form-select", "rounded-0");
  //   select.style.height = "3rem";
  var option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.innerHTML = "Select option to use store Credits:";
  var option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.innerHTML =
    "You can use Rs." +
    (450 * flits.flits_product_count * 15) / 100 +
    " credit out of Rs. 1,800.96";

  var checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add("btn", "ms-3");
  checkoutBtn.style.backgroundColor = "#2e94b1";
  checkoutBtn.style.color = "white";
  checkoutBtn.style.borderRadius = "3px";
  checkoutBtn.innerHTML = "CHECKOUT";
  //   checkoutBtn.style.height = "3rem";

  cm.addEventListener("click", function () {
    console.log("clicked");
    flits.flits_product_count--;
    if (flits.flits_product_count == 0) {
      modalContent.removeChild(modalFooter);
      modalBody.innerHTML = "Continue browsing here...";
      modalContent.appendChild(modalBody);
    }
    txt.innerHTML = flits.flits_product_count;
    total.innerHTML =
      "<p>Subtotal <b>Rs. " +
      (450.0 * flits.flits_product_count).toFixed(2) +
      "</b></p>";
    option2.innerHTML =
      "You can use Rs." +
      (450 * flits.flits_product_count * 15) / 100 +
      " credit out of Rs. 1,800.96";
    localStorage.setItem("flits", JSON.stringify(flits));
  });
  cp.addEventListener("click", function () {
    console.log("clicked");
    flits.flits_product_count++;
    txt.innerHTML = flits.flits_product_count;
    total.innerHTML =
      "<p>Subtotal <b>Rs. " +
      (450.0 * flits.flits_product_count).toFixed(2) +
      "</b></p>";
    option2.innerHTML =
      "You can use Rs." +
      (450 * flits.flits_product_count * 15) / 100 +
      " credit out of Rs. 1,800.96";
    localStorage.setItem("flits", JSON.stringify(flits));
  });
  remove.addEventListener("click", function () {
    flits.flits_product_count = 0;
    localStorage.setItem("flits", JSON.stringify(flits));
    modalContent.removeChild(modalFooter);
    modalBody.innerHTML = "Continue browsing here...";
    modalContent.appendChild(modalBody);
  });
  modalHeader.appendChild(modalTitle);
  modalBody.appendChild(center);
  col1.appendChild(img);
  col1.appendChild(desc);
  col2.appendChild(counter);
  col2.appendChild(price);
  col2.appendChild(remove);
  row.appendChild(col1);
  row.appendChild(col2);
  center.appendChild(row);
  modalFooter.appendChild(total);
  modalFooter.appendChild(tax);
  select.appendChild(option1);
  select.appendChild(option2);
  btns.appendChild(select);
  btns.appendChild(checkoutBtn);
  modalFooter.appendChild(btns);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalHeader);
  if (flits.flits_product_count !== 0) {
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
  } else {
    modalBody.innerHTML = "Continue browsing here...";
    modalContent.appendChild(modalBody);
  }
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  $(modal).modal("show");
}

cart.addEventListener("click", cartFunction);
cart2.addEventListener("click", cartFunction);
