(function ($) {
    "use strict";

    $('.nav-list').on('click', function () {
        $(this).toggleClass('show');
        $(this).parent().find('>ul').slideToggle().toggleClass('show');
    });

    $('.nav-open, .nav-close a').on('click', function () {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').toggleClass('navActive');
    });
    $('.dark-shadow').on('click', function () {
        $('.mobile-nav-wrapper, .mobile-nav, .dark-shadow').removeClass('navActive');
    });
    // $('.dark-shadow').on('click', function() {
    //     $(this).toggleClass('d-none');
    // });
    // document.getElementById('menuToggle').addEventListener('click', () => {
    //     const navLinks = document.getElementById('navLinks');
    //     navLinks.classList.toggle('active');
    //   });

    //   document.querySelectorAll('.dropdown-toggle').forEach(item => {
    //     item.addEventListener('click', event => {
    //       event.preventDefault();
    //       const dropdownMenu = event.target.nextElementSibling;
    //       dropdownMenu.classList.toggle('show');
    //     });
    //   });

    // Custom Cursor
    //  $("body").append('<div class="mt-cursor"></div>');
    //  var cursor = $(".mt-cursor"),
    //      linksCursor = $("a, .swiper-nav, button, .cursor-effect"),
    //      crossCursor = $(".cross-cursor");

    //  $(window).on("mousemove", function (e) {
    //      cursor.css({
    //          transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
    //          visibility: "inherit",
    //      });
    //  });

    //wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });

})(jQuery);



const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 50,
    // centeredSlides: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});





document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement;
        const isActive = accordion.classList.contains('active');

        // Close all
        document.querySelectorAll('.accordion').forEach(acc => {
            acc.classList.remove('active');
            acc.querySelector('.toggle_icon').textContent = '+';
            acc.querySelector('.accordion-content').style.maxHeight = null;
        });

        // Open if not active
        if (!isActive) {
            accordion.classList.add('active');
            header.querySelector('.toggle_icon').textContent = '-';
            const content = accordion.querySelector('.accordion-content');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});






//Reviews part 

// document.addEventListener("DOMContentLoaded", () => {
//     const rows = document.querySelectorAll(".rating-row");
//     rows.forEach((row, index) => {
//         const bar = row.querySelector(".progress-bar");
//         const text = row.querySelector(".percentage");
//         const targetPercent = parseInt(bar.getAttribute("data-percent"));
//         let current = 0;
//         setTimeout(() => {
//             const interval = setInterval(() => {
//                 if (current >= targetPercent) {
//                     clearInterval(interval);
//                 } else {
//                     current++;
//                     bar.style.width = current + "%";
//                     text.textContent = current + "%";
//                 }
//             }, 15);
//         }, index * 400);
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".reviews-container");
    const rows = document.querySelectorAll(".rating-row");

    // observer for scroll into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rows.forEach((row, index) => {
                    const bar = row.querySelector(".progress-bar");
                    const text = row.querySelector(".percentage");
                    const targetPercent = parseInt(bar.getAttribute("data-percent"));
                    let current = 0;

                    setTimeout(() => {
                        // use requestAnimationFrame for smoothness
                        const animate = () => {
                            if (current < targetPercent) {
                                current++;
                                bar.style.width = current + "%";
                                text.textContent = current + "%";
                                requestAnimationFrame(animate);
                            } else {
                                bar.style.width = targetPercent + "%";
                                text.textContent = targetPercent + "%";
                            }
                        };
                        animate();
                    }, index * 300); // stagger each row
                });
                observer.unobserve(container); // run once
            }
        });
    }, { threshold: 0.3 });

    observer.observe(container);
});



