/**
 * ====================================================================
 * SCRIPT PRINCIPAL — DIM+ SALES PAGE
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Configuração do redirecionamento para o Checkout da Cakto
  const checkoutButtons = document.querySelectorAll('.btn-cta, [data-checkout-button]');
  const targetUrl = window.CAKTO_CHECKOUT_URL || "https://pay.cakto.com.br/pfzm5xf_1371135";
  
  checkoutButtons.forEach(btn => {
    if (btn.tagName === 'A') {
      btn.href = targetUrl;
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const url = window.CAKTO_CHECKOUT_URL || btn.getAttribute('href') || targetUrl;
      
      // Feedback visual ao clicar
      btn.style.transform = "scale(0.96)";
      setTimeout(() => {
        btn.style.transform = "";
        window.location.href = url;
      }, 120);
    });
  });

  // 2. Interatividade da Seção 3 — Experiência do Aplicativo (Tabs do Mockup)
  const tabs = document.querySelectorAll('[data-mockup-tab]');
  const screens = document.querySelectorAll('[data-screen-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetScreen = tab.getAttribute('data-mockup-tab');

      // Atualiza botões
      tabs.forEach(t => t.classList.remove('active', 'border-emerald-500/80', 'bg-emerald-500/10', 'text-emerald-400'));
      tabs.forEach(t => t.classList.add('border-white/10', 'bg-white/5', 'text-slate-300'));
      
      tab.classList.remove('border-white/10', 'bg-white/5', 'text-slate-300');
      tab.classList.add('active', 'border-emerald-500/80', 'bg-emerald-500/10', 'text-emerald-400');

      // Alterna as telas com fade suave
      screens.forEach(screen => {
        if (screen.getAttribute('data-screen-content') === targetScreen) {
          screen.classList.remove('hidden');
          screen.classList.add('animate-in', 'fade-in', 'duration-300');
        } else {
          screen.classList.add('hidden');
          screen.classList.remove('animate-in', 'fade-in', 'duration-300');
        }
      });
    });
  });

  // 3. Efeito de Revelação Suave ao Rolar a Página (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-6');
    observer.observe(el);
  });
});
