(function() {
  const btn = document.querySelector('#btn-menu');
  const nav = document.querySelector('#nav-menu');

  /* const delay = (ms) => new Promise(res => setTimeout(res, ms)); */

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('show');
  });
})();
