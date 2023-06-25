
let menu_btn = document.querySelector('.menu')
let menu_btn_icon = document.querySelector('.menu i')
let dropdown = document.querySelector('.navbar')


menu_btn.onclick = function() {
   let isOpen = dropdown.classList.toggle('open')
   menu_btn_icon.classList = isOpen
   ? 'fa-solid fa-xmark'
   : 'fa-solid fa-bars'
}


menu_btn.addEventListener("click", () => {
   dropdown.classList.toggle("active");
})