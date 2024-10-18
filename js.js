let images = document.querySelectorAll(".img");
images.forEach((image) => {
  image.style.backgroundImage = `url(${image.getAttribute("data-image")}) `;
});

var interval_one;
var interval_two;

function one() {
  clearInterval(interval_one);
  clearInterval(interval_two);
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("one");
    images[i].classList.remove("two");
    images[i].classList.add("one");
  }

  let num = 0;
  interval_one = setInterval(() => {
    if (num == images.length) {
      num = 0;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
    }
    images[num].classList.add("selected");
    num++;
  }, 1500);
}

function two() {
  clearInterval(interval_one);
  clearInterval(interval_two);
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("one");
    images[i].classList.remove("two");
    images[i].classList.add("two");
  }

  let num = 0;
  interval_two = setInterval(() => {
    if (num == images.length) {
      num = 0;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("selected");
    }
    images[num].classList.add("selected");
    num++;
  }, 1500);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("slider")) {
    eval(e.target.id)();
  }
});
