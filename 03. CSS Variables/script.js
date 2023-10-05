const image = document.querySelector("img");
const size = document.querySelector(`input[name="size"]`);
const blur = document.querySelector(`input[name="blur"]`);
const color = document.querySelector(`input[name="color"]`);

size.addEventListener("input", (e) => {
  const sizeValue = e.target.value;
  document.documentElement.style.setProperty("--image-width", `${sizeValue}%`);
  document.documentElement.style.setProperty("--image-height", `${sizeValue}%`);
  // image.style.width = `${sizeValue}%`;
  // image.style.height = `${sizeValue}%`;
});

blur.addEventListener("input", (e) => {
  const blurValue = e.target.value;
  document.documentElement.style.setProperty("--image-blur", `${blurValue}px`);
  // image.style.filter = `blur(${blurValue}px)`;
});

color.addEventListener("input", (e) => {
  const colorValue = e.target.value;
  document.documentElement.style.setProperty("--image-bg", colorValue);
});
