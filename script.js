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
// Form popup success message + redirect to thankyou.html
document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Create popup box
            const popup = document.createElement("div");
            popup.classList.add("popup-box");
            popup.innerHTML = `
                <div class="popup-content">
                    <h2>Success!</h2>
                    <p>Your form has been submitted.</p>
                </div>
            `;

            document.body.appendChild(popup);

            // Auto fade out + redirect
            setTimeout(() => {
                popup.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = "thankyou.html";
                }, 300);
            }, 1500);
        });
    });
});
