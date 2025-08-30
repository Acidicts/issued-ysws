document.addEventListener('DOMContentLoaded', function() {
    const faqIcons = document.getElementsByClassName("faq-icon");
    
    Array.from(faqIcons).forEach(icon => {
        icon.addEventListener("click", () => {
            const answer = icon.parentElement.nextElementSibling.nextElementSibling;
            const isOpen = answer.classList.contains("open");
            
            if (isOpen) {
                answer.classList.remove("open");
                icon.classList.remove("opened");
                setTimeout(() => {
                    icon.textContent = "+";
                }, 250);
            } else {
                answer.classList.add("open");
                icon.classList.add("opened");
                setTimeout(() => {
                    icon.textContent = "−";
                }, 250);
            }
        });
    });
});