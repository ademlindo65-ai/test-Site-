// GSAP Animations
gsap.from(".logo", { duration: 1, y: -50, opacity: 0 });
gsap.from(".coaches h2", { duration: 1, x: -100, opacity: 0 });

// Animate WhatsApp buttons
gsap.from(".whatsapp-btn", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// Sidebar Toggle
const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
let sidebarOpen = false;

menuIcon.addEventListener("click", () => {
    if (!sidebarOpen) {
        gsap.to(sidebar, { right: 0, duration: 0.5 });
        sidebarOpen = true;
    } else {
        gsap.to(sidebar, { right: -250, duration: 0.5 });
        sidebarOpen = false;
    }
});

// Why section toggle
document.getElementById("why-title").addEventListener("click", () => {
    const content = document.getElementById("why-content");
    if (content.style.display === "block") {
        gsap.to(content, { height: 0, opacity: 0, duration: 0.5, onComplete: () => content.style.display = "none" });
    } else {
        content.style.display = "block";
        gsap.fromTo(content, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.5 });
    }
});
