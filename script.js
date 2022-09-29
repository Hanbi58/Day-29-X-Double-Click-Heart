const image = document.querySelector(".image");
const heart = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {
  heart.classList.toggle("active");
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   const buttonTop = e.target.offsetTop;
  //   const buttonLeft = e.target.offsetLeft;

  //   const xInside = x - buttonLeft;
  //   const yInside = y - buttonTop;

  vfx(e.offsetX, e.offsetY);
});

function vfx(x, y) {
  const vfxEl = document.createElement("span");
  if (heart.classList.contains("active")) {
    vfxEl.innerText = "♥";
    vfxEl.classList.add("like");
    vfxEl.style.left = `${x}px`;
    vfxEl.style.top = `${y}px`;
    vfxEl.style.transform = "translate(-15% , -25%)";

    image.appendChild(vfxEl);
    setTimeout(() => {
      image.removeChild(vfxEl);
    }, 299);
  }
}
