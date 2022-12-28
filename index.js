const body = document.querySelector("body");
const start = document.querySelector("#start");
document.addEventListener("keydown", (e) => {
  const { keyCode, key, code } = e;
  start.classList.add("disable");
  const span = document.querySelectorAll("span");
  span.forEach((item) => {
    item.classList.remove("disable");
  });
  span[0].children[0].textContent = "event.key";
  span[0].children[1].textContent = key;
  span[1].children[0].textContent = "event.keyCode";
  span[1].children[1].textContent = keyCode;
  span[2].children[0].textContent = "event.code";
  span[2].children[1].textContent = code;
});
