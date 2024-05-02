let light = document.getElementById("circle");

document.getElementById("button").addEventListener("click", () => {
  light.classList.remove("flash-animation");
  setTimeout(function () {
    light.classList.add("flash-animation");
  }, 100);
});

let eject = document.getElementById("photo");

document.getElementById("button").addEventListener("click", () => {
  eject.classList.remove("eject-photo");
  setTimeout(function () {
    eject.classList.add("eject-photo");
  }, 100);
});

document.getElementById("button").addEventListener("click", () => {
  // Buat elemen overlay
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Tambahkan overlay ke dalam body
  document.body.appendChild(overlay);

  // Hapus overlay setelah animasi selesai
  setTimeout(() => {
    overlay.remove();
  }, 500); // Sesuaikan dengan durasi animasi dalam milidetik
});
