/* -----------------------------
   手機選單 (Hamburger Menu)
------------------------------ */

const nav = document.querySelector("nav");

// 若你未來加入手機版漢堡按鈕，可啟用以下程式碼
// const menuBtn = document.querySelector(".menu-btn");
// menuBtn.addEventListener("click", () => {
//     nav.classList.toggle("open");
// });


/* -----------------------------
   滑動淡入動畫 Scroll Fade-in
------------------------------ */

const fadeElements = document.querySelectorAll(".card, section h2, .day-card");

function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);


/* 初始化所有需要淡入動畫的元素 */
fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.8s ease";
});


/* -----------------------------
   返回頂部按鈕 (Scroll to Top)
------------------------------ */

const toTopBtn = document.createElement("div");
toTopBtn.innerHTML = "▲";
toTopBtn.style.position = "fixed";
toTopBtn.style.bottom = "25px";
toTopBtn.style.right = "25px";
toTopBtn.style.background = "#8EC5FC";
toTopBtn.style.color = "white";
toTopBtn.style.padding = "12px 15px";
toTopBtn.style.borderRadius = "10px";
toTopBtn.style.cursor = "pointer";
toTopBtn.style.fontSize = "18px";
toTopBtn.style.zIndex = "999";
toTopBtn.style.display = "none";
toTopBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
document.body.appendChild(toTopBtn);

/* 顯示/隱藏按鈕 */
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
});

/* 點擊回頂部 */
toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* -----------------------------
   Hero 區塊進場動畫
------------------------------ */

const hero = document.querySelector(".hero");

if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(15px)";
    hero.style.transition = "all 1s ease";

    window.addEventListener("load", () => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    });
}
