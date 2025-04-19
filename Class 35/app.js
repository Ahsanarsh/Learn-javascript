function greet() {
  let parent = document.getElementById("parent");
  let message = document.getElementById("message");

  if (!message.value) {
    alert("message required");
    return;
  }

  let h1Element = document.createElement("h1");
  h1Element.innerHTML = message.value;
  parent.appendChild(h1Element);
  message.value = "";
}
