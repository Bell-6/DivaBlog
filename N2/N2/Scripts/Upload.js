const abrir = document.getElementById("abrirmodal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

abrir.addeventListener("click", () => {
    overlay.style.display = "flex";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
})