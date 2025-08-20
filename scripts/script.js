function toggleNav() {
  const bodyEl = document.querySelector("body");

  bodyEl.classList.toggle("collapsed");

  const navBlockSpanList = document.querySelectorAll(".nav-block > span");
  for(let i = 0; i < navBlockSpanList.length; i++) {
    navBlockSpanList[i].classList.toggle("hidden");
  }

}



