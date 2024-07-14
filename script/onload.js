const onLoading = () => {
    document.addEventListener("DOMContentLoaded", function () {
        // Add loading class to body to disable scrolling
        document.body.classList.add("loading");
      
        const loaderWrapper = document.querySelector(".loader-wrapper");
        const content = document.getElementById("content");
      
        // Simulate a loading process
        setTimeout(() => {
          loaderWrapper.style.display = "none";
          content.classList.remove("hidden");
      
          // Remove loading class to enable scrolling
          document.body.classList.remove("loading");
        }, 3000); // Adjust the timeout duration as needed
      });
}

// export {onLoading};