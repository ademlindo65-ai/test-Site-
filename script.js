document.addEventListener("DOMContentLoaded", () => {
    // تحريك القائمة الجانبية
    gsap.from(".sidebar", {
        x: 250,
        duration: 1,
        ease: "power2.out"
    });

    // تحريك العناصر في الصفحة الرئيسية
    gsap.from(".main-image", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    // تحريك صور المعرض
    gsap.from(".gallery-image", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // تحريك عناصر الفروع
    gsap.from(".branch", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // تحريك عناصر الأخبار
    gsap.from(".news-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // تحريك عناصر التحديات
    gsap.from(".challenge", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    // تحريك عناصر المسابقات
    gsap.from(".contest", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});
