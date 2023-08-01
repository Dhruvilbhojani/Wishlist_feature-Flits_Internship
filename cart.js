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

async function cartFunction() {
  var flits;
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
  if (flits) {
    if (flits.flits_product_count == null) {
      txt.innerHTML = "0";
    } else txt.innerHTML = flits.flits_product_count;
  } else {
    txt.innerHTML = "0";
  }

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

  // SUB TOTAL INITIALIZING
  if (flits) {
    if (flits.flits_product_count == null) {
      total.innerHTML == "0";
    } else {
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count).toFixed(2) +
        "</b></p>";
    }
  } else {
    total.innerHTML == "0";
  }

  var tax = document.createElement("div");
  tax.classList.add("text-gray", "fst-italic", "fw-medium", "text-end");
  tax.innerHTML = "Taxes and shipping calculated at checkout";

  // SELECT DISCOUNTS
  var btns = document.createElement("div");
  btns.classList.add("d-flex", "mt-4");
  var select = document.createElement("select");
  select.classList.add("form-select", "rounded-0");
  var option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.innerHTML = "Select option to use store Credits:";
  var option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  var sValue = 0,
    credits = 0,
    percentage = 0;

  try {
    const response = await fetch("https://tempapi.proj.me/api/UYEpW_QSK");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    credits = data.flits_total_store_credits;
    percentage = data.flits_discount_percentage;
    // console.log(data.flits_total_store_credits);
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
  select.addEventListener("change", async function () {
    sValue = select.value; //selection value
    if (sValue == 2) {
      var usableCredits = (450 * flits.flits_product_count * percentage) / 100;
      if (usableCredits > credits) usableCredits = credits;
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count - usableCredits).toFixed(2) +
        "</b></p>";
    }
  });
  console.log("dvcf" + credits);

  if (flits) {
    if (flits.flits_product_count == null) {
      // txt.innerHTML = "0";
    } else {
      var usableCredits = (450 * flits.flits_product_count * percentage) / 100;
      if (usableCredits > credits) usableCredits = credits;
      console.log(usableCredits);
      console.log(credits);
      option2.innerHTML =
        "You can use Rs." + usableCredits + " credit out of Rs. " + credits;
    }
  }

  var checkoutBtn = document.createElement("button");
  checkoutBtn.classList.add("btn", "ms-3");
  checkoutBtn.style.backgroundColor = "#2e94b1";
  checkoutBtn.style.color = "white";
  checkoutBtn.style.borderRadius = "3px";
  checkoutBtn.innerHTML = "CHECKOUT";
  //   checkoutBtn.style.height = "3rem";

  cm.addEventListener("click", function () {
    flits.flits_product_count--;
    if (flits.flits_product_count == 0) {
      modalContent.removeChild(modalFooter);
      modalBody.innerHTML = "Continue browsing here...";
      modalContent.appendChild(modalBody);
    }
    txt.innerHTML = flits.flits_product_count;
    var usableCredits = (450 * flits.flits_product_count * percentage) / 100;
    if (usableCredits > credits) usableCredits = credits;
    console.log(usableCredits);
    if (sValue == 2) {
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count - usableCredits).toFixed(2) +
        "</b></p>";
    } else {
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count).toFixed(2) +
        "</b></p>";
    }
    option2.innerHTML =
      "You can use Rs." + usableCredits + " credit out of Rs. " + credits;
    localStorage.setItem("flits", JSON.stringify(flits));
  });
  cp.addEventListener("click", function () {
    flits.flits_product_count++;
    txt.innerHTML = flits.flits_product_count;
    var usableCredits = (450 * flits.flits_product_count * percentage) / 100;
    if (usableCredits > credits) usableCredits = credits;
    console.log(usableCredits);

    if (sValue == 2) {
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count - usableCredits).toFixed(2) +
        "</b></p>";
    } else {
      total.innerHTML =
        "<p>Subtotal <b>Rs. " +
        (450.0 * flits.flits_product_count).toFixed(2) +
        "</b></p>";
    }
    option2.innerHTML =
      "You can use Rs." + usableCredits + " credit out of Rs. " + credits;
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
  if (flits) {
    if (flits.flits_product_count > 0 && flits.flits_product_count !== null) {
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
    } else {
      modalBody.innerHTML = "Continue browsing here...";
      modalContent.appendChild(modalBody);
    }
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
