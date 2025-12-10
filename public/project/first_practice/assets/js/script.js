//   const toggleBtn = document.getElementById("menu-toggle");
//       const navLinks = document.getElementById("nav-links");
//       const icon = toggleBtn.querySelector("i");

//       toggleBtn.addEventListener("click", () => {
//         navLinks.classList.toggle("show");
//         icon.classList.toggle("fa-xmark");
//         icon.classList.toggle("fa-bars");
//       });

//       // Close menu on link click
//       navLinks.querySelectorAll("a").forEach((link) => {
//         link.addEventListener("click", () => {
//           navLinks.classList.remove("show");
//           icon.classList.remove("fa-xmark");
//           icon.classList.add("fa-bars");
//         });
//       });
  
   
   
 
//  const menuIcon = document.getElementById('menu-icon');
//     const navbarLinks = document.getElementById('navbar-links');
//     const mobileMenu = document.getElementById('mobile-menu');
//     const closeBtn = document.getElementById('close-btn');

//     menuIcon.addEventListener('click', () => {
//       mobileMenu.classList.toggle('active');
//     });

//     closeBtn.addEventListener('click', () => {
//       mobileMenu.classList.remove('active');
//     });
 
 
 
//  const faqItems = document.querySelectorAll('.faq-item');
//     faqItems.forEach(item => {
//       item.querySelector('.faq-question').addEventListener('click', () => {
//         item.classList.toggle('active');

//         // Change icons dynamically
//         const icon = item.querySelector('i');
//         if (item.classList.contains('active')) {
//           icon.classList.replace('fa-plus', 'fa-minus');
//         } else {
//           icon.classList.replace('fa-minus', 'fa-plus');
//         }

//         // Close others when one opens
//         faqItems.forEach(otherItem => {
//           if (otherItem !== item) {
//             otherItem.classList.remove('active');
//             const otherIcon = otherItem.querySelector('i');
//             if (otherIcon.classList.contains('fa-minus')) {
//               otherIcon.classList.replace('fa-minus', 'fa-plus');
//             }
//           }
//         });
//       });
//     });



    
  
//     // Animate progress bars
    
//     document.addEventListener("DOMContentLoaded", () => {
//   const bars = document.querySelectorAll(".bar");

//   bars.forEach(bar => {
//     const value = parseInt(bar.getAttribute("data-value"));
//     let current = 0;

//     const interval = setInterval(() => {
//       if (current >= value) {
//         clearInterval(interval);
//       } else {
//         current++;
//         bar.style.width = current + "%";
//       }
//     }, 15); // adjust speed if needed
//   });
// });


    
//     const btn = document.getElementById("backToTop");
//     window.onscroll = () => {
//       if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         btn.style.display = "block";
//       } else {
//         btn.style.display = "none";
//       }
//     };
//     btn.addEventListener("click", () => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     });


//     // logo sec




document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const icon = toggleBtn?.querySelector("i");

  if (toggleBtn && navLinks && icon) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      icon.classList.toggle("fa-xmark");
      icon.classList.toggle("fa-bars");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  const menuIcon = document.getElementById('menu-icon');
  const navbarLinks = document.getElementById('navbar-links');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');

  if (menuIcon && mobileMenu && closeBtn) {
    menuIcon.addEventListener('click', () => mobileMenu.classList.toggle('active'));
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('active'));
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-minus', item.classList.contains('active'));
          icon.classList.toggle('fa-plus', !item.classList.contains('active'));
        }
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherIcon = other.querySelector('i');
            if (otherIcon) {
              otherIcon.classList.replace('fa-minus', 'fa-plus');
            }
          }
        });
      });
    }
  });

  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
    const value = parseInt(bar.getAttribute("data-value")) || 0;
    let current = 0;
    const interval = setInterval(() => {
      if (current >= value) clearInterval(interval);
      else {
        current++;
        bar.style.width = current + "%";
      }
    }, 15);
  });

  const btn = document.getElementById("backToTop");
  if (btn) {
    window.onscroll = () => {
      btn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
    };
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});


  // counter

 const counters = document.querySelectorAll(".counter");
  const speed = 100; // smaller = faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    // Trigger animation when element is visible
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(counter); // Run once
        }
      });
    });

    observer.observe(counter);
  });
    


