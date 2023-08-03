document.addEventListener("DOMContentLoaded", function () {
  var label = document.createElement("label");
  label.setAttribute("for", "PAN");
  label.classList.add("text-gray", "PAN");
  label.innerHTML = "PAN no 1";

  var br = document.createElement("br");
  var br2 = document.createElement("br");

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add(
    "registerPAN",
    "rounded-1",
    "py-2",
    "mb-3",
    "px-3",
    "text-gray"
  );
  input.setAttribute("name", "PAN");
  input.setAttribute("id", "PAN");
  input.placeholder = "PAN no 1";

  var submitBtn = document.getElementById("submitBtn");
  submitBtn.parentNode.insertBefore(br, submitBtn);
  br.parentNode.insertBefore(input, br);
  input.parentNode.insertBefore(br2, input);
  br2.parentNode.insertBefore(label, br2);
});
