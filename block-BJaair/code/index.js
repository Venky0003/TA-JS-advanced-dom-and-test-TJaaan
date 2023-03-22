let notices = JSON.parse(localStorage.getItem("notices")) || [];

let titleInput = document.getElementById("notice-title");
let categoryInput = document.getElementById("notice-category");
let addBtn = document.getElementById("add-notice-btn");
let noticesList = document.getElementById("notices");

function addNotice() {
 let title = titleInput.value;
 let category = categoryInput.value;

  if (title === "") {
    alert("Please enter notice title.");
    return;
  }

  let notice = { title, category };
  notices.unshift(notice);
  localStorage.setItem("notices", JSON.stringify(notices));

  displayNotices();
  titleInput.value = "";
}

function displayNotices() {
  noticesList.innerHTML = "";

  notices.forEach((notice, index) => {
    let li = document.createElement("li");
    li.className = "notice";
    li.innerHTML = `
     <p class="notice-category">${notice.category}</p>
      <h3 class="notice-title">${notice.title}</h3>`;
    li.addEventListener("dblclick", () => {
      let titleElem = li.querySelector(".notice-title");
      let categoryElem = li.querySelector(".notice-category");

      titleElem.innerHTML = `<input class="edit-input" type="text" value="${notice.title}">`;
      titleElem.querySelector("input").addEventListener("blur",() => {
        let newTitle = editInput.value;
        if (newTitle !== "") {
          notice.title = newTitle;
          localStorage.setItem("notices", JSON.stringify(notices));
          displayNotices();
        } else {
          titleElem.innerHTML = notice.title;
        }
      });
      categoryElem.innerHTML = `<input class="edit-input" type="text" value="${notice.category}">`;
      let categoryInput = categoryElem.querySelector("input");
      categoryInput.addEventListener("blur", () => {
        let newCategory = categoryInput.value;
        notice.category = newCategory;
        localStorage.setItem("notices", JSON.stringify(notices));
        displayNotices();
      });
    });
    
    noticesList.append(li);
  });
}

displayNotices();

addBtn.addEventListener("click", addNotice);