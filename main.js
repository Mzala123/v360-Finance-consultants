
const toggle_open = document.getElementById("toggle_open")
const toggle_close = document.getElementById("toggle_close")

const nav_items =  document.querySelector("header > .nav_items");


const open_menu_handler = ()=>{
    // nav_items.classList.remove('close_menu')
    nav_items.classList.toggle('close_menu')
    nav_items.classList.add('open_menu')
}

const close_menu_handler = ()=>{
    nav_items.classList.add('close_menu')
}


toggle_open.addEventListener("click", open_menu_handler)
toggle_close.addEventListener("click", close_menu_handler)