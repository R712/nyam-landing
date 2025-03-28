document.getElementById("lang-toggle").addEventListener("click", function () {
    const isKorean = this.innerHTML === "English";
    document.querySelectorAll("[data-ko]").forEach(el => {
      el.innerHTML = isKorean ? el.dataset.en : el.dataset.ko;
    });
    // body 클래스 토글
    document.body.classList.toggle("en", isKorean);
    document.querySelectorAll("[class=dummy]").forEach(img => {
        img.src = img.src.includes("-en.")
            ? img.src.replace("-en.", ".")  // "-en"이 있으면 제거
            : img.src.replace(/(\.[a-z]+)$/, "-en$1");  // 확장자 앞에 "-en" 추가
    });
    this.innerHTML = isKorean ? "한국어" : "English";
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });
    sections.forEach((section) => observer.observe(section));
});