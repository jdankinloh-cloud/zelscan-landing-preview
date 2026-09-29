(() => {
  'use strict';

  const body = document.body;
  const heroOuter = document.querySelector('.hero-outer');
  const heroBlock = document.querySelector('.heroblock');
  const heroHeader = document.querySelector('.hdr');
  const floatingHeader = document.getElementById('floatingHeader');
  const promo = document.getElementById('promoBar');
  const promoClose = document.getElementById('promoClose');
  const factsPanel = document.getElementById('facts');

  if (heroHeader && floatingHeader) {
    floatingHeader.innerHTML = `<div class="hdr-floating-left">${heroHeader.children[0].innerHTML}</div><div class="hdr-floating-right">${heroHeader.children[1].outerHTML}</div>`;
  }

  document.addEventListener('click', event => {
    const control = event.target.closest('[data-href]');
    if (control) window.location.href = control.dataset.href;
  });

  promoClose?.addEventListener('click', () => {
    promo.classList.add('promo--hidden');
    heroOuter?.classList.add('promo-removed');
    setTimeout(() => { promo.hidden = true; }, 450);
  });

  function updateHeader() {
    if (!heroOuter || !heroBlock) return;
    const show = heroOuter.getBoundingClientRect().bottom <= 96;
    floatingHeader?.classList.toggle('-show', show);
    floatingHeader?.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (promo && !promo.hidden) promo.classList.toggle('promo--hidden', window.scrollY > 60);
  }

  const clamp = value => Math.min(1, Math.max(0, value));
  const smoothStep = value => value * value * (3 - 2 * value);
  let documentFrame = 0;

  function updateDocumentFrame() {
    documentFrame = 0;
    if (!factsPanel || !heroBlock) return;

    const rect = factsPanel.getBoundingClientRect();
    const viewportHeight = Math.max(1, window.innerHeight);
    const restingEdge = Math.max(0, heroBlock.getBoundingClientRect().left);
    const restingRadius = parseFloat(getComputedStyle(heroBlock).borderTopLeftRadius) || 0;

    const enterStart = viewportHeight * 0.92;
    const enterEnd = viewportHeight * 0.16;
    const exitStart = viewportHeight * 1.08;
    const exitEnd = viewportHeight * 0.35;

    const entering = clamp((enterStart - rect.top) / (enterStart - enterEnd));
    const leaving = clamp((exitStart - rect.bottom) / (exitStart - exitEnd));
    const openness = Math.min(smoothStep(entering), 1 - smoothStep(leaving));

    factsPanel.style.setProperty('--document-edge', `${(restingEdge * (1 - openness)).toFixed(2)}px`);
    factsPanel.style.setProperty('--document-radius', `${(restingRadius * (1 - openness)).toFixed(2)}px`);
  }

  function requestDocumentFrame() {
    if (!documentFrame) documentFrame = requestAnimationFrame(updateDocumentFrame);
  }

  function updateOnScroll() {
    updateHeader();
    requestDocumentFrame();
  }

  window.addEventListener('scroll', updateOnScroll, { passive: true });
  window.addEventListener('resize', requestDocumentFrame, { passive: true });
  updateHeader();
  updateDocumentFrame();

  const details = [...document.querySelectorAll('[data-accordion] details')];
  details.forEach(item => item.addEventListener('toggle', () => {
    if (!item.open) return;
    details.forEach(other => { if (other !== item) other.open = false; });
  }));

  const footerWrap = document.querySelector('.ft-word-wrap');
  const footerWord = document.querySelector('.ft-word');
  function fitFooterWord() {
    if (!footerWrap || !footerWord) return;
    footerWord.style.removeProperty('--ft-word-fit');
    const width = footerWord.getBoundingClientRect().width;
    if (width) footerWord.style.setProperty('--ft-word-fit', Math.min(1, (footerWrap.clientWidth - 2) / width).toFixed(4));
  }
  window.addEventListener('resize', fitFooterWord, { passive: true });
  document.fonts?.ready.then(fitFooterWord);
  requestAnimationFrame(fitFooterWord);

  const trigger = document.getElementById('profileTrigger');
  const overlay = document.getElementById('profileModal');
  const close = overlay?.querySelector('.modal-close');
  let previousFocus = null;

  function openModal() {
    previousFocus = document.activeElement;
    overlay?.classList.add('-open');
    overlay?.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
    close?.focus();
  }
  function closeModal() {
    overlay?.classList.remove('-open');
    overlay?.setAttribute('aria-hidden', 'true');
    body.style.removeProperty('overflow');
    previousFocus?.focus?.();
  }

  trigger?.addEventListener('click', openModal);
  close?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', event => { if (event.target === overlay) closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

  const portfolio = document.querySelector('.modal-projects-scroll');
  if (portfolio) {
    let dragging = false;
    let startX = 0;
    let startScroll = 0;
    portfolio.addEventListener('pointerdown', event => {
      dragging = true;
      startX = event.clientX;
      startScroll = portfolio.scrollLeft;
      portfolio.setPointerCapture?.(event.pointerId);
    });
    portfolio.addEventListener('pointermove', event => {
      if (dragging) portfolio.scrollLeft = startScroll - (event.clientX - startX);
    });
    ['pointerup', 'pointercancel'].forEach(type => portfolio.addEventListener(type, () => { dragging = false; }));
    portfolio.addEventListener('dragstart', event => event.preventDefault());
  }
})();
