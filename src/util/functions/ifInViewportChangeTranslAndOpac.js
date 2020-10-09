import isInViewport from './isInViewport';

export default function ifInViewportChangeTranslAndOpac(el) {
  var element = document.querySelector(el);

  const res = isInViewport(element);
  if (res && res[0]) {
    if (element.style.opacity !== '1') element.style.opacity = '1';
    if (element.style.transform !== 'translateY(0)')
      element.style.transform = 'translateY(0)';
  }
  if (res && res[1]) {
    if (element.style.opacity !== '0') element.style.opacity = '0';
    if (element.style.transform !== 'translateY(100px)')
      element.style.transform = 'translateY(100px)';
  }
}
