// Mobile navigation drawer toggle (fixed class typo)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Auto-close mobile drawer when any navigation link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

const skillCards = document.querySelectorAll('.skill-card');

if (skillCards.length) {
  const revealSkills = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const skillObserver = new IntersectionObserver(revealSkills, {
    threshold: 0.2,
  });

  skillCards.forEach((card) => skillObserver.observe(card));
}

// Architecture Blueprint Modal Handlers
function openArchModal() {
  const modal = document.getElementById('archModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeArchModal() {
  const modal = document.getElementById('archModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeArchModalOnBackdrop(event) {
  if (event.target.id === 'archModal') {
    closeArchModal();
  }
}

// Tab Switching Engine
function switchArchTab(index) {
  const tabs = document.querySelectorAll('.arch-tab');
  const panes = document.querySelectorAll('.arch-pane');
  
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  
  panes.forEach((pane, i) => {
    pane.classList.toggle('active', i === index);
  });
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeArchModal();
  }
});