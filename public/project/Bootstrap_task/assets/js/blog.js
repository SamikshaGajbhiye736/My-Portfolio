//sliding section

const pages = document.querySelectorAll(".slide-page");
    const pageButtons = document.querySelectorAll(".pagination-btn[data-page]");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentPage = 1;

    function showPage(pageNum) {
      if (pageNum < 1 || pageNum > pages.length) return;
      pages.forEach((p) => p.classList.remove("active"));
      pages[pageNum - 1].classList.add("active");
      pageButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`.pagination-btn[data-page="${pageNum}"]`)
        .classList.add("active");
      currentPage = pageNum;
    }

    pageButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        showPage(parseInt(btn.dataset.page));
      });
    });

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) showPage(currentPage - 1);
    });

    nextBtn.addEventListener("click", () => {
      if (currentPage < pages.length) showPage(currentPage + 1);
    });