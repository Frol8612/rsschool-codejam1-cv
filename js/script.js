(function() {
  const btn = document.querySelector('#btn-menu');
  const nav = document.querySelector('#nav-menu');
  const header = document.querySelector('header');
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    delay(300).then(() => {
      nav.classList.toggle('show');
      header.classList.toggle('show');
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (
      btn.classList.contains('active') &&
      target !== btn &&
      target.tagName !== 'UL' &&
      target.className !== 'header__navbar'
    ) {
      btn.classList.remove('active');
      delay(300).then(() => {
        nav.classList.remove('show');
        header.classList.remove('show');
      });
    }

    if (target.hash) {
      e.preventDefault();
      return document
        .getElementById(target.hash.slice(1))
        .scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  });

  document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.clientHeight;
    const linkUp = document.querySelector('#link-up');
  
    if (scrollTop > scrollHeight ) {
      linkUp.classList.add('show');
    } else {
      linkUp.classList.remove('show')
    }
  });
})();
