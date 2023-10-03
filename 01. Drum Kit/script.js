const audios = {
  a: { sound: "clap" },
  s: { sound: "hihat" },
  d: { sound: "kick" },
  f: { sound: "openhat" },
  g: { sound: "boom" },
  h: { sound: "ride" },
  j: { sound: "snare" },
  k: { sound: "tom" },
  l: { sound: "tink" },
};

window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (!audios[key]) return;

  const audioFile = new Audio(`sounds/${audios[key].sound}.wav`);
  audioFile.play();

  const el = document.querySelector(`div[data-key=${key}]`);
  el.classList.add("playing");
});

window.addEventListener("keyup", (e) => {
  const key = e.key;
  if (!audios[key]) return;

  const el = document.querySelector(`div[data-key=${key}]`);
  el.classList.remove("playing");
});

// window.addEventListener("keyup", (e) => {
//   if (e.key == "a") {
//     btnA.classList.remove("playing");
//   }
// });

// const btnA = document.getElementById("btn-a");

// btnA.addEventListener("mousedown", (e) => {
//   window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
// });

// btnA.addEventListener("mouseup", (e) => {
//   window.dispatchEvent(new KeyboardEvent("keyup", { key: "a" }));
// });
