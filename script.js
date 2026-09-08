// Mobile menu
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');

  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px';
  nav.style.background = '#f8f6f1';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #e8e3d9';
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll('nav a').forEach(a =>
  a.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      document.querySelector('nav').style.display = 'none';
    }
  })
);

// Consultation form
document.getElementById('leadForm')?.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;

  // Get all form values
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const phone = form.elements['phone'].value.trim();
  const destination = form.elements['destination'].value;
  const message = form.elements['message'].value.trim();

  // Create WhatsApp message
  const whatsappMessage = `New Consultation Request

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
🌍 Interested Destination: ${destination}
💬 Message: ${message || 'No message provided'}`;

  // WhatsApp number
  const whatsappNumber = '918886555094';

  // Create WhatsApp URL
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp
  window.open(whatsappURL, '_blank');

  // Show confirmation
  const formMessage = document.getElementById('formMessage');

  if (formMessage) {
    formMessage.textContent = 'Opening WhatsApp...';
  }

  // Reset form
  form.reset();
});