const filterBtn = document.querySelector("#btn-filter");
const filterDrawer = document.querySelector(".filter-drawer");

filterBtn.addEventListener("click",() => {
    if(filterBtn.innerHTML === '<i class="fa-solid fa-filter"></i>'){
        filterBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        filterBtn.innerHTML = '<i class="fa-solid fa-filter"></i>';
    }
    filterDrawer.classList.toggle("invisible");
});