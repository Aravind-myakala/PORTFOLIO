// Basic DOM helpers
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.nav-link');
const openBtn = document.getElementById('openSidebarMobile');
const closeBtn = document.getElementById('toggleSidebarMobile');
const overlay = document.getElementById('overlay');



// Mobile open/close
openBtn && openBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('show');
});
closeBtn && closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});

// Smooth scroll and close sidebar on mobile after click
links.forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(a.dataset.target);
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    // close on mobile
    if (window.innerWidth < 800) sidebar.classList.remove('open');
  });
});

// Active link observer (highlights nav link based on scroll)
const sections = document.querySelectorAll('main .panel');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      links.forEach(l => l.classList.toggle('active', l.dataset.target === id));
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => observer.observe(s));


document.getElementById("viewResume").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("RESUME.pdf", "_blank");
});


// small: animate skill bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.skill-bar > div').forEach((el) => {
    const w = el.style.width;
    el.style.width = '0%';
    setTimeout(()=> el.style.width = w, 200);
  });
});
