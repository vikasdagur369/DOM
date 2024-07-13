let statos = document.querySelector("h5");
let btn = document.querySelector("#add");

btn.addEventListener("click", function () {
  if (statos.textContent === "Student") {
    statos.innerHTML = "friends";
    statos.style.color = "green";
    btn.innerHTML = "Remove Friend";
    // btn.style.color = "black";
  } else if (statos.textContent === "friends") {
    statos.innerHTML = "Student";
    statos.style.color = "red";
    btn.innerHTML = "Add Friend";
  }
});
