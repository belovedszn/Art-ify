document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const rightPanelButtons = document.getElementById("right-panel-buttons");
  const mobileBtn = document.getElementById("mobileBtn");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      // Clear existing buttons
      rightPanelButtons.innerHTML = "";
      mobileBtn.innerHTML = "";

      // Add buttons based on the selected option
      if (this.id === "buy-arts") {
        rightPanelButtons.innerHTML = `
                    <a href="/Art-ify/html/shop-by-category.html"><button class="btn btn-buy-join">Next</button></a>
                `;
      } else if (this.id === "sell-arts") {
        rightPanelButtons.innerHTML = `
                    <button class="btn btn-sell-join">Next</button>
                `;
      } else if (this.id === "curate-arts") {
        rightPanelButtons.innerHTML = `
                <button class="btn btn-curate-join">Next</button>
                `;
      } else if (this.id === "invest-arts") {
        rightPanelButtons.innerHTML = `
                <button class="btn btn-invest-join">Next</button>
                `;
      } else if (this.id === "mobile-buy-arts") {
        mobileBtn.innerHTML = `
                <a href="/Art-ify/html/shop-by-category.html"><button class="mobileBtn">Next</button></a>
                `;
      } else if (this.id === "mobile-sell-arts") {
        mobileBtn.innerHTML = `
                <button class="">Next</button>
                `;
      } else if (this.id === "mobile-curate-arts") {
        mobileBtn.innerHTML = `
                <button class="">Next</button>
                `;
      } else if (this.id === "mobile-invest-arts") {
        mobileBtn.innerHTML = `
                <button class="">Next</button>
                `;
      }

      // Show buttons
      rightPanelButtons.style.display = "flex";
      mobileBtn.style.display = "grid";
    });
  });
});
