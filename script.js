// =========================
// 📌 script.js
// =========================

// Cover screen fade-out when ENTER is clicked
function enterSite() {
    const cover = document.getElementById("cover-screen");

    cover.style.opacity = "0";
    cover.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        cover.style.display = "none";
    }, 800);
}
