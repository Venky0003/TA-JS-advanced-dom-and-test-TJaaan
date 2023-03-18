document.addEventListener("DOMContentLoaded", function () {
    alert("The content of the DOM is loaded");
  
    let quoteContainer = document.getElementById("container");
    let start = 0;
    let end = quotes.length;
  
    function getPost() {
      if (start < end) {
        for (let i = start; i < end; i++) {
          const data = quotes[i];
          addData(data);
          start++;
        }
      }
    }
  
    function addData(data) {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h2 class="title">${data.quoteText}</h2>
        <p class="text">${data.quoteAuthor}</p>
      `;
      quoteContainer.appendChild(postElement);
    }
  
    window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
      if (clientHeight + scrollTop >= scrollHeight - 5) {
        getPost();
      }
    });
  
    // Load only the first three quotes at start
    for (let i = 0; i < 3 && i < quotes.length; i++) {
      const data = quotes[i];
      addData(data);
      start++;
    }
  
  });
 
  