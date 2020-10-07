export default function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return [
    rect.bottom >= 0 &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight),
    rect.top > (window.innerHeight || document.documentElement.clientHeight)
  ];
}
