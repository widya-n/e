// الكشف عن العناصر عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };

    // مراقبة العناصر في صفحة الجودة
    if (document.querySelector('.certificates')) {
        const certificates = document.querySelectorAll('.certificate');
        const certificateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);

        certificates.forEach(cert => {
            certificateObserver.observe(cert);
        });
    }

    // مراقبة العناصر في صفحة الإنتاج
    if (document.querySelector('.production-steps')) {
        const steps = document.querySelectorAll('.production-step');
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 200);
                }
            });
        }, observerOptions);

        steps.forEach(step => {
            stepObserver.observe(step);
        });
    }

    // مراقبة العناصر في صفحة آراء العملاء
    if (document.querySelector('.testimonials')) {
        const testimonials = document.querySelectorAll('.testimonial');
        const testimonialObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 150);
                }
            });
        }, observerOptions);

        testimonials.forEach(testimonial => {
            testimonialObserver.observe(testimonial);
        });
    }
});

// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// زر العودة للأعلى
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
            this.innerHTML = mainNav.classList.contains("active") 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // إغلاق القائمة عند النقر على أي رابط داخلها
        document.querySelectorAll(".main-nav a").forEach(link => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("active");
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // التأكد من أن الزر موجود قبل إضافة الحدث
    const button = document.querySelector(".your-button");
    if (button) {
        button.addEventListener("click", function () {
            console.log("تم الضغط على الزر!");
        });
    }
});
menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    this.innerHTML = mainNav.classList.contains("active") 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});