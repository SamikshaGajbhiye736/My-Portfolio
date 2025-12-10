// about section

document.addEventListener("scroll", function() {
    const features = document.querySelectorAll('.feature-box');
    features.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < window.innerHeight - 50) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      }
    });
  });

  // emergency section

   document.getElementById('emergencyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Our team will contact you shortly.');
    this.reset();
  });

  // solution section

  const playBtn = document.getElementById('playBtn');
  const videoModalEl = document.getElementById('videoModal');
  const youtubeFrame = document.getElementById('youtubeFrame');
  const bsModal = new bootstrap.Modal(videoModalEl, { keyboard: true });

  // YOUR chosen YouTube embed (you gave this earlier)
  // Add &autoplay=1 to auto-play when modal opens
  const ytEmbed = "https://www.youtube.com/embed/7tFyvcaDu5k?si=wAuT5BbiAEM5Vamr&autoplay=1";

  playBtn.addEventListener('click', () => {
    youtubeFrame.src = ytEmbed;
    bsModal.show();
  });

  // Stop video on modal close (clear src)
  videoModalEl.addEventListener('hidden.bs.modal', () => {
    youtubeFrame.src = "";
  });

  // Accessibility: allow Enter/Space to trigger play
  playBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playBtn.click(); }
  });

  // counter section

  const counters = document.querySelectorAll('.counter-number');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;

      const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
          count += increment;
          counter.innerText = count.toFixed(target % 1 === 0 ? 0 : 2) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });
  };

  // Trigger when visible
  let started = false;
  window.addEventListener('scroll', () => {
    const sectionTop = document.querySelector('.counter-section').offsetTop;
    const scrollY = window.scrollY + window.innerHeight;
    if (scrollY > sectionTop && !started) {
      started = true;
      animateCounters();
    }
  });


  // team section

   const teamSection = document.querySelector('.team-section');
    let shown = false;
    window.addEventListener('scroll', () => {
      const sectionTop = teamSection.offsetTop;
      const scrollY = window.scrollY + window.innerHeight;
      if (scrollY > sectionTop && !shown) {
        shown = true;
        console.log("Team section now visible!");
      }
    });


    // faq section

    const faqData = [
      {
        question: "What Kind Of Work Can A Handyman Do?",
        answer: "A handyman can handle small home repairs, maintenance tasks, and installations like fixing leaks, painting, or assembling furniture."
      },
      {
        question: "Can A Handyman Do Plumbing Work?",
        answer: "A handyman is a skilled professional who can perform a wide range of repair and maintenance tasks around your home or business, including basic plumbing and electrical work."
      },
      {
        question: "Does A Handyman Need Insurance?",
        answer: "Yes, all professional handymen should carry insurance to protect both themselves and their clients in case of accidental damage or injury."
      },
      {
        question: "How Should I Pay To A Plumber?",
        answer: "You can pay by cash, card, or online transfer. We also provide digital invoices for your convenience and transparency."
      }
    ];

    const accordion = document.getElementById("faqAccordion");

    faqData.forEach((faq, index) => {
      const item = document.createElement("div");
      item.classList.add("accordion-item");
      item.innerHTML = `
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button ${index !== 1 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${index}" aria-expanded="${index === 1}" aria-controls="collapse${index}">
            ${index + 1}. ${faq.question}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse ${index === 1 ? "show" : ""}" 
             aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">${faq.answer}</div>
        </div>
      `;
      accordion.appendChild(item);
    });


    // project section
    const carousel = document.getElementById("projectsCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 360, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -360, behavior: "smooth" });
});



   