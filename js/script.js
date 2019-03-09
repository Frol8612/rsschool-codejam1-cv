(function() {
  const btn = document.querySelector('#btn-menu');
  const nav = document.querySelector('#nav-menu');

  const delay = (ms) => new Promise(res => setTimeout(res, ms));


  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    delay(300).then(() => {
      nav.classList.toggle('show');
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (btn.classList.contains('active') && target !== btn && target.tagName !== 'UL' && target.className !== 'header__navbar') {
      btn.classList.remove('active');
      delay(300).then(() => {
        nav.classList.remove('show');
      });
    }
  });

})();
