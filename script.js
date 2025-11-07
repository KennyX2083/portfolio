function smoothScroll(id, event) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("intro-screen").classList.add("ready");

  // Disable scroll on page load
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");

  const intro = document.getElementById("intro-screen");

  function removeIntro() {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
    }, 800);

    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");

    // Remove listeners so it doesn't trigger twice
    window.removeEventListener("keydown", removeIntro);
    window.removeEventListener("click", removeIntro);
    window.removeEventListener("touchstart", removeIntro);
  }

  window.addEventListener("keydown", removeIntro);
  window.addEventListener("click", removeIntro);
  window.addEventListener("touchstart", removeIntro);

});