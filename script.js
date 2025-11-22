// رقم الواتساب
const phone = "966562886943";

// زر تغيير اللغة
document.getElementById("lang-toggle").addEventListener("click", function () {
  const isArabic = document.documentElement.lang === "ar";
  
  if (isArabic) {
    // التحويل إلى إنجليزي
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    this.textContent = "AR";
    
    // ترجمة العناصر الأساسية (اختياري)
    const translations = {
      "المساج": "Massage",
      "مناكير": "Manicure",
      "بدكير": "Pedicure",
      "حمام مغربي": "Moroccan_bath",
      "احجز الآن": "Book Now"
    };
    
    // تطبيق الترجمة (بشكل بسيط)
    document.querySelectorAll("nav a").forEach((el, i) => {
      const texts = ["المساج", "مناكير", "بدكير", "حمام مغربي"];
      el.textContent = translations[texts[i]] || el.textContent;
    });
    document.querySelector(".book-btn").textContent = "Book Now";
    
  } else {
    // العودة إلى عربي
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    this.textContent = "EN";
    
    // استرجاع النصوص العربية
    const arTexts = ["المساج", "مناكير", "بدكير", "حمام مغربي"];
    document.querySelectorAll("nav a").forEach((el, i) => {
      el.textContent = arTexts[i];
    });
    document.querySelector(".book-btn").textContent = "احجز الآن";
  }
});

// زر الحجز
document.querySelectorAll(".book-btn").forEach(button => {
  button.addEventListener("click", function () {
    const service = this.getAttribute("data-service") || "خدمة";
    const message = `مرحباً، أرغب في حجز خدمة ${service} من موقع Anovara.`;
    const url = `https://wa.me/${966562886943}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});