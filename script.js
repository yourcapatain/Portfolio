const nav = document.querySelector('.nav');
    const background = document.querySelector('.fixed-background');
    let isFixed = false;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0 && !isFixed) {
        nav.classList.add('fixed-nav');
        background.style.display = 'block';
        isFixed = true;
      } else if (window.scrollY === 0 && isFixed) {
        nav.classList.remove('fixed-nav');
        background.style.display = 'none';
        isFixed = false;
      }
    });