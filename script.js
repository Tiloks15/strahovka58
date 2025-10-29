// Helpers
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Year in footer
$('#year').textContent = new Date().getFullYear();

// Modal controls
const modal = $('#policyModal');
const osagoModal = $('#osagoModal');
const kaskoModal = $('#kaskoModal');
const openers = ['#openPolicy', '#openPolicyMobile'].map((s) => $(s)).filter(Boolean);
const osagoOpener = $('#openOSAGO');
const kaskoOpener = $('#openKASKO');
const closers = $$('[data-close]', modal).concat($$('[data-close]', osagoModal)).concat($$('[data-close]', kaskoModal));

function openModal() {
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function openOSAGOModal() {
  osagoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function openKASKOModal() {
  kaskoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  osagoModal.setAttribute('aria-hidden', 'true');
  kaskoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openers.forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); openModal(); }));
osagoOpener.addEventListener('click', (e) => { e.preventDefault(); openOSAGOModal(); });
kaskoOpener.addEventListener('click', (e) => { e.preventDefault(); openKASKOModal(); });
closers.forEach((el) => el.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Form handling: WhatsApp handoff
const form = $('#policyForm');
const businessPhone = '79613540005';

function buildMessage(values) {
  const lines = [
    'Здравствуйте! Хочу оформить полис.',
    `Имя: ${values.name}`,
    `Телефон: ${values.phone}`,
    `Тип полиса: ${values.type}`,
    values.comment ? `Комментарий: ${values.comment}` : undefined,
  ].filter(Boolean);
  return lines.join('\n');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const msg = encodeURIComponent(buildMessage(data));
  const url = `https://wa.me/${businessPhone}?text=${msg}`;
  window.open(url, '_blank', 'noopener');
  closeModal();
});

// OSAGO form handling
const osagoForm = $('#osagoForm');
osagoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(osagoForm).entries());
  const msg = encodeURIComponent(`Здравствуйте! Хочу оформить полис ОСАГО.\nИмя: ${data.name}\nТелефон: ${data.phone}\nАвтомобиль: ${data.car}\nГод выпуска: ${data.year}${data.vin ? `\nVIN: ${data.vin}` : ''}`);
  const url = `https://wa.me/${businessPhone}?text=${msg}`;
  window.open(url, '_blank', 'noopener');
  closeModal();
});

// KASKO form handling
const kaskoForm = $('#kaskoForm');
kaskoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(kaskoForm).entries());
  const msg = encodeURIComponent(`Здравствуйте! Хочу оформить полис Каско.\nИмя: ${data.name}\nТелефон: ${data.phone}\nАвтомобиль: ${data.car}\nГод выпуска: ${data.year}\nСтоимость: ${data.cost} руб.${data.vin ? `\nVIN: ${data.vin}` : ''}`);
  const url = `https://wa.me/${businessPhone}?text=${msg}`;
  window.open(url, '_blank', 'noopener');
  closeModal();
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

$$('.reveal').forEach((el) => io.observe(el));


