// メニュー操作

// トグルリスナーを追加する
function addToggleListener(selected_id, menu_id, toggle_class) {
  let selected_element = document.querySelector(`#${selected_id}`);
  selected_element.addEventListener("click", function(event) {
    event.preventDefault();
    let menu = document.querySelector(`#${menu_id}`);
    menu.classList.toggle(toggle_class);
  });
}

// クリックをリッスンするトグルリスナーを追加する
document.addEventListener("turbo:load", function() {
  addToggleListener("hamburger", "navbar-menu",   "collapse");
  addToggleListener("account",   "dropdown-menu", "active");
});

// 巨大画像のアップロードを防止する
document.addEventListener("turbo:load", function() {
  document.addEventListener("change", function(event) {
    let image_upload = document.querySelector('#micropost_image');
    if (image_upload && image_upload.files.length > 0) { 
      const size_in_megabytes = image_upload.files[0].size/1024/1024;
      if (size_in_megabytes > 5) {
        alert("Maximum file size is 5MB. Please choose a smaller file.");
        image_upload.value = "";
      }
    }
  });
});
