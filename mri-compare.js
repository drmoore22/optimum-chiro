(function () {
  function init(root) {
    var stage = root.querySelector('.mri-stage');
    var range = root.querySelector('.mri-range');
    var base = root.querySelector('.mri-base');
    var chips = root.querySelectorAll('.mri-chip');
    var info = root.querySelector('.mri-info');
    var layers = root.querySelectorAll('.mri-layer');
    var DEFAULT = info ? info.getAttribute('data-default') : '';
    function setPos(v) {
      v = Math.max(0, Math.min(100, v));
      stage.style.setProperty('--pos', v + '%');
      range.value = v;
    }
    range.addEventListener('input', function () { setPos(parseFloat(range.value)); });
    var dragging = false;
    function fromEvent(e) {
      var r = stage.getBoundingClientRect();
      setPos(((e.clientX - r.left) / r.width) * 100);
    }
    stage.addEventListener('pointerdown', function (e) { dragging = true; try { stage.setPointerCapture(e.pointerId); } catch (x) {} fromEvent(e); });
    stage.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    stage.addEventListener('pointerup', function () { dragging = false; });
    stage.addEventListener('pointercancel', function () { dragging = false; });
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var key = chip.getAttribute('data-layer');
        var on = chip.getAttribute('aria-pressed') === 'true';
        chips.forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
        layers.forEach(function (l) { l.classList.remove('is-on'); });
        root.classList.remove('has-layer');
        if (on) { if (info) info.textContent = DEFAULT; return; }
        chip.setAttribute('aria-pressed', 'true');
        var layer = root.querySelector('.mri-layer[data-layer="' + key + '"]');
        if (layer) layer.classList.add('is-on');
        root.classList.add('has-layer');
        if (info) info.textContent = chip.getAttribute('data-info');
      });
    });
    function fail() { root.classList.add('mri-fallback'); }
    if (base.complete && base.naturalWidth === 0) fail();
    base.addEventListener('error', fail);
    setPos(50);
  }
  function boot() { document.querySelectorAll('.mri-compare[data-mri]').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
