console.log("connected")

//*lightbox*//

var slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  console.log(slides)
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

prevImgBtn.addEventListener("click", (e) => {
  productImg.classList.add("fade");
  if (imgIndex !== 0) {
    imgIndex--;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 3;
    changeImgUrl(imgIndex);
  }
  setTimeout(toggleFade, 600);
});

nextImgBtn.addEventListener("click", (e) => {
  productImg.classList.add("fade");
  if (imgIndex < 3) {
    imgIndex++;
    changeImgUrl(imgIndex);
  } else {
    imgIndex = 0;
    changeImgUrl(imgIndex);
  }
  setTimeout(toggleFade, 600);
});

imgThumbs.addEventListener("click", (e) => {
  productImg.classList.add("fade");

  const thumbnails = [...imgThumbs.children];
  var thumbIndex = Array.prototype.indexOf.call(imgThumbs.children, e.target);

  thumbnails.forEach((img) => {
    img.classList.remove("selected");
    e.target.classList.add("selected");
    productImg.src = imgArray[thumbIndex];

    if (thumbIndex == 0) {
      imgIndex = 1;
    } else {
      imgIndex = thumbIndex + 1;
    }
  });
  setTimeout(toggleFade, 600);
});

//*Cart*//

var addToCartButton = document.getElementById("addToCartButton")
console.log(addToCartButton)
addToCartButton.addEventListener("click", (e) => {
  console.log("addedtocart")
}
)