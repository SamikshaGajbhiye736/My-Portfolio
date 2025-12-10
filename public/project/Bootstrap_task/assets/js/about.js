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

  //progress bar

document.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    const rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight && !bar.classList.contains("animated")) {
      bar.classList.add("animated");

      let target = parseInt(bar.getAttribute("data-value"));
      let width = 0;

      let fill = setInterval(() => {
        if (width >= target) {
          clearInterval(fill);
        } else {
          width++;
          bar.style.width = width + "%";
        }
      }, 15); // speed control
    }
  });
});
