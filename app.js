'use strict';
(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const dialog = document.querySelector('#project-dialog');
  const dialogContent = document.querySelector('#dialog-content');
  let returnFocus = null;
  let previousHash = '#work';
  let pushedProject = false;
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  function openProject(id, updateHistory = true) {
    const project = projects.find(item => item.id === id);
    if (!project) return;
    if (!dialog.open) {
      returnFocus = document.activeElement;
      if (updateHistory) previousHash = location.hash || '#work';
    }
    const e = escapeHTML;
    dialogContent.innerHTML = `<div class="dialog-header"><p class="eyebrow">${e(project.category)}</p><h2 id="dialog-title" tabindex="-1">${e(project.name)}</h2><p class="dialog-desc">${e(project.desc)}</p><div class="dialog-meta"><div><span>COMPANY / PERIOD</span>${e(project.company)} · ${e(project.period)}</div><div><span>MY ROLE</span>${e(project.role)}</div></div><div class="tags">${project.tags.map(tag => `<span>${e(tag)}</span>`).join('')}</div></div><div class="dialog-gallery">${project.images.map((img, index) => `<figure><a href="assets/${e(img)}.webp" target="_blank" rel="noopener" aria-label="${e(project.alt[index])} 큰 이미지 새 탭에서 보기"><span class="device"><span class="device-viewport"><img src="assets/${e(img)}.webp" alt="${e(project.alt[index])}"></span></span></a><figcaption>${e(project.alt[index])} ↗</figcaption></figure>`).join('')}</div><div class="dialog-body"><section><h3>프로젝트와 담당 범위</h3><p>${e(project.context)}</p></section><section><h3>구현과 기술적 판단</h3>${project.decisions.map(([title, text]) => `<div class="decision"><h4>${e(title)}</h4><p>${e(text)}</p></div>`).join('')}</section><section class="outcome"><h3>이 경험에서 남긴 것</h3><p>${e(project.outcome)}</p></section><div class="dialog-footer"><button class="button" data-close>프로젝트 목록으로 <span>↙</span></button></div></div>`;
    if (updateHistory) {
      history.pushState({ project: id }, '', `#project-${id}`);
      pushedProject = true;
    }
    document.body.classList.add('modal-open');
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.querySelector('#dialog-title').focus({ preventScroll: true });
  }
  function restorePage() {
    document.body.classList.remove('modal-open');
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
  }
  function closeProject() {
    if (dialog.open) dialog.close();
    if (location.hash.startsWith('#project-')) {
      if (pushedProject) history.back();
      else history.replaceState(null, '', previousHash);
    }
    pushedProject = false;
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-project]');
    if (trigger) openProject(trigger.dataset.project);
    if (event.target.closest('[data-close], .close-dialog')) closeProject();
  });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
  dialog.addEventListener('close', restorePage);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  });
  function handleHash() {
    if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9), false);
    else if (dialog.open) { dialog.close(); pushedProject = false; }
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();
  const copyButton = document.querySelector('.copy-email');
  const toast = document.querySelector('#toast');
  let toastTimer;
  copyButton.addEventListener('click', async () => {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('loversstar@naver.com');
        success = true;
      } else {
        const field = document.createElement('textarea');
        field.value = 'loversstar@naver.com';
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(field);
        field.select();
        success = document.execCommand('copy');
        field.remove();
        copyButton.focus({ preventScroll: true });
      }
    } catch { success = false; }
    toast.textContent = success ? '이메일 주소를 복사했습니다.' : '주소를 직접 복사해 주세요: loversstar@naver.com';
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
  });
  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.header nav a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('#home, #work, #engineering, #about, #contact').forEach(section => observer.observe(section));
  }
})();

// Motion enhances the reading experience; the pause control and OS preference
// always leave the complete content available.
(() => {
  const root = document.documentElement;
  const body = document.body;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const toggle = document.querySelector('.motion-toggle');
  const exhibit = document.querySelector('.hero-exhibit');
  let paused = preference.matches;
  let revealObserver;
  const revealElements = [...document.querySelectorAll('.section-heading, .project-card, .engineering-index, .stack, .contact-top')];
  function applyMotionPreference() {
    paused = paused || preference.matches;
    body.classList.toggle('motion-paused', paused);
    toggle.disabled = preference.matches;
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.setAttribute('aria-label', paused ? '애니메이션 켜기' : '애니메이션 끄기');
    toggle.querySelector('.motion-label').textContent = preference.matches ? '모션 최소화' : (paused ? '모션 켜기' : '모션 끄기');
    if (preference.matches) toggle.setAttribute('aria-label', '기기의 동작 줄이기 설정 적용 중');
    toggle.querySelector('.motion-icon').textContent = paused ? '▷' : 'Ⅱ';
    root.style.scrollBehavior = paused ? 'auto' : '';
    if (paused) {
      revealElements.forEach(element => element.classList.remove('is-pending'));
      exhibit.style.removeProperty('--pointer-x');
      exhibit.style.removeProperty('--pointer-y');
    }
  }
  toggle.addEventListener('click', () => { paused = !paused; applyMotionPreference(); });
  preference.addEventListener('change', event => { paused = event.matches; applyMotionPreference(); });
  applyMotionPreference();
  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('is-pending');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    revealElements.forEach(element => {
      element.classList.add('reveal');
      if (!paused && element.getBoundingClientRect().top > window.innerHeight) element.classList.add('is-pending');
      revealObserver.observe(element);
    });
  }
  exhibit.addEventListener('pointermove', event => {
    if (paused || !finePointer.matches) return;
    const rect = exhibit.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 9;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 7;
    exhibit.style.setProperty('--pointer-x', `${x.toFixed(2)}px`);
    exhibit.style.setProperty('--pointer-y', `${y.toFixed(2)}px`);
  }, { passive: true });
  exhibit.addEventListener('pointerleave', () => {
    exhibit.style.setProperty('--pointer-x', '0px');
    exhibit.style.setProperty('--pointer-y', '0px');
  });
  let progressFrame = 0;
  function updateProgress() {
    progressFrame = 0;
    const distance = root.scrollHeight - window.innerHeight;
    const progress = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0;
    root.style.setProperty('--reading-progress', progress.toFixed(4));
  }
  function requestProgress() {
    if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
  }
  window.addEventListener('scroll', requestProgress, { passive: true });
  window.addEventListener('resize', requestProgress, { passive: true });
  document.addEventListener('toggle', requestProgress, true);
  window.addEventListener('load', requestProgress);
  updateProgress();
})();
