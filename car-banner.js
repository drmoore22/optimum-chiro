(function () {
  try {
    var p = location.pathname.replace(/\/$/, '');
    if (p.indexOf('car-accident-chiropractor-mobile-al') > -1 || p.indexOf('thank-you') > -1) return;
    var nav = document.querySelector('nav');
    if (!nav) return;
    var css = document.createElement('style');
    css.textContent = '.car-banner{background:#2a7a6f;color:#fff;text-align:center;padding:10px 16px;font-size:.9rem;line-height:1.4}.car-banner a{color:#fff;font-weight:600;text-decoration:underline;text-underline-offset:3px;display:inline-block;padding:4px 2px}.car-banner a:hover{color:#e0c06a}';
    document.head.appendChild(css);
    var b = document.createElement('div');
    b.className = 'car-banner';
    b.innerHTML = 'In a car accident? Dr. Moore takes calls and texts 24/7 at <a href="tel:+12512818768">(251) 281-8768</a>. <a href="/car-accident-chiropractor-mobile-al">Car accident care and MRI slider &rarr;</a>';
    nav.parentNode.insertBefore(b, nav.nextSibling);
  } catch (e) {}
})();
