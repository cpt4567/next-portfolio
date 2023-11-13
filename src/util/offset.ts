export const offsetMove = (location: locationType) => {
  switch (location) {
    case 'home':
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
      break;
    case 'info':
      window.scrollTo({
        left: 0,
        top:
          document.querySelectorAll('.text-item')[0].getBoundingClientRect().top +
          window.scrollY -
          50,
        behavior: 'smooth',
      });

      break;
    case 'profile':
      window.scrollTo({
        left: 0,
        top:
          document.querySelectorAll('.text-item')[1].getBoundingClientRect().top +
          window.scrollY -
          50,
        behavior: 'smooth',
      });
      break;
    case 'work':
      window.scrollTo({
        left: 0,
        top:
          document.querySelectorAll('.text-item')[2].getBoundingClientRect().top +
          window.scrollY -
          50,
        behavior: 'smooth',
      });
      break;

    default:
      break;
  }
};
