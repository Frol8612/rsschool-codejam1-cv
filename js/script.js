window.addEventListener('load', () => {
  const btn = document.querySelector('#btn-menu');
  const nav = document.querySelector('#nav-menu');
  const header = document.querySelector('header');

  const arrElements = [nav, header];

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const toggleClass = (elem, nameClass) => {
    if(Array.isArray(elem)) {
      elem.forEach(item => {
        item.classList.toggle(nameClass);
      })
    } else {
      elem.classList.toggle(nameClass);
    }
  }

  btn.addEventListener('click', () => {
    toggleClass(btn, 'active');
    delay(300).then(toggleClass(arrElements, 'show-menu'));
  });

  document.addEventListener('click', (e) => {
    const {
      target,
      target: { 
        tagName,
        className,
        hash,
      },
    } = e;

    if (
      btn.classList.contains('active') &&
      target !== btn &&
      tagName !== 'UL' &&
      className !== 'header__navbar'
    ) {
      toggleClass(btn, 'active');
      delay(300).then(toggleClass(arrElements, 'show-menu'));
    }

    if (hash) {
      e.preventDefault();
      return document
        .getElementById(hash.slice(1))
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.clientHeight;
    const linkUp = document.querySelector('#link-up');

    if (scrollTop > scrollHeight) {
      linkUp.classList.add('show-link');
    } else {
      linkUp.classList.remove('show-link');
    }
  });
});
