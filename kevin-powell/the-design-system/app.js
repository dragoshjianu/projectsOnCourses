
const toggleBtn = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

toggleBtn.addEventListener('click', () => {
  const visible = nav.getAttribute('data-visible')
  if (visible === 'false') {
    nav.setAttribute('data-visible', true);
    toggleBtn.setAttribute('aria-expanded', true);
  };
  if (visible === 'true') {
    nav.setAttribute('data-visible', false);
    toggleBtn.setAttribute('aria-expanded', false);
  }

  console.log(toggleBtn.getAttribute('aria-expanded'));
})

