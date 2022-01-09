const btn = document.querySelector(".btn");
const images = document.querySelector(".images");
i = 1;
btn.addEventListener("click", function () {
  i++;
  images.innerHTML += `<img src="https://picsum.photos/200/300?random=${i}">`;
});
